import bcrypt from 'bcrypt';
import { ERROR_MESSAGE } from '../error/error.message';
import userRepository from '../../repository/user.repository';
import jwt, { JwtPayload } from 'jsonwebtoken';
import {
  HASH_ROUND,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  JWT_REFRESH_EXPIRES_IN,
} from '../constant';
import refreshTokenRepository from '../../repository/token.repository';
import { AuthPayload } from '../../schema/types';

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

const generateAccessToken = (payload: AuthPayload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

const generateRefreshToken = (payload: AuthPayload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_REFRESH_EXPIRES_IN });
};

const verifyRefreshToken = async (
  refreshToken: string,
): Promise<AuthPayload> => {
  const payload = jwt.verify(refreshToken, JWT_SECRET) as AuthPayload;
  const count = await refreshTokenRepository.getCountByIdAndToken(
    payload.id,
    refreshToken,
  );
  if (count <= 0) {
    throw ERROR_MESSAGE.unauthorized;
  }
  return payload;
};

const shoreVerifyRefreshToken = (refreshToken: string): boolean => {
  const payload = jwt.verify(refreshToken, JWT_SECRET) as AuthPayload;
  if (!payload) {
    return false;
  }
  return true;
};

const verifyAccessToken = (accessToken: string): AuthPayload => {
  try {
    return jwt.verify(accessToken, JWT_SECRET) as AuthPayload;
  } catch (error) {
    throw ERROR_MESSAGE.invalidToken;
  }
};

export {
  generateHash,
  duplicateVerifyUser,
  verifyPassword,
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
  shoreVerifyRefreshToken,
  verifyAccessToken,
};
