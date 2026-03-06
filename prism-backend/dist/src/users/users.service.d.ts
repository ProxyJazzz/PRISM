import { PrismaService } from '../database/prisma.service';
import { Prisma, User } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(data: Prisma.UserCreateInput): Promise<User>;
    findUserByEmail(email: string): Promise<User | null>;
    findUserById(id: number): Promise<User | null>;
}
