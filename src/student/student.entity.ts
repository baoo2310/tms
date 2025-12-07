import { Group } from 'src/group/group.entity';
import { Enrollment } from 'src/group/enrollment';
import { User } from 'src/user/user.entity';
import { Entity, OneToMany } from 'typeorm';

@Entity('tutor')
export class Student extends User {
  @OneToMany(() => Enrollment, (enrollment) => enrollment.student)
  listGroup: Group[];
}
