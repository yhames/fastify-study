import { duplicateVerifyUser, generateHash } from '../global/auth/auth.helper';
import prismaClient from '../global/database/prisma.client';
import authRepository from '../repository/auth.repository';

const authService = () => {
  const register = async (
    nickname: string,
    email: string,
    password: string,
    profileImage: string,
  ) => {
    await duplicateVerifyUser(email);
    const hashedPassword = generateHash(password);
    return await authRepository.createUser(
      nickname,
      email,
      hashedPassword,
      profileImage,
    );
  };

  return { register };
};

export default authService();
