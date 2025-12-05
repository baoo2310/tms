import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';

export class SignupDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  @MaxLength(50)
  full_name: string;

  @IsString()
  @MinLength(6)
  password: string;
}
