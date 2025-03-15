import { FastifyInstance } from 'fastify';
import supertest from 'supertest';
import buildApp from '../src/app';

describe('Fastify App', () => {
  let app: FastifyInstance;

  beforeAll(async () => {
    app = buildApp();
    await app.ready();
  });

  afterAll(() => {
    app.close();
  });

  it('should return 200 on GET /ping', async () => {
    const response = await supertest(app.server).get('/ping');
    expect(response.status).toBe(200);
    expect(response.text).toBe('pong\n');
  });
});
