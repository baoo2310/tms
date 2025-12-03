import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity('tutor_profile')
export class TutorProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('simple-array')
  expertise: string[];

  @Column({ default: 5 })
  max_capacity: number;

  @Column({ default: false })
  isVerified: boolean;

  @OneToOne(() => User, (user) => user.tutorProfile)
  @JoinColumn()
  user: User;
}
