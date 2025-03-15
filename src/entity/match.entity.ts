import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tournament } from './tournament.entity';
import { MatchResult } from './matchresult.entity';

@Entity()
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tournamentId: number;

  @Column({ type: 'enum', enum: ['semi', 'final'] })
  round: 'semi' | 'final';

  @Column({ type: 'enum', enum: ['upcoming', 'ongoing', 'completed'] })
  status: 'upcoming' | 'ongoing' | 'completed';

  @Column({ type: 'timestamp' })
  scheduledAt: Date;

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

  @ManyToOne(() => Tournament, (tournament) => tournament.matches)
  tournament: Tournament;

  @OneToMany(() => MatchResult, (matchResult) => matchResult.match)
  matchResults: MatchResult[];

  constructor(
    id: number,
    tournamentId: number,
    round: 'semi' | 'final',
    status: 'upcoming' | 'ongoing' | 'completed',
    scheduledAt: Date,
    createdAt: Date,
    updatedAt: Date,
    isDeleted: boolean,
    tournament: Tournament,
    matchResults: MatchResult[],
  ) {
    this.id = id;
    this.tournamentId = tournamentId;
    this.round = round;
    this.status = status;
    this.scheduledAt = scheduledAt;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isDeleted = isDeleted;
    this.tournament = tournament;
    this.matchResults = matchResults;
  }
}
