const request = require('supertest');
const app = require('./src/app')
const db = require('./database/database')

 //test example
describe('Test the agents path', () => {
  test('It should respond to a get request', (done) => {
    return request(app).get("/").then(response => {
      expect(response.statusCode).toBe(200)
      done()
    })
  });

  test('Database file should have a function called Get Four Random Agents', (done) => {
    expect(db.getFourRandomAgents).toBeTruthy()
    done()
  })

  test('Get Four Random Agents Should Return Four Random Agents', (done) => {
    return (db.getFourRandomAgents(data => {
      expect(data).toHaveLength(4)
      done()
    }))
  })
})