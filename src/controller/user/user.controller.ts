import { FastifyRequest, FastifyReply } from 'fastify';
import { handleError } from '../../global/error/error.handler';
import { CreateUserRequest } from '../../schema/types';
import {
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
} from '../../global/error/error.message';
import userService from '../../services/user.service';

const userController = () => {
  const createUser = async (
    request: FastifyRequest<{ Body: CreateUserRequest }>,
    reply: FastifyReply,
  ) => {
    try {
      await userService.register(request.body);
      reply
        .status(SUCCESS_MESSAGE.registerSuccess.status)
        .send(SUCCESS_MESSAGE.registerSuccess);
    } catch (error) {
      handleError(reply, ERROR_MESSAGE.badRequest, error);
    }
  };

  return {
    createUser,
  };
};

export default userController();
