import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tournament } from './tournament.entity';
import { User } from './user.entity';
import { MatchResult } from './matchresult.entity';

@Entity()
export class Participant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tournamentId: number;

  @Column()
  userId: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({ default: false })
  isDeleted: boolean;

  @ManyToOne(() => Tournament, (tournament) => tournament.participants)
  tournament: Tournament;

  @ManyToOne(() => User, (user) => user.participants)
  user: User;

  @OneToMany(() => MatchResult, (matchResult) => matchResult.participant)
  matchResults: MatchResult[];

  constructor(
    id: number,
    tournamentId: number,
    userId: number,
    createdAt: Date,
    updatedAt: Date,
    isDeleted: boolean,
    tournament: Tournament,
    user: User,
    matchResults: MatchResult[],
  ) {
    this.id = id;
    this.tournamentId = tournamentId;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isDeleted = isDeleted;
    this.tournament = tournament;
    this.user = user;
    this.matchResults = matchResults;
  }
}
