import { request } from '@/adapters/request';

export interface Auth {
  /**
   * token令牌
   */
  token: string;
}

export function login() {
  return request<Auth>({
    url: '/auth/signIn',
    config: {
      method: 'POST',
    },
  });
}
