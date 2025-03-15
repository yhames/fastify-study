import { Prisma, PrismaClient } from '@prisma/client';

export const prismaClient = new PrismaClient();

export const getPrismaClient = (tx?: Prisma.TransactionClient) => {
  return tx || prismaClient;
};
