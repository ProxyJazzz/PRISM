from fastapi import FastAPI, UploadFile, File, HTTPException
import time
from typing import Dict, Any
from dotenv import load_dotenv

from extraction import extract_text_from_pdf, clean_text, get_page_count
from llm_service import extract_structured_sections
from embedding_service import generate_embedding, build_embedding_input
from utils.hash_service import compute_document_hash
from db_service import find_similar_proposals, store_proposal, check_duplicate_hash
from scoring_engine import compute_scores
from explanation_service import generate_evaluation_summary
from validation_service import validate_document_type
from evaluation_engine import compute_proposal_index
from document_classifier import classify_document_type

# Load environment variables from .env file
load_dotenv()

app = FastAPI(
    title="R&D Proposal Screening System - Deterministic Base",
    description="Phase 1: Deterministic PDF Text Extraction Foundation",
    version="1.0.0"
)

@app.post("/analyze", response_model=Dict[str, Any])
async def analyze_proposal(file: UploadFile = File(...)) -> Dict[str, Any]:
    """
    Analyzes an uploaded PDF proposal file by deterministically extracting and cleaning its text.
    """
    if file.content_type != "application/pdf":
        raise HTTPException(status_code=400, detail="Only PDF files are accepted.")
    
    start_time = time.time()
    file_path = f"temp_{file.filename}"
    
    try:
        # Save file temporarily
        with open(file_path, "wb") as f:
            f.write(await file.read())
            
        print(f"File {file.filename} saved to {file_path}")
        
        # 1. Get Page Count
        num_pages = get_page_count(file_path)
            
        # 2. Extract Text Deteministically
        raw_text = extract_text_from_pdf(file_path)
        
        # 3. Clean the text
        cleanstr = clean_text(raw_text)
        
        # 3.5 Exact duplicate check before expensive operations
        document_hash = compute_document_hash(cleanstr)
        duplicate_result = check_duplicate_hash(document_hash)
        
        if duplicate_result:
            return {
                "duplicate_detected": True,
                "existing_proposal_id": duplicate_result[0],
                "existing_file": duplicate_result[1],
                "message": "This document already exists in the database."
            }
        
        # Phase 4.6 Document Classification
        document_classification = classify_document_type(cleanstr)
        doc_type = document_classification.get("document_type")
        
        # Init base variables
        structured_data = {}
        similar_proposals = []
        evaluation_scores = None
        evaluation_summary = None
        proposal_evaluation = None
        current_id = None
        validation_result = None
        
        if doc_type in ["Research Proposal", "Research Paper", "Technical Report"]:
            # 4. Extract structured sections via LLM
            structured_data = extract_structured_sections(cleanstr)
            
            # 5. Extract specific sections to generate an embedding for similarity
            objectives = structured_data.get("objectives", "")
            methodology = structured_data.get("methodology", "")
            
            embedding_input = build_embedding_input(
                objectives=objectives,
                methodology=methodology,
                raw_text=cleanstr
            )
            
            if embedding_input:
                new_embedding = generate_embedding(embedding_input)
                
                # Compute top-5 similarity from PostgreSQL DB before inserting
                similar_proposals = find_similar_proposals(new_embedding, limit=5)
                
                # Phase 4.5 Document Validation Layer
                validation_result = validate_document_type(raw_text, structured_data)

                # 7. Hybrid Scoring & Explainability Layer (Only for Research Proposals)
                if validation_result.get("validation_passed") is True and doc_type == "Research Proposal":
                    evaluation_scores = compute_scores(structured_data, similar_proposals)
                    proposal_evaluation = compute_proposal_index(evaluation_scores)
                    evaluation_summary = generate_evaluation_summary(evaluation_scores, proposal_evaluation)

                # Persist proposal using database
                current_id = store_proposal(
                    file_name=file.filename,
                    pages=num_pages,
                    text_length=len(cleanstr),
                    structured_data=structured_data,
                    raw_text=raw_text,
                    embedding=new_embedding,
                    document_hash=document_hash
                )
        
        # Calculate processing time
        processing_timems = (time.time() - start_time) * 1000
        
        response = {
            "status": "processed",
            "file_name": file.filename,
            "proposal_id": current_id,
            "pages": num_pages,
            "text_length": len(cleanstr),
            "document_classification": document_classification,
            "structured_data": structured_data,
            "similar_proposals": similar_proposals,
            "validation_result": validation_result,
            "evaluation_scores": evaluation_scores,
            "proposal_evaluation": proposal_evaluation,
            "evaluation_summary": evaluation_summary,
            "preview": cleanstr[:300] if cleanstr else "",
            "processing_time_ms": round(float(processing_timems), 2)
        }
        
        if doc_type != "Research Proposal":
            response["message"] = f"Document classified as {doc_type}. Proposal scoring skipped."
        elif isinstance(validation_result, dict) and not validation_result.get("validation_passed", True):
             response["message"] = "Document does not meet research proposal criteria."
             
        return response
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        # Clean up temporary file locally
        import os
        if os.path.exists(file_path):
            os.remove(file_path)