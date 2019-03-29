const request = require('supertest');
const app = require('./src/app');

const db = require('./database/database');

const mockingoose = require('mockingoose').default;
const mongoose = require('mongoose');

const model = db.Agent;
const getFourRandomAgents = db.getFourRandomAgents;
const randomNumberGen = db.randomNumberGen;
const generatePhoneNumber = db.generatePhoneNumber;
const agentAssign = db.agentAssign;
const insertIntoDb = db.insertIntoDb;

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
    expect(getFourRandomAgents).toBeTruthy();
    done()
  });

  test('It should have an an Agent model', ()=>{
    expect(model).toBeTruthy();
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

  test('It should have a random number generator that generates within a range of numbers', (done) => {
    const value = randomNumberGen(5, 'stars')
    expect(value).toBeGreaterThanOrEqual(1)
    expect(value).toBeLessThan(6)
    done()
  })

  test('It should have a random phone number generator', (done) => {
    const value = generatePhoneNumber()
    expect(value).toHaveLength(14)
    done()
  })

  test('It should have an agent assigner function', (done) => {
    const value = agentAssign()
    expect(value).not.toBe(null)
    done()
  })

  test('It should have a function designed to insert data into the database', (done) => {
    // const mockInsert = insertIntoDb
    // const mockVal = mockInsert()
    // expect(mockVal).toBeUndefined()
    expect(insertIntoDb).toBeTruthy()
    done()
  })
});


// function insertIntoDb(){
//   let agentCount = 1
//   for(let i = agentCount; i < nameArr.length && i <= 100; i++){
//     Agent.insertMany([
//       {agent_name: nameArr[i], recent_sales: randomNumberGen(100), phone: generatePhoneNumber(), 
//       agent_type: agentAssign(agentCount), average_stars: randomNumberGen(5, "stars"), num_ratings: randomNumberGen(500, agentCount), 
//       agent_photo: `https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor${agentCount++}.jpg`}
//     ])
//   }
// }