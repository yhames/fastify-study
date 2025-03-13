import { FastifyInstance } from 'fastify';
import { userCreateSchema } from '../../schema';
import userController from '../../controller/user/user.controller';

const userRoute = async (fastify: FastifyInstance): Promise<void> => {
  fastify.post(
    '/create',
    { schema: userCreateSchema },
    userController.createUser,
  );
};

export default userRoute;
