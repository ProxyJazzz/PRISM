import {
    Controller,
    Post,
    Get,
    Param,
    UseGuards,
    UseInterceptors,
    UploadedFile,
    Req,
    BadRequestException,
    NotFoundException,
    ParseIntPipe
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ProposalsService, ProposalSummary, ProposalAnalytics, ProposalDetail } from './proposals.service';
import { Request } from 'express';

// Define TS typing for JWT payload injected into req.user
interface AuthenticatedRequest extends Request {
    user: {
        userId: number;
        email: string;
    };
}

@Controller('proposals')
export class ProposalsController {
    constructor(private proposalsService: ProposalsService) { }

    @Post('upload')
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(FileInterceptor('file'))
    async uploadProposal(
        @UploadedFile() file: Express.Multer.File,
        @Req() req: AuthenticatedRequest,
    ) {
        if (!file) {
            throw new BadRequestException('No file provided');
        }

        if (file.mimetype !== 'application/pdf') {
            throw new BadRequestException('Invalid file type. Only PDF files are accepted.');
        }

        // Pass the extracted numerical user ID along with the file buffer
        return await this.proposalsService.uploadProposal(req.user.userId, file);
    }

    @Get('my')
    @UseGuards(JwtAuthGuard)
    async getUserProposals(@Req() req: AuthenticatedRequest): Promise<ProposalSummary[]> {
        return await this.proposalsService.getUserProposals(req.user.userId);
    }

    @Get('analytics')
    @UseGuards(JwtAuthGuard)
    async getProposalAnalytics(@Req() req: AuthenticatedRequest): Promise<ProposalAnalytics> {
        return await this.proposalsService.getProposalAnalytics(req.user.userId);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getProposalById(
        @Param('id', ParseIntPipe) id: number,
        @Req() req: AuthenticatedRequest
    ): Promise<ProposalDetail> {
        const proposal = await this.proposalsService.getProposalById(id, req.user.userId);
        if (!proposal) {
            throw new NotFoundException('Proposal not found');
        }
        return proposal;
    }
}
