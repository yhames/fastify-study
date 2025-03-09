import { Type } from '@sinclair/typebox';

const authBodySchema = Type.Object({
  email: Type.String(),
  password: Type.String(),
});

const body = authBodySchema;

const registerSchema = {
  body,
  response: {
    201: Type.Object({
      status: Type.Number(),
      success: Type.Boolean(),
      message: Type.String(),
    }),
  },
};

export { authBodySchema, registerSchema };
