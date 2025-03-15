import { Prisma, User } from '@prisma/client';
import { getPrismaClient } from '../global/database/prisma/prisma.client';

const prismaUserRepository = () => {
  const findUserByNickname = async (
    nickname: string,
    tx?: Prisma.TransactionClient,
  ): Promise<User | null> => {
    const prisma = getPrismaClient(tx);

    return await prisma.user.findUnique({ where: { nickname } });
  };

  const findEncrptedPasswordByNickname = async (
    nickname: string,
    tx?: Prisma.TransactionClient,
  ): Promise<string | null> => {
    const prisma = getPrismaClient(tx);

    const findUser = await prisma.user.findUnique({
      where: { nickname },
      select: { password: true },
    });
    return findUser?.password || null;
  };

  const createUser = async (
    data: Prisma.UserCreateInput,
    tx?: Prisma.TransactionClient,
  ) => {
    const prisma = getPrismaClient(tx);

    return await prisma.user.create({ data });
  };

  return { findUserByNickname, findEncrptedPasswordByNickname, createUser };
};

export default prismaUserRepository();
