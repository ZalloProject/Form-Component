const request = require('supertest');
const app = require('./src/app');

const db = require('./database/database');

const mockingoose = require('mockingoose').default;
const mongoose = require('mongoose');

const model = db.Agent;
const getFourRandomAgents = db.getFourRandomAgents

// let agentSchema_TEST = mongoose.Schema({ 
//   agent_name_TEST: String,
//   agent_number_TEST: Number
// });

// let Agent_TEST = mongoose.model('Agent_TEST', agentSchema_TEST)

// //mock database setup
// beforeAll(async () => {
//   connection = await mongoose.connect('mongodb://localhost/form_TEST');
// });

// afterAll(async () => {
//   await mongoose.connection.close();
// });

beforeEach(() => {
  mockingoose.resetAll();
});

 //test example
describe('Test the database and server', () => {
  test('It should respond to a get request', (done) => {
    return request(app).get("/").then(response => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('Database file should have a function called Get Four Random Agents', (done) => {
    expect(db.getFourRandomAgents).toBeTruthy();
    done()
  });

  test('Get Four Random Agents Should Return Four Random Agents', async () => {
    await (getFourRandomAgents(data => {
      console.log(data);
      expect(data).toHaveLength(4);
    }));
  });

  test('Database should have these items in schema: name, sales, phone, type, average stars, ratings, and photo', (done) => {
    expect(db.agentSchema.obj.agent_name).toBeDefined();
    expect(db.agentSchema.obj.recent_sales).toBeDefined();
    expect(db.agentSchema.obj.phone).toBeDefined();
    expect(db.agentSchema.obj.agent_type).toBeDefined();
    expect(db.agentSchema.obj.average_stars).toBeDefined();
    expect(db.agentSchema.obj.num_ratings).toBeDefined();
    expect(db.agentSchema.obj.agent_photo).toBeDefined();
    done();
  });

  test('It should pass a sample db test', (done)=> { //THIS WILL NOT WORK UPON RELOAD OF DATA
    const _doc = {
      _id: "5c9e7afc717b77527eb9fc0d",
      "recent_sales" : 8,
      "phone" : "(512) 017-3307",
      "agent_type" : "listing",
      "average_stars" : 5.9,
      "num_ratings" : 297,
      "agent_photo" : "https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor18.jpg",
    }
    mockingoose.Agent.toReturn(_doc, 'findOne')
    return model
    .findById({ _id: "5c9e7afc717b77527eb9fc0d" })
    .then(doc => {
      expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
      done();
    });
  });

  // test('It should insert sample data into the database', (done) => {
  //   return (db.insertIntoDb())
  // })
});
