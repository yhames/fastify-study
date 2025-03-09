import { LoginRequest, LoginResponse } from '../schema/types';
import {
  generateAccessToken,
  verifyPassword,
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

    const refreshToken = generateAccessToken({
      id: user.id,
      nickname: user.nickname,
    });
    await refreshTokenRepository.createRefreshToken(user, refreshToken);

    const accessToken = generateAccessToken({
      id: user.id,
      nickname: user.nickname,
    });
    return {
      id: user.id,
      nickname: user.nickname,
      email: user.email,
      Authorization: accessToken,
    } as LoginResponse;
  };

  const logoutUser = async (refreshToken: string) => {
    return await refreshTokenRepository.deleteRefreshToken(refreshToken);
  };

  return { loginUser, logoutUser };
};

export default authService();
