const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})
app.get('*', (req, res) => {
    res.status(404).send('res not found')
})
app.listen(5001, () => {
    console.log('listeing')
})