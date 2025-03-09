import { Prisma, User } from '@prisma/client';
import prismaClient from '../global/database/prisma.client';

const userRepository = () => {
  const findUserByNickname = async (nickname: string): Promise<User | null> => {
    return await prismaClient.user.findUnique({ where: { nickname } });
  };

  const findEncrptedPasswordByNickname = async (
    nickname: string,
  ): Promise<string | null> => {
    const findUser = await prismaClient.user.findUnique({
      where: { nickname },
      select: { password: true },
    });
    return findUser?.password || null;
  };

  const createUser = async (data: Prisma.UserCreateInput) => {
    return await prismaClient.user.create({ data });
  };

  return { findUserByNickname, findEncrptedPasswordByNickname, createUser };
};

export default userRepository();
