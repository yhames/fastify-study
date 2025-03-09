import { Prisma, RefreshToken, Tournament, User } from '@prisma/client';
import prismaClient from '../global/database/prisma.client';

const refreshTokenRepository = () => {
  const createRefreshToken = async (
    user: User,
    refreshToken: string,
  ): Promise<RefreshToken> => {
    return await prismaClient.refreshToken.create({
      data: {
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

  const getCountByIdAndToken = async (
    id: bigint,
    token: string,
  ): Promise<number> => {
    return await prismaClient.refreshToken.count({
      where: {
        userId: id,
        token: token,
      },
    });
  };
  return {
    createRefreshToken,
    deleteRefreshToken,
    getCountByIdAndToken,
  };
};

export default refreshTokenRepository();
