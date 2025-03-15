import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Friend {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  senderId: number;

  @Column()
  receiverId: number;

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

  @ManyToOne(() => User, (user) => user.friendsAsSender)
  sender: User;

  @ManyToOne(() => User, (user) => user.friendsAsReceiver)
  receiver: User;

  constructor(
    id: number,
    senderId: number,
    receiverId: number,
    createdAt: Date,
    updatedAt: Date,
    isDeleted: boolean,
    sender: User,
    receiver: User,
  ) {
    this.id = id;
    this.senderId = senderId;
    this.receiverId = receiverId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.isDeleted = isDeleted;
    this.sender = sender;
    this.receiver = receiver;
  }
}
