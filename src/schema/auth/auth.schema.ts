import { TCreateUserRequest, TCreateUserResponse } from './auth.typebox';

const registerSchema = {
  body: TCreateUserRequest,
  response: {
    201: TCreateUserResponse,
  },
};

export { registerSchema };
