import { HttpStatus } from '@nestjs/common';
import { BaseException } from './base.exception';

/**
 * 认证异常状态码: 2000 - 2100
 */
export enum AuthCode {
  /**
   * 用户已存在
   */
  USER_ALREADY_EXISTS = 2000,
  /**
   * 用户不存在，请注册
   */
  USER_NOT_FOUND_REGISTER = 2001,
  /**
   * 用户名或者密码错误
   */
  INVALID_USERNAME_OR_PASSWORD = 2002,
  /**
   * 错误的用户令牌
   */
  INVALID_TOKEN = 2003,
  /**
   * 用户未登录
   */
  USER_NOT_LOGIN = 2004,
}

export const AuthMessage: Readonly<Record<AuthCode, string>> = {
  [AuthCode.USER_ALREADY_EXISTS]: '用户已存在',
  [AuthCode.USER_NOT_FOUND_REGISTER]: '用户不存在，请注册',
  [AuthCode.INVALID_USERNAME_OR_PASSWORD]: '用户名或者密码错误',
  [AuthCode.INVALID_TOKEN]: '错误的用户令牌',
  [AuthCode.USER_NOT_LOGIN]: '用户未登录',
};

/**
 * 认证异常,
 * 认证异常状态码: 2000 - 2100
 */
export class AuthException extends BaseException {
  constructor(
    code: AuthCode,
    status: HttpStatus = HttpStatus.OK,
  ) {
    super(code, AuthMessage[code], status);
  }
}
