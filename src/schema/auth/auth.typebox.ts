import { Type } from '@sinclair/typebox';

const TJwtPayload = Type.Object({
  id: Type.BigInt(),
  nickname: Type.String(),
});

const TLoginRequest = Type.Object({
  nickname: Type.String(),
  email: Type.String(),
  password: Type.String(),
  profileImage: Type.String(),
});

const TLoginResponse = Type.Object({
  id: Type.BigInt(),
  nickname: Type.String(),
  email: Type.String(),
  Authorization: Type.String(),
});

const TLogoutResponse = Type.Object({
  success: Type.Boolean(),
  status: Type.Number(),
  message: Type.String(),
});

export { TJwtPayload, TLoginRequest, TLoginResponse, TLogoutResponse };
