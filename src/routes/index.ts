import { FastifyInstance } from 'fastify';
import userRoute from './user';
import authRoute from './auth';

const routes = async (fastify: FastifyInstance) => {
  fastify.register(authRoute, { prefix: '/auth' });
  fastify.register(userRoute, { prefix: '/user' });
};

export default routes;
