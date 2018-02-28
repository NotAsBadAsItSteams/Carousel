import request from 'supertest';

import server from '../../server/server';

describe('App Server', () => {
  test('should respond to /games/:id', () => {
    return request(server)
      .get('/games/1234')
      .expect(200);
  });
  test('should 404 to non-existent route', () => {
    return request(server)
      .get('/yolo/1235')
      .expect(404);
  });
});
