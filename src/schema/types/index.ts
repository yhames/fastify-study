import { Static } from '@sinclair/typebox';
import { TCreateUserRequest, TCreateUserResponse } from '../user/user.typebox';
import {
  TAuthHeader,
  TAuthPayload,
  TLoginRequest,
  TLoginResponse,
  TLogoutResponse,
  TRefreshResponse,
} from '../auth/auth.typebox';

type CreateUserRequest = Static<typeof TCreateUserRequest>;
type CreateUserResponse = Static<typeof TCreateUserResponse>;

type AuthPayload = Static<typeof TAuthPayload>;
type AuthHeader = Static<typeof TAuthHeader>;
type LoginRequest = Static<typeof TLoginRequest>;
type LoginResponse = Static<typeof TLoginResponse>;
type LogoutResponse = Static<typeof TLogoutResponse>;
type RefreshResponse = Static<typeof TRefreshResponse>;

export {
  AuthPayload,
  AuthHeader,
  CreateUserRequest,
  CreateUserResponse,
  LoginRequest,
  LoginResponse,
  LogoutResponse,
  RefreshResponse,
};
