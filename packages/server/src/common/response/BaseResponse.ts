export class BaseResponse<Data = unknown> {
  constructor(public code?: number, public message?: string, public data?: Data) {}

  static toSuccessJustMsg(message: string) {
    return new BaseResponse(200, message);
  }

  static toSuccessJustData<T>(data: T) {
    return new BaseResponse<T>(200, '请求成功', data);
  }

  static toSuccess<T>(data: T, message: string) {
    return new BaseResponse<T>(200, message, data);
  }
}
