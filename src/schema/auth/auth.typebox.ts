import { Type } from '@sinclair/typebox';

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

const TJwtPayload = Type.Object({
  id: Type.BigInt(),
  nickname: Type.String(),
});

export { TLoginRequest, TLoginResponse, TJwtPayload };
