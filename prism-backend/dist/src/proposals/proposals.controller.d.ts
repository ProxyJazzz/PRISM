import { ProposalsService, ProposalSummary, ProposalAnalytics, ProposalDetail } from './proposals.service';
import { Request } from 'express';
interface AuthenticatedRequest extends Request {
    user: {
        userId: number;
        email: string;
    };
}
export declare class ProposalsController {
    private proposalsService;
    constructor(proposalsService: ProposalsService);
    uploadProposal(file: Express.Multer.File, req: AuthenticatedRequest): Promise<any>;
    getUserProposals(req: AuthenticatedRequest): Promise<ProposalSummary[]>;
    getProposalAnalytics(req: AuthenticatedRequest): Promise<ProposalAnalytics>;
    getProposalById(id: number, req: AuthenticatedRequest): Promise<ProposalDetail>;
}
export {};
