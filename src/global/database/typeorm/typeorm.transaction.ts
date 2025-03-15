import TransactionManager from '../transaction.manager';
import { QueryRunner } from 'typeorm';
import { datasource } from './typeorm.datasource';

export class TypeormTransactionManager implements TransactionManager {
  public async execute<T>(
    callback: (qr: QueryRunner) => Promise<T>,
  ): Promise<T> {
    const qr = datasource.createQueryRunner();
    // 트랜잭션 시작
    await qr.startTransaction();
    try {
      // 트랜잭션 내에서 작업 수행
      const result = await callback(qr);
      await qr.commitTransaction(); // 트랜잭션 커밋
      return result;
    } catch (error) {
      await qr.rollbackTransaction(); // 트랜잭션 롤백
      throw error;
    } finally {
      await qr.release(); // 리소스 해제
    }
  }
}
