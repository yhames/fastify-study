import fastify from 'fastify';
import websocket from '@fastify/websocket';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const app = fastify({
  logger: {
    level: process.env.LOG_LEVEL,
  },
});
await app.register(websocket);

app.get('/ping', async (request, reply) => {
  return 'pong\n';
});

app.get('/ping/ws', { websocket: true }, (socket, req) => {
  socket.on('message', (message) => {
    socket.send('pong');
  });
});

const start = async () => {
  try {
    await app.listen({
      host: process.env.HOST || '127.0.0.1',
      port: parseInt(process.env.PORT || '8080'),
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
