import fastify from 'fastify';
import { AddressInfo } from 'net';

const app = fastify({
  logger: {
    level: 'info',
  },
});

app.get('/ping', async (request, reply) => {
  return 'pong\n';
});

const start = async () => {
  try {
    await app.listen({ port: 8080 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
