import { duplicateVerifyUser, generateHash } from '../global/auth/auth.helper';
import { CreateUserRequest } from '../schema/types';
import userRepository from '../repository/user.repository';
import { transactionManager } from '../global/database/transaction.manager';
import { User } from '../entity/user.entity';

const userService = () => {
  const createUser = async (createUserRequest: CreateUserRequest) => {
    return transactionManager.execute(async (tx) => {
      await duplicateVerifyUser(createUserRequest.email);
      const hashedPassword = generateHash(createUserRequest.password);
      const newUser = {
        nickname: createUserRequest.nickname,
        email: createUserRequest.email,
        password: hashedPassword,
        profileImage: createUserRequest.profileImage,
      } as User;
      return await userRepository.createUser(newUser, tx);
    });
  };

  return { createUser };
};

export default userService();
