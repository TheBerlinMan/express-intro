// import modules

import express from 'express'
import { spuds } from './data/spud-data.js'

// create express app

const app = express()

// configure the app

app.set('view engine', 'ejs')

// mount middleware

// mount routes

// app.get('/', function(req, res){
//   res.send('<h1>hello, friend</h1>')
// })

app.get('/home', function(req, res){
  res.render('home')
})
app.get('/spuds', function(req, res){
  res.render('spuds/index', {
    spuds: spuds
  })
})

// tell the app to listen on port 3000

app.listen(3000, function(){
  console.log('Listening on port 3000');
})