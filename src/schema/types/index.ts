import { Static } from '@sinclair/typebox';
import { TCreateUserRequest, TCreateUserResponse } from '../user/user.typebox';
import {
  TJwtPayload,
  TLoginRequest,
  TLoginResponse,
} from '../auth/auth.typebox';

type CreateUserRequest = Static<typeof TCreateUserRequest>;
type CreateUserResponse = Static<typeof TCreateUserResponse>;

type LoginRequest = Static<typeof TLoginRequest>;
type LoginResponse = Static<typeof TLoginResponse>;
type JwtPayload = Static<typeof TJwtPayload>;

export {
  CreateUserRequest,
  CreateUserResponse,
  LoginRequest,
  LoginResponse,
  JwtPayload,
};
