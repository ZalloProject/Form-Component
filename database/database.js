const mongoose = require('mongoose')
const nameArr = require ('./nameArr')
const random = require('mongoose-simple-random');
// const helpers = require('./helpers')

mongoose.connect('mongodb://localhost/form')

let agentSchema = mongoose.Schema({ 
  agent_name: {
    type: String,
    unique: true,
  },
  recent_sales: Number, 
  phone: String,
  agent_type: String,
  average_stars: Number,
  num_ratings: Number,
  agent_photo: String
});
agentSchema.plugin(random)

//////////FUNCTIONS TO RANDOMLY GENERATE DATA FOR THE DATABASE/////////////////
let Agent = mongoose.model('Agent', agentSchema)

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to Mongo!')
});

const randomNumberGen = (max, options) => {
  if(options === 'stars'){
    var min = Math.ceil(2);
    var str = ((Math.random() * (max - min + 1)) + min).toString();
    return eval(str.slice(0, 4))
  } else if (typeof options === 'number'){
    if(options % 10 === 0) { 
      return 1
    } 
  }
  return Math.floor(Math.random() * Math.floor(max))
}

const generatePhoneNumber = () => {
  let phoneNum = "("
  for (var i = 0; i < 3; i++){ 
    phoneNum+= randomNumberGen(9) 
  }
  phoneNum+=") "
  for(var j = 0; j < 3; j++){ 
    phoneNum+= randomNumberGen(9)
  }
  phoneNum+= "-"
  for(var k = 0; k < 4; k++){
    phoneNum+= randomNumberGen(9)
  }
  return phoneNum
}

const agentAssign = (num) => {
  if(num < 25){
    return 'listing'
  } else {
    return 'premier'
  }
}

//////////INSERTION///////////////// 
function insertIntoDb(){
  let agentCount = 1
  for(let i = agentCount; i < nameArr.length && i <= 100; i++){
    Agent.insertMany([
      {agent_name: nameArr[i], recent_sales: randomNumberGen(100), phone: generatePhoneNumber(), 
      agent_type: agentAssign(agentCount), average_stars: randomNumberGen(5, "stars"), num_ratings: randomNumberGen(500, agentCount), 
      agent_photo: `https://s3-us-west-2.amazonaws.com/agents-zallo/Realtor${agentCount++}.jpg`}
    ])
  }
}

//////////FUNCTION TO RANDOMLY RETRIEVE DATA FROM THE DATABASE/////////////////

const getFourRandomAgents = async (cb) => {
  let finalResultsArr = []
  let filterOne = { agent_type: { $in: 'listing' } } 
  let filterThree = { agent_type: { $in: 'premier' } }
  let optionsThree = { limit: 3 } 

  try {
    await Agent.findRandom(filterOne, {}, {}, (err, one) => {
    if(err){
      console.error(err)
    } else {
      finalResultsArr.push(one[0]._doc)
    }
  });
  await Agent.findRandom(filterThree, {}, optionsThree, (err, three) => {
    if(err){
      console.error(err)
    } else {
      for(var i = 0; i < three.length; i++){
        finalResultsArr.push(three[i]._doc)
      }
    }
    cb(finalResultsArr)
  })
  }
  catch(e){
    return e
  }
}


module.exports.Agent = Agent; 
module.exports.getFourRandomAgents = getFourRandomAgents; 
// db.agents.createIndex( { "agent_name": 1 }, { unique: true } ) will only allow unique values of names in db