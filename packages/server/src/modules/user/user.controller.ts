import { Controller, Get, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { UserService } from './user.service';
import type { User } from './user.entity';
import type { BaseResponse } from '@/common/response/BaseResponse';

@ApiTags('用户模块')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @ApiOperation({ summary: '获取用户列表' })
  @Get('/getList')
  getList(@Req() req: Request): Promise<BaseResponse<User[]>> {
    console.log(req.user);

    return this.userService.getList();
  }
}
