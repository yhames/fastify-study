import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { handleError } from '../../global/error/error.handler';
import { LoginRequest } from '../../schema/types';
import {
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
} from '../../global/error/error.message';
import { loginSchema, logoutSchema, refreshSchema } from '../../schema';
import authService from '../../services/auth.service';
import { HOST, JWT_REFRESH_EXPIRES_IN } from '../../global/constant';
import authController from '../../controller/auth/auth.controller';

const authRoute = async (fastify: FastifyInstance): Promise<void> => {
  fastify.post('/login', { schema: loginSchema }, authController.login);
  fastify.delete('/logout', { schema: logoutSchema }, authController.logout);
  fastify.post('/refresh', { schema: refreshSchema }, authController.refresh);
};

export default authRoute;
