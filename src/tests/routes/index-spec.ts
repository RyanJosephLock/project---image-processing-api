import app from '../../app';
import request from 'supertest';

describe('-- Routes --', () => {
  describe('test app server response code on /api', async () => {
    it('it returns status code 200 reponse', async () => {
      const res = await request(app).get('/api');
      expect(res.statusCode).toBe(200);
    });
  });

  describe('test app server response code on /api/images', async () => {
    it('it returns status code 200 reponse', async () => {
      const res = await request(app).get('/api/images');
      expect(res.statusCode).toBe(200);
    });
  });
});
