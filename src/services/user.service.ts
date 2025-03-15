import { duplicateVerifyUser, generateHash } from '../global/auth/auth.helper';
import { CreateUserRequest } from '../schema/types';
import userRepository from '../repository/user.repository';

const userService = () => {
  const createUser = async (createUserRequest: CreateUserRequest) => {
    await duplicateVerifyUser(createUserRequest.email);
    const hashedPassword = generateHash(createUserRequest.password);
    const newUser = {
      nickname: createUserRequest.nickname,
      email: createUserRequest.email,
      password: hashedPassword,
      profileImage: createUserRequest.profileImage,
    };
    return await userRepository.createUser(newUser);
  };

  return { register: createUser };
};

export default userService();
