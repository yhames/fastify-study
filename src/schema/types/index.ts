import { Static } from '@sinclair/typebox';
import { TCreateUserRequest, TCreateUserResponse } from '../auth/auth.typebox';

type CreateUserRequest = Static<typeof TCreateUserRequest>;
type CreateUserResponse = Static<typeof TCreateUserResponse>;

export { CreateUserRequest, CreateUserResponse };
