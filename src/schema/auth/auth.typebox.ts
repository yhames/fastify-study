import { Type } from '@sinclair/typebox';

const TCreateUserRequest = Type.Object({
  nickname: Type.String(),
  email: Type.String(),
  password: Type.String(),
  profileImage: Type.String(),
});

const TCreateUserResponse = Type.Object({
  status: Type.Number(),
  success: Type.Boolean(),
  message: Type.String(),
});

export { TCreateUserRequest, TCreateUserResponse };
