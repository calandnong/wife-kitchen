import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignUserDto } from './dto/sign.dto';
import type { Auth } from './auth.types';
import { SkipJWTCheck } from '@/common/decorators/jwt.decorator';

@ApiTags('用户认证')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @SkipJWTCheck()
  @ApiOperation({ summary: '用户登录' })
  @Post('/signIn')
  signIn(@Body() dto: SignUserDto): Promise<Auth> {
    const { username, password } = dto;
    return this.authService.signIn(username, password);
  }

  @SkipJWTCheck()
  @ApiOperation({ summary: '用户注册' })
  @Post('/signUp')
  signUp(@Body() dto: SignUserDto) {
    const { username, password } = dto;
    return this.authService.signUp(username, password);
  }
}
