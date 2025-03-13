import { FastifyRequest, FastifyReply } from 'fastify';
import { handleError } from '../../global/error/error.handler';
import { LoginRequest } from '../../schema/types';
import {
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
} from '../../global/error/error.message';
import authService from '../../services/auth.service';
import { HOST, JWT_REFRESH_EXPIRES_IN } from '../../global/constant';

const authController = () => {
  const login = async (
    request: FastifyRequest<{ Body: LoginRequest }>,
    reply: FastifyReply,
  ) => {
    try {
      const loginResponse = await authService.loginUser(request.body);

      reply.setCookie('refresh_token', loginResponse.Authorization, {
        domain: HOST,
        sameSite: 'none',
        secure: true,
        path: '/',
        httpOnly: true, // 중요
        expires: new Date(Date.now() + JWT_REFRESH_EXPIRES_IN), // 7 days
      });
      reply.status(SUCCESS_MESSAGE.loginSuccess.status).send(loginResponse);
    } catch (error) {
      handleError(reply, ERROR_MESSAGE.badRequest, error);
    }
  };

  const logout = async (request: FastifyRequest, reply: FastifyReply) => {
    const refreshToken = request.cookies.refresh_token;
    if (!refreshToken) {
      handleError(reply, ERROR_MESSAGE.unauthorized);
      return;
    }

    const count = await authService.logoutUser(refreshToken);
    if (count === 0) {
      handleError(reply, ERROR_MESSAGE.unauthorized);
      return;
    }

    reply.clearCookie('refresh_token', { path: '/' });
    reply
      .status(SUCCESS_MESSAGE.logoutSuccess.status)
      .send(SUCCESS_MESSAGE.logoutSuccess);
  };

  const refresh = async (request: FastifyRequest, reply: FastifyReply) => {
    const refreshToken = request.cookies.refresh_token;
    if (!refreshToken) {
      handleError(reply, ERROR_MESSAGE.unauthorized);
      return;
    }
    const response = await authService.refreshUser(refreshToken);
    if (!response) {
      handleError(reply, ERROR_MESSAGE.unauthorized);
      return;
    }
    reply.status(SUCCESS_MESSAGE.refreshSuccess.status).send(response);
  };

  return { login, logout, refresh };
};

export default authController();
