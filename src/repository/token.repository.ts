import { Prisma, Tournament, User } from '@prisma/client';
import prismaClient from '../global/database/prisma.client';

const refreshTokenRepository = () => {
  const createRefreshToken = async (user: User, refreshToken: string) => {
    return await prismaClient.refreshToken.create({
      data: {
        id: user.id,
        token: refreshToken,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });
  };

  const deleteRefreshToken = async (refreshToken: string): Promise<number> => {
    const result = await prismaClient.refreshToken.deleteMany({
      where: { token: refreshToken },
    });
    return result.count;
  };

  return { createRefreshToken, deleteRefreshToken };
};

export default refreshTokenRepository();
