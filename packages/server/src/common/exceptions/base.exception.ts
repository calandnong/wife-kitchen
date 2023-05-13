import { HttpException, HttpStatus } from '@nestjs/common';
import { BaseResponse } from '@/common/response/BaseResponse';

export class BaseException extends HttpException {
  constructor(
    code: number,
    message = '系统繁忙，请重试',
    status: HttpStatus = HttpStatus.OK,
  ) {
    super(new BaseResponse(code, message), status);
  }

  getResponse(): BaseResponse {
    return super.getResponse() as BaseResponse;
  }
}
