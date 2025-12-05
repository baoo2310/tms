import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TutorProfile } from './tutor-profile.entity';
import { TutorService } from './tutor.service';
import { TutorController } from './tutor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TutorProfile])], // Registers the Repository
  controllers: [TutorController],
  providers: [TutorService],
})
export class TutorModule {}
