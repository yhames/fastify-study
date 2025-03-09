import { Prisma } from '@prisma/client';
import { duplicateVerifyUser, generateHash } from '../global/auth/auth.helper';
import { CreateUserRequest } from '../schema/types';
import authRepository from '../repository/auth.repository';

const authService = () => {
  const register = async (createUserRequest: CreateUserRequest) => {
    await duplicateVerifyUser(createUserRequest.email);
    const hashedPassword = generateHash(createUserRequest.password);
    const createUserInput: Prisma.UserCreateInput = {
      nickname: createUserRequest.nickname,
      email: createUserRequest.email,
      password: hashedPassword,
      profileImage: createUserRequest.profileImage,
    };
    return await authRepository.createUser(createUserInput);
  };

  return { register };
};

export default authService();
