import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  TableInheritance,
  OneToMany,
} from 'typeorm';
import { Enrollment } from '../group/enrollment';

export enum UserRole {
  UNKNOWN = 'UNKNOWN',
  STUDENT = 'STUDENT',
  TUTOR = 'TUTOR',
  MANAGER = 'MANAGER',
  ADMIN = 'ADMIN',
}

@Entity('users')
@TableInheritance({ pattern: 'STI' })
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
  isVeryfied: boolean;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.UNKNOWN,
  })
  role: UserRole;

  @OneToMany(() => Enrollment, (enrollment) => enrollment.student)
  groupEnrollments: Enrollment[];
}
