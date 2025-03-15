import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RefreshToken } from './refreshtoken.entity';
import { Participant } from './participant.entity';
import { Friend } from './friend.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nickname: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  profileImage: string;

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

  @OneToMany(() => RefreshToken, (refreshToken) => refreshToken.user)
  refreshTokens: RefreshToken[];

  @OneToMany(() => Participant, (participant) => participant.user)
  participants: Participant[];

  @OneToMany(() => Friend, (friend) => friend.sender)
  friendsAsSender: Friend[];

  @OneToMany(() => Friend, (friend) => friend.receiver)
  friendsAsReceiver: Friend[];

  constructor(
    id: number,
    nickname: string,
    password: string,
    email: string,
    profileImage: string,
    createdAt: Date,
    updatedAt: Date,
    isDeleted: boolean,
    refreshTokens: RefreshToken[],
    participants: Participant[],
    friendsAsSender: Friend[],
    friendsAsReceiver: Friend[],
  ) {
    this.id = id;
    this.nickname = nickname;
    this.password = password;
    this.email = email;
    this.profileImage = profileImage;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isDeleted = isDeleted;
    this.refreshTokens = refreshTokens;
    this.participants = participants;
    this.friendsAsSender = friendsAsSender;
    this.friendsAsReceiver = friendsAsReceiver;
  }
}
