import Fastify from 'fastify';
import websocket from '@fastify/websocket';
import dotenv from 'dotenv';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import routes from './routes';
import { HOST, PORT } from './global/constant';

dotenv.config({ path: '.env' });

const fastify = Fastify({
  logger: {
    level: process.env.LOG_LEVEL,
  },
}).withTypeProvider<TypeBoxTypeProvider>();

await fastify.register(websocket);
await fastify.register(routes);

const start = async () => {
  try {
    await fastify.listen({
      host: HOST,
      port: PORT,
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
