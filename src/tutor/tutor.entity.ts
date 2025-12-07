import { Group } from 'src/group/group.entity';
import { User } from 'src/user/user.entity';
import { Entity, OneToMany } from 'typeorm';

@Entity('tutor')
export class Tutor extends User {
  @OneToMany(() => Group, (group) => group.tutor)
  listGroup: Group[];
}
