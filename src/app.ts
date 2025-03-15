import fastify from 'fastify';
import websocket from '@fastify/websocket';
import dotenv from 'dotenv';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import routes from './routes';
import type { FastifyCookieOptions } from '@fastify/cookie';
import fastifyCookie from '@fastify/cookie';
import { JWT_SECRET } from './global/constant';
import { currentAuthPlugin } from './plugin/auth.plugin';
import fastifySwagger from '@fastify/swagger';
import { swaggerConfig, swaggerUiConfig } from './config/swagger.config';
import fastifySwaggerUi from '@fastify/swagger-ui';
import cors from '@fastify/cors';

dotenv.config({ path: '.env' });

const buildApp = () => {
  const app = fastify({
    logger: {
      level: process.env.LOG_LEVEL,
    },
  }).withTypeProvider<TypeBoxTypeProvider>();

  app.register(cors, {
    origin: true,
    credentials: true,
  });
  app.register(fastifySwagger, swaggerConfig);
  app.register(fastifySwaggerUi, swaggerUiConfig);
  app.register(websocket);
  app.register(fastifyCookie, {
    secret: JWT_SECRET,
  } as FastifyCookieOptions);
  app.register(currentAuthPlugin);
  app.register(routes);

  // pingpong
  app.get('/ping', async () => {
    return 'pong\n';
  });

  return app;
};

export default buildApp;
