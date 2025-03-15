import { FastifyInstance } from 'fastify';
import { loginSchema, logoutSchema, refreshSchema } from '../../schema';
import authController from '../../controller/auth/auth.controller';

const authRoute = async (fastify: FastifyInstance): Promise<void> => {
  fastify.post('/login', { schema: loginSchema }, authController.login);
  fastify.delete('/logout', { schema: logoutSchema }, authController.logout);
  fastify.post('/refresh', { schema: refreshSchema }, authController.refresh);
};

export default authRoute;
