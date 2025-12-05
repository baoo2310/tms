import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { TutorProfile } from '../tutor/tutor-profile.entity';

export enum UserRole {
  STUDENT = 'STUDENT',
  TUTOR = 'TUTOR',
  MANAGER = 'MANAGER',
  ADMIN = 'ADMIN',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  password: string;

  @Column()
  full_name: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: false })
  isVerified: boolean;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.STUDENT,
  })
  role: UserRole;

  @Column({ nullable: true })
  faculty: string;

  @OneToOne(() => TutorProfile, (profile) => profile.user)
  tutorProfile: TutorProfile;
}
