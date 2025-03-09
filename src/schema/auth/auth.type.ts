import { Type } from '@sinclair/typebox';

const TAuthResponse = Type.Object({
  status: Type.Number(),
  success: Type.Boolean(),
  message: Type.String(),
});

const TAuthBody = Type.Object({
  nickname: Type.String(),
  email: Type.String(),
  password: Type.String(),
  profileImage: Type.String(),
});

export { TAuthBody, TAuthResponse };
