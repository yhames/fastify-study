import { TLoginRequest, TLoginResponse } from './auth.typebox';

const loginSchema = {
  body: TLoginRequest,
  response: {
    201: TLoginResponse,
  },
};

export { loginSchema };
