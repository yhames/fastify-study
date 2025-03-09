import prismaClient from '../global/database/prisma.client';

const authRepository = () => {
  const findUserByEmail = async (email: string) => {
    return await prismaClient.user.findUnique({
      where: {
        email,
      },
    });
  };

  const createUser = async (
    nickname: string,
    email: string,
    hashedPassword: string,
    profileImage: string,
  ) => {
    return await prismaClient.user.create({
      data: {
        nickname,
        email,
        password: hashedPassword,
        profileImage,
      },
    });
  };

  return { findUserByEmail, createUser };
};

export default authRepository();
