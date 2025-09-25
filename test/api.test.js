const request = require('supertest');
const app = require('../server');

describe('API RESTful', () => {
  it('debería responder con 200 en '/'', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  // Aquí se agregarán más pruebas unitarias para otros endpoints
});