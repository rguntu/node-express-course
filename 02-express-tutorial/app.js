const express = require('express')
const path = require('path')
const app = express()
const {products} = require('./data')
app.get('/api/', (req,res) => {
    res.json(products)
})

app.listen(5001, () => {
    console.log('listeing')
})