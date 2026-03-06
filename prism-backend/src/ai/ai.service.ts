import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import axios from 'axios';
import FormData from 'form-data';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AiService {
    private readonly logger = new Logger(AiService.name);
    private readonly AI_ENDPOINT = 'http://localhost:8000/analyze';

    constructor(private configService: ConfigService) { }

    async analyzeProposal(file: Express.Multer.File): Promise<any> {
        this.logger.log(`AI analysis started for file: ${file.originalname}`);
        const formData = new FormData();
        // Append the file buffer correctly for standard HTTP transmission
        formData.append('file', file.buffer, {
            filename: file.originalname,
            contentType: file.mimetype,
        });

        try {
            const response = await axios.post(this.AI_ENDPOINT, formData, {
                headers: {
                    ...formData.getHeaders(),
                },
                maxBodyLength: Infinity // accommodate large PDFs
            });
            this.logger.log(`AI analysis completed`);
            return response.data;
        } catch (error) {
            this.logger.error("AI service failure", error);
            if (error.response) {
                throw new InternalServerErrorException(
                    `AI Service failed: ${JSON.stringify(error.response.data)}`
                );
            }
            throw new InternalServerErrorException('AI Service is unavailable');
        }
    }
}
