const Promise = require ('bluebird')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const dbHelper = require('../database/database')
const Agent = require('../database/database')
// const helpers = require('../database/helpers')

const app = express()

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.urlencoded({extended: true})) 
app.use(bodyParser.json())

// //attempt at get requests using async and await
// app.get('/agents', async (req, res) =>{
//   try {
//     await dbHelper.getFourRandomAgents((data) => {
//     const json = JSON.stringify(data)
//     res.send(json)
//     })
//   } catch (err) {
//     console.log(err) 
//   }
// })

//another way of get requests using promises
app.get('/agents', (req, res)=>{
  Promise.try(()=>{
    dbHelper.getFourRandomAgents(data => {
      const json = JSON.stringify(data)
      res.send(json)
    })
  })
})

//another way of get requests using promises
// app.get('/agents', (req, res)=>{
//   Promise.try(()=>{
//     dbHelper.getFourRandomAgents()
//   }).then((agents)=>{
//     stringifiedAgents = JSON.stringify(agents)
//     res.status(200)
//     res.send(stringifiedAgents)
//   })
// })

module.exports = app;