import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { TutorService } from './tutor.service';

@Controller('tutor')
export class TutorController {
  constructor(private readonly tutorService: TutorService) {}

  @Post('register')
  async register(
    @Body() body: { expertise: string[]; gpa: number },
    @Req() req,
  ) {
    const mockUser = req.user;
    return this.tutorService.registerAsTutor(
      mockUser,
      body.expertise,
      body.gpa,
    );
  }
}
