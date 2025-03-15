import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Match } from './match.entity';
import { Participant } from './participant.entity';

@Entity()
export class Tournament {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  startDatetime: Date;

  @Column({ type: 'timestamp' })
  endDatetime: Date;

  @Column({ type: 'enum', enum: ['upcoming', 'ongoing', 'completed'] })
  status: 'upcoming' | 'ongoing' | 'completed';

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

  @OneToMany(() => Match, (match) => match.tournament)
  matches: Match[];

  @OneToMany(() => Participant, (participant) => participant.tournament)
  participants: Participant[];

  constructor(
    id: number,
    startDatetime: Date,
    endDatetime: Date,
    status: 'upcoming' | 'ongoing' | 'completed',
    createdAt: Date,
    updatedAt: Date,
    isDeleted: boolean,
    matches: Match[],
    participants: Participant[],
  ) {
    this.id = id;
    this.startDatetime = startDatetime;
    this.endDatetime = endDatetime;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isDeleted = isDeleted;
    this.matches = matches;
    this.participants = participants;
  }
}
