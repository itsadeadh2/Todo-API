const request = require('supertest');
const container = require('../../container');

describe('/todo', () => {
  let server;

  beforeAll(async () => {
    server = await container.startModule('App');
  });

  describe('GET /health', () => {
    test('should return an \'its okay\' message', async () => {
      const { body } = await request(server.getAppInstance()).get('/health');
      expect(body.message).toEqual('I\'m okay c:');
    });
  });
});
