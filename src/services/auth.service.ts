import {
  AuthPayload,
  LoginRequest,
  LoginResponse,
  RefreshResponse,
} from '../schema/types';
import {
  generateAccessToken,
  verifyPassword,
  verifyRefreshToken,
} from '../global/auth/auth.helper';
import { ERROR_MESSAGE } from '../global/error/error.message';
import userRepository from '../repository/user.repository';
import refreshTokenRepository from '../repository/token.repository';

const authService = () => {
  const loginUser = async (
    loginRequest: LoginRequest,
  ): Promise<LoginResponse> => {
    if (!(await verifyPassword(loginRequest.nickname, loginRequest.password))) {
      throw ERROR_MESSAGE.unauthorized;
    }

    const user = await userRepository.findUserByNickname(loginRequest.nickname);
    if (!user) {
      throw ERROR_MESSAGE.unauthorized;
    }

    const payload = {
      id: user.id,
      nickname: user.nickname,
    } as AuthPayload;

    const refreshToken = generateAccessToken(payload);
    await refreshTokenRepository.createRefreshToken(user, refreshToken);

    const accessToken = generateAccessToken(payload);
    return {
      id: user.id,
      nickname: user.nickname,
      email: user.email,
      Authorization: accessToken,
    };
  };

  const logoutUser = async (refreshToken: string) => {
    return await refreshTokenRepository.deleteRefreshToken(refreshToken);
  };

  const refreshUser = async (
    refreshToken: string,
  ): Promise<RefreshResponse> => {
    if (!refreshToken) {
      throw ERROR_MESSAGE.unauthorized;
    }

    const payload = await verifyRefreshToken(refreshToken);
    const accessToken = generateAccessToken(payload);

    return {
      id: payload.id,
      nickname: payload.nickname,
      Authorization: accessToken,
    };
  };

  return { loginUser, logoutUser, refreshUser };
};

export default authService();
