import { PrismaService } from '../database/prisma.service';
import { AiService } from '../ai/ai.service';
export interface ProposalSummary {
    proposalId: number;
    fileName: string;
    createdAt: Date;
    finalScore: number | null;
    category: string | null;
    documentType?: string;
}
export interface ProposalDetail {
    proposalId: number;
    fileName: string;
    analysis: any;
}
export interface ProposalAnalytics {
    totalProposals: number;
    averageScore: number;
    categoryDistribution: Record<string, number>;
}
export declare class ProposalsService {
    private prisma;
    private aiService;
    private readonly logger;
    constructor(prisma: PrismaService, aiService: AiService);
    uploadProposal(userId: number, file: Express.Multer.File): Promise<any>;
    getUserProposals(userId: number): Promise<ProposalSummary[]>;
    getProposalById(proposalId: number, userId: number): Promise<ProposalDetail | null>;
    getProposalAnalytics(userId: number): Promise<ProposalAnalytics>;
}
