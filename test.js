const request = require('supertest');
const app = require('./src/app')

 //test example
describe('Test the agents path', () => {
  test('It should responsd to a get request', (done) => {
    return request(app).get("/").then(response => {
      expect(response.statusCode).toBe(200)
      done()
    })
  });
})