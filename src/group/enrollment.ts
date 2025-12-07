import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Group } from './group.entity';
import { Student } from 'src/student/student.entity';

@Entity('student_group')
export class Enrollment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Student)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @ManyToOne(() => Group, (group) => group.studentEnrollments)
  @JoinColumn({ name: 'group_id' })
  group: Group;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  studyHours: number;

  @CreateDateColumn()
  enrolledAt: Date;

  @UpdateDateColumn()
  lastStudySession: Date;

  @Column({ default: true })
  isActive: boolean;
}
