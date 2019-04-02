require("@babel/polyfill");
const Promise = require ('bluebird')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const dbHelper = require('../database/database')
const Agent = require('../database/database')

const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.urlencoded({extended: true})) 
app.use(bodyParser.json())

app.get('/agents', (req, res)=>{
  Promise.try(()=>{
    dbHelper.getFourRandomAgents(data => {
      const json = JSON.stringify(data)
      res.send(json)
    })
  })
})


module.exports = app;