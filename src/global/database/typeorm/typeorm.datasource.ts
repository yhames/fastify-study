import { Prisma, PrismaClient } from '@prisma/client';
import { DataSource, QueryRunner } from 'typeorm';
import { User } from '../../../entity/user.entity';
import { Friend } from '../../../entity/friend.entity';
import { Match } from '../../../entity/match.entity';
import { MatchResult } from '../../../entity/matchresult.entity';
import { Participant } from '../../../entity/participant.entity';
import { RefreshToken } from '../../../entity/refreshtoken.entity';
import { Tournament } from '../../../entity/tournament.entity';

export const datasource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [
    User,
    Friend,
    Match,
    MatchResult,
    Participant,
    RefreshToken,
    Tournament,
  ],
  synchronize: true,
  logging: true,
});

export const getUserRepository = (qr?: QueryRunner) => {
  if (qr) {
    return qr.manager.getRepository(User);
  }
  return datasource.getRepository(User);
};
