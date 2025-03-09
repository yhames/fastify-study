import { FastifyInstance } from 'fastify';
import userRoute from './user';

const routes = async (fastify: FastifyInstance) => {
  fastify.register(userRoute, { prefix: '/user' });
};

export default routes;
