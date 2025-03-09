import { Prisma, User } from '@prisma/client';
import prismaClient from '../global/database/prisma.client';

const authRepository = () => {
  const findUserByEmail = async (email: string): Promise<User | null> => {
    return await prismaClient.user.findUnique({ where: { email } });
  };

  const createUser = async (data: Prisma.UserCreateInput) => {
    return await prismaClient.user.create({ data });
  };

  return { findUserByEmail, createUser };
};

export default authRepository();
