const mongoose = require('mongoose')
const nameArr = require ('./nameArr')
const random = require('mongoose-simple-random');

mongoose.connect('mongodb://localhost/formTEST')

let agentSchemaTest = mongoose.Schema({ 
  agent_name_TEST: {
    type: String,
    unique: true,
  },
  recent_sales_TEST: Number, 
  phone_TEST: String,
  agent_type_TEST: String,
  average_stars_TEST: Number,
  num_ratings_TEST: Number,
  agent_photo_TEST: String
});
agentSchemaTest.plugin(random)

let AgentTest = mongoose.model('AgentTest', agentSchemaTest)

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to Mongo TEST DATABASE!')
});

//////////INSERTION INTO DATABASE MOCK FUNCTION/////////////////
function insertIntoDb(){
  let agentCount = 1
  for(let i = 0; i < 5; i++){
    AgentTest.insertMany([
      {agent_name: 'Mary Ellen', recent_sales: 45, phone: '(345) 678-9876', 
      agent_type: 'premier', average_stars: 5, num_ratings: 344, 
      agent_photo: `https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor${agentCount++}.jpg`},
      {agent_name: 'Barry Ellen', recent_sales: 4, phone: '(123) 555-5555', 
      agent_type: 'premier', average_stars: 0.2, num_ratings: 3, 
      agent_photo: `https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor${agentCount++}.jpg`},
      {agent_name: 'Larry Ellen', recent_sales: 5, phone: '(999) 946-1345', 
      agent_type: 'premier', average_stars: 3.59, num_ratings: 23, 
      agent_photo: `https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor${agentCount++}.jpg`},
      {agent_name: 'Harry Ellen', recent_sales: 987, phone: '(154) 355-5367', 
      agent_type: 'premier', average_stars: 1.23, num_ratings: 145, 
      agent_photo: `https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor${agentCount++}.jpg`},
      {agent_name: 'Scary Ellen', recent_sales: 30, phone: '(264) 754-1234', 
      agent_type: 'premier', average_stars: 4.99, num_ratings: 333, 
      agent_photo: `https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor${agentCount++}.jpg`},
    ], (err, docs) => {
      if(err){
        console.error(err) 
      } else {
        return docs 
      }
    })
  }
}

const deleteAll = (cb) => {
  AgentTest.deleteMany({}, () => {
    cb();
  });
};

module.exports.AgentTest = AgentTest; 
module.exports.agentSchemaTest = agentSchemaTest;
module.exports.insertIntoDb = insertIntoDb;
module.exports.deleteAll = deleteAll;