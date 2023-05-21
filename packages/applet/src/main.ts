import { createSSRApp } from 'vue';
import App from './App.vue';
import { errorHandlerPlugin } from './adapters/app-plugins';

export function createApp() {
  const app = createSSRApp(App);

  app.use(errorHandlerPlugin);
  console.log('初始化');

  uni.onError((err) => {
    console.log('出现错了！', err);
  });

  return {
    app,
  };
}
