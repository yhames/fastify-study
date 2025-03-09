import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { handleError } from '../../global/error/error.handler';
import { LoginRequest } from '../../schema/types';
import {
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
} from '../../global/error/error.message';
import { loginSchema } from '../../schema';
import authService from '../../services/auth.service';
import {
  HOST,
  JWT_EXPIRES_IN,
  JWT_REFRESH_EXPIRES_IN,
} from '../../global/constant';

const authRoute = async (fastify: FastifyInstance): Promise<void> => {
  fastify.post(
    '/login',
    { schema: loginSchema },
    async (
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
    },
  );
};

export default authRoute;
