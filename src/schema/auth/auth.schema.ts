import {
  TLoginRequest,
  TLoginResponse,
  TLogoutResponse,
  TRefreshToken,
} from './auth.typebox';

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

const refreshSchema = {
  response: {
    201: TRefreshToken,
  },
};

export { loginSchema, logoutSchema, refreshSchema };
