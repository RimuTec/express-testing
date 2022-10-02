import supertest from 'supertest';
import { expressApp, server } from './server';

describe('server.ts', () => {
   it('returns Hello, world! ', async () => {
      // arrange
      const app = supertest(expressApp);

      // act
      const res = await app.get('/');

      // assert
      expect(res.text).toBe('Hello, world! 1136 hrs');
      server.close();
   });
});
