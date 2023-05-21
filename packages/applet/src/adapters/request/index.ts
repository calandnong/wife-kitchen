import { DEFAULT_API_SUCCESS_CODE, type CommonResponse } from '@wife-kitchen/shared';
import { HttpRequest } from '@applet-request/core';
import type { UniRequestConfig } from '@applet-request/adapters';
import { UniRequestAdapter } from '@applet-request/adapters';
import { isHttpSuccess } from '@applet-request/shared';
import { BusinessException, HttpException } from './exceptions';

const requestInstance = new HttpRequest(new UniRequestAdapter<CommonResponse>());

requestInstance.setDefaultConfig({
  baseURL: import.meta.env.APPLET_API_BASE_URL,
});

/**
 * 所有的错误处理中间件，需要放在最前面
 */
requestInstance.use(async (context, next) => {
  try {
    await next();
  }
  catch (error) {
    console.log(error);
    throw error;
  }
});

/**
 * 打印中间件
 */
requestInstance.use(async (context, next) => {
  console.log('log接口参数是：', context.request);
  await next();
  console.log('log接口返回参数是：', context.response);
});

/**
 * 处理http层错误报错中间件
 */
requestInstance.use(async (context, next) => {
  try {
    await next();
  }
  catch (error) {
    // 判断是否是http成功的状态
    if (!isHttpSuccess(context.response.raw.statusCode)) {
      throw new HttpException('错误，请重试！', context.response.raw);
    }
    // 不是则原错误继续向外抛出
    throw error;
  }
});

/**
 * 处理业务错误中间件
 */
requestInstance.use(async (context, next) => {
  await next();
  // 判断是否业务出错了
  if (context.response.data.code !== DEFAULT_API_SUCCESS_CODE) {
    throw new BusinessException(context.response.data.message, context.response.raw);
  }
});

export interface RequestResponse<Response> extends CommonResponse {
  data: Response;
}

/**
 * 基础请求方法
 * @param options 请求参数
 * @returns 返回服务端的服务响应内容
 */
export function request<Response = undefined>(options: UniRequestConfig) {
  return requestInstance.request<
    Response extends undefined ? CommonResponse<Response> : RequestResponse<Response>
  >(options);
}
