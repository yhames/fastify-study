import { Type } from '@sinclair/typebox';
import { TAuthBody, TAuthResponse } from './auth.typebox';

const registerSchema = {
  body: TAuthBody,
  response: {
    201: TAuthResponse,
  },
};

export { registerSchema };
