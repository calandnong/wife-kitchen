import type { ExecutionContext } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { JWT_META_KEY, JWT_CHECK_META } from '@/common/decorators/jwt.decorator';
import type { Request } from '@/types';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const jwtMeta = this.reflector.getAllAndOverride(JWT_META_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const request = context.switchToHttp().getRequest<Request>();

    if (jwtMeta === JWT_CHECK_META.NOT_ALL_SKIP_JWT_CHECK) {
      if (request.headers.authorization) {
        return super.canActivate(context);
      }
      else {
        return true;
      }
    }

    if (jwtMeta === JWT_CHECK_META.SKIP_JWT_CHECK) return true;

    return super.canActivate(context);
  }
}
