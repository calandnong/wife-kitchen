import type { Plugin, AppConfig } from 'vue';

/**
 * 全局异常处理插件
 * @param app
 */
export const errorHandlerPlugin: Plugin = (app) => {
  Object.assign<AppConfig, Partial<AppConfig>>(app.config, {
    errorHandler: ((): AppConfig['errorHandler'] => {
      /**
       * 原处理函数
       */
      let rawHandle: typeof app.config.errorHandler | undefined;
      if (typeof app.config.errorHandler === 'function') {
        rawHandle = app.config.errorHandler;
      }
      return (err, ...args) => {
        // 此处由于底层会直接重写该方法进行直接上报，此处需要执行一下底层方法
        rawHandle?.(err, ...args);
        // todo 待确认是否需要主动上报
        console.error('errorHandler', err);
      };
    })(),
  });
};
