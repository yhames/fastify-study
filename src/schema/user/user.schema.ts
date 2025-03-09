import { TCreateUserRequest, TCreateUserResponse } from './user.typebox';

const userCreateSchema = {
  body: TCreateUserRequest,
  response: {
    201: TCreateUserResponse,
  },
};

export { userCreateSchema };
