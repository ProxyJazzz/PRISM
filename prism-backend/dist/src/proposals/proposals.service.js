"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ProposalsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProposalsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
const ai_service_1 = require("../ai/ai.service");
let ProposalsService = ProposalsService_1 = class ProposalsService {
    prisma;
    aiService;
    logger = new common_1.Logger(ProposalsService_1.name);
    constructor(prisma, aiService) {
        this.prisma = prisma;
        this.aiService = aiService;
    }
    async uploadProposal(userId, file) {
        try {
            this.logger.log(`Forwarding ${file.originalname} to AI service`);
            const aiAnalysis = await this.aiService.analyzeProposal(file);
            if (!aiAnalysis) {
                throw new common_1.InternalServerErrorException("AI analysis failed");
            }
            this.logger.log(`AI response received. AI Proposal ID: ${aiAnalysis.proposal_id}`);
            return await this.prisma.$transaction(async (tx) => {
                const proposal = await tx.proposal.create({
                    data: {
                        userId: userId,
                        fileName: file.originalname,
                        aiProposalId: aiAnalysis.proposal_id,
                        status: "processed",
                    },
                });
                const evaluation = aiAnalysis.proposal_evaluation || {};
                await tx.proposalAnalysis.create({
                    data: {
                        proposalId: proposal.id,
                        finalScore: evaluation.final_score ?? null,
                        category: evaluation.category ?? null,
                        evaluationSummary: aiAnalysis.evaluation_summary ?? null,
                        analysisJson: aiAnalysis,
                    },
                });
                return {
                    proposalId: proposal.id,
                    analysis: aiAnalysis,
                };
            });
        }
        catch (error) {
            this.logger.error("Upload Error:", error);
            if (error instanceof common_1.InternalServerErrorException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException("Database failure during proposal storage");
        }
    }
    async getUserProposals(userId) {
        this.logger.log(`Fetching proposals for user: ${userId}`);
        try {
            const proposals = await this.prisma.proposal.findMany({
                where: { userId: userId },
                select: {
                    id: true,
                    fileName: true,
                    uploadDate: true,
                    analysis: {
                        select: {
                            finalScore: true,
                            category: true,
                            analysisJson: true,
                        },
                    },
                },
                orderBy: { uploadDate: 'desc' },
            });
            return proposals.map((p) => {
                let documentType = undefined;
                if (p.analysis?.analysisJson) {
                    const json = p.analysis.analysisJson;
                    documentType = json?.document_classification?.document_type;
                }
                return {
                    proposalId: p.id,
                    fileName: p.fileName,
                    createdAt: p.uploadDate,
                    finalScore: p.analysis?.finalScore ?? null,
                    category: p.analysis?.category ?? null,
                    documentType,
                };
            });
        }
        catch (error) {
            this.logger.error("Error fetching user proposals:", error);
            throw new common_1.InternalServerErrorException('Database failure during proposal retrieval');
        }
    }
    async getProposalById(proposalId, userId) {
        this.logger.log(`Fetching proposal details for proposalId: ${proposalId}, userId: ${userId}`);
        try {
            const proposal = await this.prisma.proposal.findFirst({
                where: { id: proposalId, userId: userId },
                select: {
                    id: true,
                    fileName: true,
                    analysis: {
                        select: {
                            analysisJson: true,
                        },
                    },
                },
            });
            if (!proposal) {
                return null;
            }
            return {
                proposalId: proposal.id,
                fileName: proposal.fileName,
                analysis: proposal.analysis?.analysisJson ?? null,
            };
        }
        catch (error) {
            this.logger.error("Error fetching proposal details:", error);
            throw new common_1.InternalServerErrorException('Database failure during proposal retrieval');
        }
    }
    async getProposalAnalytics(userId) {
        this.logger.log(`Generating analytics for user: ${userId}`);
        try {
            const analyses = await this.prisma.proposalAnalysis.findMany({
                where: {
                    proposal: {
                        userId: userId,
                    },
                },
                select: {
                    finalScore: true,
                    category: true,
                },
            });
            const totalProposals = analyses.length;
            let totalScore = 0;
            let scoredCount = 0;
            const categoryDistribution = {};
            analyses.forEach((a) => {
                if (a.finalScore !== null) {
                    totalScore += a.finalScore;
                    scoredCount++;
                }
                if (a.category) {
                    categoryDistribution[a.category] =
                        (categoryDistribution[a.category] || 0) + 1;
                }
            });
            const averageScore = scoredCount > 0 ? Math.round(totalScore / scoredCount) : 0;
            return {
                totalProposals,
                averageScore,
                categoryDistribution,
            };
        }
        catch (error) {
            this.logger.error("Error generating proposal analytics:", error);
            throw new common_1.InternalServerErrorException('Database failure during analytics generation');
        }
    }
};
exports.ProposalsService = ProposalsService;
exports.ProposalsService = ProposalsService = ProposalsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        ai_service_1.AiService])
], ProposalsService);
//# sourceMappingURL=proposals.service.js.map