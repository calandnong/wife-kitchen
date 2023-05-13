import { request } from '@/adapters/request';

export function login() {
  return request({
    url: '/login',
    config: {
      method: 'POST',
    },
  });
}
