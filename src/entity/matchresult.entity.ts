import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Match } from './match.entity';
import { Participant } from './participant.entity';

@Entity()
export class MatchResult {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  participantId: number;

  @Column()
  matchId: number;

  @Column()
  score: number;

  @Column()
  isGiveUp: boolean;

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

  @ManyToOne(() => Match, (match) => match.matchResults)
  match: Match;

  @ManyToOne(() => Participant, (participant) => participant.matchResults)
  participant: Participant;

  constructor(
    id: number,
    participantId: number,
    matchId: number,
    score: number,
    isGiveUp: boolean,
    createdAt: Date,
    updatedAt: Date,
    isDeleted: boolean,
    match: Match,
    participant: Participant,
  ) {
    this.id = id;
    this.participantId = participantId;
    this.matchId = matchId;
    this.score = score;
    this.isGiveUp = isGiveUp;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isDeleted = isDeleted;
    this.match = match;
    this.participant = participant;
  }
}
