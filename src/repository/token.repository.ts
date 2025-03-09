import { Prisma } from '@prisma/client';
import prismaClient from '../global/database/prisma.client';

const refreshTokenRepository = () => {
  const createRefreshToken = async (data: Prisma.RefreshTokenCreateInput) => {
    return await prismaClient.refreshToken.create({ data });
  };

  return { createRefreshToken };
};

export default refreshTokenRepository();
