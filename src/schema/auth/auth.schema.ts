import { TLoginRequest, TLoginResponse, TLogoutResponse } from './auth.typebox';

const loginSchema = {
  body: TLoginRequest,
  response: {
    201: TLoginResponse,
  },
};

const logoutSchema = {
  response: {
    205: TLogoutResponse,
  },
};

export { loginSchema, logoutSchema };
