import { Tutor } from 'src/tutor/tutor.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Enrollment } from './enrollment';

@Entity('group')
export class Group {
  @Column()
  subject: string;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Tutor, (tutor) => tutor.listGroup)
  tutor: Tutor;

  @Column({ type: 'timestamp' })
  start_date: Date;

  @Column({ type: 'timestamp' })
  end_date: Date;

  @OneToMany(() => Enrollment, (enrollment) => enrollment.group)
  studentEnrollments: Enrollment[];

  // Helper method to get total study hours for this group
  getTotalStudyHours(): number {
    if (!this.studentEnrollments) return 0;
    return this.studentEnrollments.reduce(
      (sum, enrollment) => sum + Number(enrollment.studyHours),
      0,
    );
  }
}
