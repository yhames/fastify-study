import fastify from 'fastify';

const server = fastify();

server.get('/ping', async (request, reply) => {
  return 'pong\n';
});

const start = async () => {
  try {
    await server.listen({ port: 8080 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
