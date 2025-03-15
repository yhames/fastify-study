import { HOST, PORT } from './global/constant';
import buildApp from './app';

const app = buildApp();

const start = async () => {
  try {
    await app.listen({
      host: HOST,
      port: PORT,
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
