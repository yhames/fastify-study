import { Prisma } from '@prisma/client';
import TransactionManager from '../transaction.manager';
import { prismaClient } from './prisma.client';

export class PrismaTransactionManager implements TransactionManager {
  public async execute<T>(
    callback: (tx: Prisma.TransactionClient) => Promise<T>,
  ): Promise<T> {
    return await prismaClient.$transaction(async (tx) => {
      return await callback(tx);
    });
  }
}
