import { Prisma } from '@prisma/client';
import { duplicateVerifyUser, generateHash } from '../global/auth/auth.helper';
import { CreateUserRequest } from '../schema/types';
import userRepository from '../repository/user.repository';

const userService = () => {
  const createUser = async (createUserRequest: CreateUserRequest) => {
    await duplicateVerifyUser(createUserRequest.email);
    const hashedPassword = generateHash(createUserRequest.password);
    const createUserInput: Prisma.UserCreateInput = {
      nickname: createUserRequest.nickname,
      email: createUserRequest.email,
      password: hashedPassword,
      profileImage: createUserRequest.profileImage,
    };
    return await userRepository.createUser(createUserInput);
  };

  return { register: createUser };
};

export default userService();
