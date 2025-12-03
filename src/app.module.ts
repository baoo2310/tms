import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
// import { UsersModule } from './users/users.module'; // <--- IMPORT THIS
import { TutorModule } from './tutor/tutor.module'; // <--- IMPORT THIS
import { User } from './user/user.entity';
import { TutorProfile } from './tutor/tutor-profile.entity';
import { AuthModule } from './auth/auth.module';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME || 'hcmut_tms_db',

      // OPTION A: Manually list entities (Best for debugging now)
      entities: [User, TutorProfile],

      // OPTION B: Auto-load (Easier, use this if Option A fails)
      // autoLoadEntities: true,

      synchronize: true, // <--- CRITICAL: Must be true to create tables
    }),

    // 👇 THESE MUST BE HERE. If they are missing, no tables will be created.
    // UsersModule,
    TutorModule,

    AuthModule,
  ],
})
export class AppModule {}
