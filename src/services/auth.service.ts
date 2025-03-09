import { duplicateVerifyUser, generateHash } from '../global/auth/auth.helper';
import prismaClient from '../global/database/prisma.client';

const authService = () => {
  const register = async (
    nickname: string,
    email: string,
    password: string,
    profileImage: string,
  ) => {
    await duplicateVerifyUser(email);
    const hashedPassword = generateHash(password);
    const values = {
      nickname,
      email,
      password: hashedPassword,
      profileImage,
    };
    return await prismaClient.user.create({ data: values });
  };

  return { register };
};

export default authService();
