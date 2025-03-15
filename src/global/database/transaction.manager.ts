import { PrismaTransactionManager } from './prisma/prisma.transaction';
import { TypeormTransactionManager } from './typeorm/typeorm.transaction';

export default interface TransactionManager {
  execute<T>(callback: (tx: unknown) => Promise<T>): Promise<T>;
}

// export const transactionManager = new PrismaTransactionManager();
export const transactionManager = new TypeormTransactionManager();
