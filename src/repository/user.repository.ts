import { Prisma } from '@prisma/client';
import { getPrismaClient } from '../global/database/prisma/prisma.client';
import { QueryRunner } from 'typeorm';
import { getUserRepository } from '../global/database/typeorm/typeorm.datasource';
import { User } from '../entity/user.entity';

// const prismaUserRepository = () => {
//   const findUserByNickname = async (
//     nickname: string,
//     tx?: Prisma.TransactionClient,
//   ): Promise<User | null> => {
//     const prisma = getPrismaClient(tx);

//     return await prisma.user.findUnique({ where: { nickname } });
//   };

//   const findEncrptedPasswordByNickname = async (
//     nickname: string,
//     tx?: Prisma.TransactionClient,
//   ): Promise<string | null> => {
//     const prisma = getPrismaClient(tx);

//     const findUser = await prisma.user.findUnique({
//       where: { nickname },
//       select: { password: true },
//     });
//     return findUser?.password || null;
//   };

//   const createUser = async (
//     data: Prisma.UserCreateInput,
//     tx?: Prisma.TransactionClient,
//   ) => {
//     const prisma = getPrismaClient(tx);

//     return await prisma.user.create({ data });
//   };

//   return { findUserByNickname, findEncrptedPasswordByNickname, createUser };
// };

// export default prismaUserRepository();

const typeormUserRepository = () => {
  const findUserByNickname = async (
    nickname: string,
    qr?: QueryRunner,
  ): Promise<User | null> => {
    const userRepository = getUserRepository(qr);

    return await userRepository.findOne({ where: { nickname } });
  };

  const findEncrptedPasswordByNickname = async (
    nickname: string,
    qr?: QueryRunner,
  ): Promise<string | null> => {
    const userRepository = getUserRepository(qr);

    const findUser = await userRepository.findOne({ where: { nickname } });
    return findUser?.password || null;
  };

  const createUser = async (data: User, qr?: QueryRunner) => {
    const userRepository = getUserRepository(qr);
    return await userRepository.save(data);
  };

  return { findUserByNickname, findEncrptedPasswordByNickname, createUser };
};

export default typeormUserRepository();
