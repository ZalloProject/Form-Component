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

  test('Database should have these items in schema: name, sales, phone, type, average stars, ratings, and photo', (done) => {
    expect(db.agentSchema.obj.agent_name).toBeDefined()
    expect(db.agentSchema.obj.recent_sales).toBeDefined()
    expect(db.agentSchema.obj.phone).toBeDefined()
    expect(db.agentSchema.obj.agent_type).toBeDefined()
    expect(db.agentSchema.obj.average_stars).toBeDefined()
    expect(db.agentSchema.obj.num_ratings).toBeDefined()
    expect(db.agentSchema.obj.agent_photo).toBeDefined()
    done()
  })
})
