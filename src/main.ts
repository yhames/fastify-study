import Fastify from 'fastify';
import websocket from '@fastify/websocket';
import dotenv from 'dotenv';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import routes from './routes';
import { HOST, PORT } from './global/constant';
import type { FastifyCookieOptions } from '@fastify/cookie';
import fastifyCookie from '@fastify/cookie';
import { JWT_SECRET } from './global/constant';
import { currentAuthPlugin } from './plugin/auth.plugin';
import fastifySwagger from '@fastify/swagger';
import { swaggerConfig, swaggerUiConfig } from './config/swagger.config';
import fastifySwaggerUi from '@fastify/swagger-ui';
import cors from '@fastify/cors';

dotenv.config({ path: '.env' });

const fastify = Fastify({
  logger: {
    level: process.env.LOG_LEVEL,
  },
}).withTypeProvider<TypeBoxTypeProvider>();

await fastify.register(cors, {
  origin: true,
  credentials: true,
});
await fastify.register(fastifySwagger, swaggerConfig);
await fastify.register(fastifySwaggerUi, swaggerUiConfig);
await fastify.register(websocket);
await fastify.register(fastifyCookie, {
  secret: JWT_SECRET,
} as FastifyCookieOptions);
await fastify.register(currentAuthPlugin);
await fastify.register(routes);

const start = async () => {
  try {
    await fastify.listen(
      {
        host: HOST,
        port: PORT,
      },
      () => {
        if (process.send) {
          process.send('ready');
        }
      },
    );
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
