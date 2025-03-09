import { Static } from '@sinclair/typebox';
import { TAuthBody, TAuthResponse } from '../auth/auth.typebox';

type AuthBody = Static<typeof TAuthBody>;
type AuthResponse = Static<typeof TAuthResponse>;

export { AuthBody, AuthResponse };
