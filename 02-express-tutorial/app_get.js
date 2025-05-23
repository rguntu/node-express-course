const express = require('express')
const path = require('path')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')
//req => middleware => res


//app.use([authorize,logger])
app.use(morgan('tiny'))
app.use(express.static('./public'))
//app.use('/api',logger)
 app.get('/', (req, res) => {
    console.log(req.user)
    res.send('home')
})
app.get('/about', (req, res) => {
    
    res.send('about')
})
app.listen(5001, () => {
    console.log('listeing')
})