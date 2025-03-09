import { Type } from '@sinclair/typebox';
import { TAuthBody, TAuthResponse } from './auth.type';

const registerSchema = {
  body: TAuthBody,
  response: {
    201: TAuthResponse,
  },
};

export { registerSchema };
