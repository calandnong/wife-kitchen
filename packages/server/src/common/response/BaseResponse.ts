import type { CommonResponse } from '@wife-kitchen/shared';
import { DEFAULT_API_SUCCESS_CODE } from '@wife-kitchen/shared';

export class BaseResponse<Data = unknown> implements CommonResponse {
  constructor(public code: number, public message: string = '系统繁忙', public data?: Data) {}

  static toSuccessJustMsg(message: string) {
    return new BaseResponse(DEFAULT_API_SUCCESS_CODE, message);
  }

  static toSuccessJustData<T>(data: T) {
    return new BaseResponse<T>(DEFAULT_API_SUCCESS_CODE, '请求成功', data);
  }

  static toSuccess<T>(data: T, message: string) {
    return new BaseResponse<T>(DEFAULT_API_SUCCESS_CODE, message, data);
  }
}
