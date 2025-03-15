import { Prisma, RefreshToken, User } from '@prisma/client';
import { getPrismaClient } from '../global/database/prisma/prisma.client';

const refreshTokenRepository = () => {
  const createRefreshToken = async (
    user: User,
    refreshToken: string,
    tx?: Prisma.TransactionClient,
  ): Promise<RefreshToken> => {
    const prisma = getPrismaClient(tx);

    return await prisma.refreshToken.create({
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

  const deleteRefreshToken = async (
    refreshToken: string,
    tx?: Prisma.TransactionClient,
  ): Promise<number> => {
    const prisma = getPrismaClient(tx);

    const result = await prisma.refreshToken.deleteMany({
      where: { token: refreshToken },
    });
    return result.count;
  };

  const getCountByIdAndToken = async (
    id: number,
    token: string,
    tx?: Prisma.TransactionClient,
  ): Promise<number> => {
    const prisma = getPrismaClient(tx);

    return await prisma.refreshToken.count({
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
