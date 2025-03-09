import bcrypt from 'bcrypt';
import { ERROR_MESSAGE } from '../error/error.message';
import userRepository from '../../repository/user.repository';
import jwt from 'jsonwebtoken';
import {
  HASH_ROUND,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  JWT_REFRESH_EXPIRES_IN,
} from '../constant';
import { JwtPayload } from '../../schema/types';

const generateHash = (password: string): string => {
  return bcrypt.hashSync(password, HASH_ROUND);
};

const duplicateVerifyUser = async (nickname: string): Promise<boolean> => {
  const user = await userRepository.findUserByNickname(nickname);
  if (user) {
    throw ERROR_MESSAGE.alreadySignedUp;
  }

  return true;
};

const verifyPassword = async (
  nickname: string,
  password: string,
): Promise<boolean> => {
  const encrptedPassword = await userRepository.findEncrptedPasswordByNickname(
    nickname,
  );
  if (!encrptedPassword) {
    return false;
  }

  return bcrypt.compareSync(password, encrptedPassword);
};

const generateAccessToken = (payload: JwtPayload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

const generateRefreshToken = (payload: JwtPayload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_REFRESH_EXPIRES_IN });
};

export {
  generateHash,
  duplicateVerifyUser,
  verifyPassword,
  generateAccessToken,
  generateRefreshToken,
};
