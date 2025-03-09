import bcrypt from 'bcrypt';
import { ERROR_MESSAGE } from '../error/error.message';
import { HASH_ROUND } from '../constant';
import authRepository from '../../repository/auth.repository';

const generateHash = (password: string): string => {
  return bcrypt.hashSync(password, HASH_ROUND);
};

const duplicateVerifyUser = async (email: string): Promise<boolean> => {
  const user = await authRepository.findUserByEmail(email);
  if (user) {
    throw ERROR_MESSAGE.alreadySignedUp;
  }

  return true;
};

export { generateHash, duplicateVerifyUser };
