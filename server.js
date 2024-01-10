// import modules

import express from 'express'

// create express app

const app = express()

// configure the app

// mount middleware

// mount routes

app.get('/', function(req, res){
  res.send('<h1>hello, friend</h1>')
})

// tell the app to listen on port 3000

app.listen(3000, function(){
  console.log('Listening on port 3000');
})