import { ConfigService } from '@nestjs/config';
export declare class AiService {
    private configService;
    private readonly logger;
    private readonly AI_ENDPOINT;
    constructor(configService: ConfigService);
    analyzeProposal(file: Express.Multer.File): Promise<any>;
}
