import Fastify from 'fastify';
import websocket from '@fastify/websocket';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const fastify = Fastify({
  logger: {
    level: process.env.LOG_LEVEL,
  },
});
await fastify.register(websocket);

fastify.get('/ping', async (request, reply) => {
  return 'pong\n';
});

fastify.get('/ping/ws', { websocket: true }, (socket, req) => {
  socket.on('message', (message) => {
    socket.send('pong');
  });
});

const start = async () => {
  try {
    await fastify.listen({
      host: process.env.HOST || '127.0.0.1',
      port: parseInt(process.env.PORT || '8080'),
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
