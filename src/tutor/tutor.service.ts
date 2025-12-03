import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TutorProfile } from './tutor-profile.entity';
import { User } from 'src/user/user.entity';

@Injectable()
export class TutorService {
  constructor(
    @InjectRepository(TutorProfile)
    private tutorRepo: Repository<TutorProfile>,
  ) {}

  async registerAsTutor(user: User, expertise: string[], gpa: number) {
    if (gpa < 7.0) throw new BadRequestException('GPA too low to be a tutor');
    const existing = await this.tutorRepo.findOne({
      where: { user: { id: user.id } },
    });
    if (existing) throw new BadRequestException('Already a tutor');
    const profile = this.tutorRepo.create({
      user,
      expertise,
      isVerified: false,
    });
    return this.tutorRepo.save(profile);
  }
}
