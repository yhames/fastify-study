import { PrismaTransactionManager } from './prisma/prisma.transaction';

export default interface TransactionManager {
  execute<T>(callback: (tx: unknown) => Promise<T>): Promise<T>;
}

export const transactionManager = new PrismaTransactionManager();
