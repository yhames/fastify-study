import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { registerSchema } from '../../schema';
import { handleError } from '../../global/error/error.handler';
import {
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
} from '../../global/error/error.message';
import authService from '../../services/auth.service';
import { CreateUserRequest } from '../../schema/types';

const authRoute = async (fastify: FastifyInstance): Promise<void> => {
  fastify.post(
    '/register',
    { schema: registerSchema },
    async (
      request: FastifyRequest<{ Body: CreateUserRequest }>,
      reply: FastifyReply,
    ) => {
      try {
        await authService.register(request.body);
        reply
          .status(SUCCESS_MESSAGE.registerSuccess.status)
          .send(SUCCESS_MESSAGE.registerSuccess);
      } catch (error) {
        handleError(reply, ERROR_MESSAGE.badRequest, error);
      }
    },
  );
};

export default authRoute;
