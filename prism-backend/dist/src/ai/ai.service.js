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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var AiService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
const config_1 = require("@nestjs/config");
let AiService = AiService_1 = class AiService {
    configService;
    logger = new common_1.Logger(AiService_1.name);
    AI_ENDPOINT = 'http://localhost:8000/analyze';
    constructor(configService) {
        this.configService = configService;
    }
    async analyzeProposal(file) {
        this.logger.log(`AI analysis started for file: ${file.originalname}`);
        const formData = new form_data_1.default();
        formData.append('file', file.buffer, {
            filename: file.originalname,
            contentType: file.mimetype,
        });
        try {
            const response = await axios_1.default.post(this.AI_ENDPOINT, formData, {
                headers: {
                    ...formData.getHeaders(),
                },
                maxBodyLength: Infinity
            });
            this.logger.log(`AI analysis completed`);
            return response.data;
        }
        catch (error) {
            this.logger.error("AI service failure", error);
            if (error.response) {
                throw new common_1.InternalServerErrorException(`AI Service failed: ${JSON.stringify(error.response.data)}`);
            }
            throw new common_1.InternalServerErrorException('AI Service is unavailable');
        }
    }
};
exports.AiService = AiService;
exports.AiService = AiService = AiService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AiService);
//# sourceMappingURL=ai.service.js.map