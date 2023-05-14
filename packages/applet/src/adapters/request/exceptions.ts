import { BaseException } from '@applet-request/shared';

export class HttpException extends BaseException {
  name = 'HttpException';
}

export class BusinessException extends BaseException {
  name = 'BusinessException';
}
