import fastify from 'fastify';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const app = fastify({
  logger: {
    level: process.env.LOG_LEVEL,
  },
});

app.get('/ping', async (request, reply) => {
  return 'pong\n';
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
