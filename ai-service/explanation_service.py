import logging
from typing import Dict, Any, Optional
import google.generativeai as genai
from llm_service import _get_gemini_model  # Re-use model instance and configuration

logger = logging.getLogger(__name__)

def generate_evaluation_summary(scores: Dict[str, Any], evaluation: Optional[Dict[str, Any]] = None) -> str:
    """
    Generates a professional evaluation summary using the LLM based purely on computed deterministic scores.
    """
    
    final_score = evaluation.get("final_score", 0) if evaluation else 0
    category = evaluation.get("category", "Unknown") if evaluation else "Unknown"

    prompt = f"""
Given the following evaluation metrics and final proposal score:

Novelty Score: {scores.get('novelty_score', 0)}
Methodology Score: {scores.get('methodology_score', 0)}
Feasibility Score: {scores.get('feasibility_score', 0)}
Completeness Score: {scores.get('completeness_score', 0)}
Risk Density Score: {scores.get('risk_density_score', 0)}
Highest Similarity With Existing Proposal: {scores.get('highest_similarity', 0.0)}

Final Proposal Score: {final_score}
Category: {category}

Explain why the proposal received this evaluation.

RULES:
- Explain strengths first.
- Then explain weaknesses.
- Explain how similarity affected novelty.
- Explain how missing sections affected feasibility or completeness.
- Maintain formal institutional tone.
- Limit output to 150-200 words.
- Return plain text only.
"""

    try:
        model = _get_gemini_model()
        response = model.generate_content(prompt)
        return response.text.strip()
    except Exception as e:
        logger.error(f"Failed to generate evaluation summary: {e}")
        return "Explanation generation failed due to an internal error."
