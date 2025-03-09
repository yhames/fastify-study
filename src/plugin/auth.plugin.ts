import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyReply,
  FastifyRequest,
} from 'fastify';
import {
  verifyAccessToken,
  shoreVerifyRefreshToken,
} from '../global/auth/auth.helper';
import fp from 'fastify-plugin';
import { AuthHeader, AuthPayload } from '../schema/types';

declare module 'fastify' {
  interface FastifyRequest {
    user: {
      id: bigint;
      nickname: string;
    } | null;
  }
}

const currentAuth: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  fastify.decorateRequest('user', null);
  fastify.addHook(
    'preHandler',
    async (
      request: FastifyRequest<{ Headers: AuthHeader }>,
      reply: FastifyReply,
    ) => {
      const { authorization } = request.headers;
      const refreshToken = request.cookies.refresh_token;
      if (!authorization || !refreshToken) {
        return;
      }

      try {
        shoreVerifyRefreshToken(refreshToken);
        const payload = verifyAccessToken(authorization);

        request.user = {
          id: payload.id,
          nickname: payload.nickname,
        };
      } catch (error) {
        return;
      }
    },
  );
};

export const currentAuthPlugin = fp(currentAuth, {
  name: 'currentAuthPlugin',
});
