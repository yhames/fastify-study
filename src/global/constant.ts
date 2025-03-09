import { Secret } from 'jsonwebtoken';

const HOST = process.env.HOST || 'localhost';
const PORT = Number(process.env.PORT) || 8080;

const INITIAL_PASSWORD = process.env.INITIAL_PASSWORD;
const HASH_ROUND = Number(process.env.HASH_ROUND);
const JWT_SECRET = process.env.JWT_SECRET as Secret;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN;

export {
  HOST,
  PORT,
  INITIAL_PASSWORD,
  HASH_ROUND,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  JWT_REFRESH_EXPIRES_IN,
};
