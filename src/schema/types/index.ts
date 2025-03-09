import { Static } from '@sinclair/typebox';
import { TCreateUserRequest, TCreateUserResponse } from '../user/user.typebox';
import {
  TJwtPayload,
  TLoginRequest,
  TLoginResponse,
  TLogoutResponse,
} from '../auth/auth.typebox';

type CreateUserRequest = Static<typeof TCreateUserRequest>;
type CreateUserResponse = Static<typeof TCreateUserResponse>;

type JwtPayload = Static<typeof TJwtPayload>;

type LoginRequest = Static<typeof TLoginRequest>;
type LoginResponse = Static<typeof TLoginResponse>;

type LogoutResponse = Static<typeof TLogoutResponse>;

export {
  CreateUserRequest,
  CreateUserResponse,
  JwtPayload,
  LoginRequest,
  LoginResponse,
  LogoutResponse,
};
