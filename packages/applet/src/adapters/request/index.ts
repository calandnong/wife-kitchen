import { HttpRequest } from '@applet-request/core';
import type { UniRequestConfig } from '@applet-request/adapters';
import { UniRequestAdapter } from '@applet-request/adapters';

const requestInstance = new HttpRequest(new UniRequestAdapter());

requestInstance.setDefaultConfig({
  baseURL: import.meta.env.APPLET_API_BASE_URL,
});

/**
 * 打印中间件
 */
requestInstance.use(async (context, next) => {
  console.log('log接口参数是：', context.request);
  next();
  console.log('log接口返回参数是：', context.response);
});

/**
 * 基础请求方法
 * @param options 请求参数
 * @returns 返回服务端的服务响应内容
 */
export function request<Response>(options: UniRequestConfig) {
  return requestInstance.request<Response>(options);
}
