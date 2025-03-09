import { Secret } from 'jsonwebtoken';

const INITIAL_PASSWORD = process.env.INITIAL_PASSWORD;
const HASH_ROUND = Number(process.env.HASH_ROUND);
const JWT_SECRET = process.env.JWT_SECRET as Secret;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN;

export {
  INITIAL_PASSWORD,
  HASH_ROUND,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  JWT_REFRESH_EXPIRES_IN,
};
