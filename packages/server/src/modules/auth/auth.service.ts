import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';
import { UserService } from '../user/user.service';
import { BaseResponse } from '@/common/response/BaseResponse';
import { AuthCode, AuthException } from '@/common/exceptions/auth.exception';
import { AppJwtService } from '@/shared/jwt/jwt.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private appJwtService: AppJwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<unknown> {
    const user = await this.userService.find(username);
    if (user?.password === pass) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  /**
   * @description 用户登录方法
   * @param username 用户名
   * @param password 用户密码
   * @returns 当前登录用户token
   */
  async signIn(username: string, password: string) {
    const user = await this.userService.find(username);
    if (!user) {
      // 用户不存在，请注册
      throw new AuthException(AuthCode.USER_NOT_FOUND_REGISTER);
    }

    // 用户密码进行比对
    const isPasswordValid = await argon2.verify(user.password, password);

    if (!isPasswordValid) {
      // 用户名或密码错误
      throw new AuthException(AuthCode.INVALID_USERNAME_OR_PASSWORD);
    }
    return BaseResponse.toSuccessJustData({
      token: `Bearer ${this.appJwtService.sign({
        username: user.username,
        id: user.id,
      })}`,
    });
  }

  /**
   * @description 用户注册方法
   * @param username 用户名
   * @returns 注册的用户名
   */
  async signUp(username: string, password: string) {
    const user = await this.userService.find(username);

    if (user) {
      // 用户已存在
      throw new AuthException(AuthCode.USER_ALREADY_EXISTS);
    }

    const userInfo = await this.userService.create({
      username,
      password,
    });

    return BaseResponse.toSuccessJustData({
      username: userInfo.username,
    });
  }
}
