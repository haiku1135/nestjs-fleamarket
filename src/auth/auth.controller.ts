import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CredentialsDto } from './dto/credentials.dto';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() CreateUserDto: CreateUserDto): Promise<User> {
    return await this.authService.createUser(CreateUserDto);
  }

  @Post('signin')
  async signin(@Body() credentialsDto: CredentialsDto): Promise<{ token: string }> {
    return await this.authService.signIn(credentialsDto);
  }
}
