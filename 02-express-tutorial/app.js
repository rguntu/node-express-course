const express = require('express')
const path = require('path')
const app = express()
//const {people} = require('./data')
const people = require('./routes/people')
const login = require('./routes/auth')
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.use('/api/people', people)
app.use('/login', login)
app._router.stack.forEach((middleware) => {
    if (middleware.route) {
      console.log(`${Object.keys(middleware.route.methods).join(', ').toUpperCase()} ${middleware.route.path}`);
    }
  });



app.listen(5001, () => {
    console.log('listeing')
})