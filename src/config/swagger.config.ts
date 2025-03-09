import { FastifySwaggerUiOptions } from '@fastify/swagger-ui';
import { HOST, PORT } from '../global/constant';

const swaggerConfig = {
  swagger: {
    info: {
      title: 'Fastify API',
      description: 'API Documentation',
      version: '0.1.0',
    },
    host: HOST + ':' + PORT,
    basePath: '/',
  },
};

const swaggerUiConfig: FastifySwaggerUiOptions = {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'full',
  },
};

export { swaggerConfig, swaggerUiConfig };
