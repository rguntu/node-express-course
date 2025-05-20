const express = require('express')

const app = express()
app.get('/', (req, res) => {
    res.send('home page')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>res not found</h1>')
})

app.listen(5001, () => {
    console.log(`server 5001` )
})