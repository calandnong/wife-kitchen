import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class SignUserDto {
  /**
   * 用户名
   */
  @ApiProperty({
    description: '用户名',
    example: 'calandnong',
    default: 'calandnong',
  })
  @IsString({ message: '用户名必须为字符串' })
  @IsNotEmpty({ message: '用户名不能为空' })
  // @Length(6, 20, {
  //   message: `用户名长度必须在6到20之间`,
  // })
  username: string;

  /**
   * 密码
   */
  @ApiProperty({
    description: '用户密码',
    example: 'test123456',
    default: 'test123456',
  })
  @IsString({ message: '用户名必须为字符串' })
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(6, 20, {
    message: '密码长度必须在6到20之间，当前传递的值是：',
  })
  password: string;
}
