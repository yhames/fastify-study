import {
  TLoginRequest,
  TLoginResponse,
  TLogoutResponse,
  TRefreshResponse,
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
    201: TRefreshResponse,
  },
};

export { loginSchema, logoutSchema, refreshSchema };
