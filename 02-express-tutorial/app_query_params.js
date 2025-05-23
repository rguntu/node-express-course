const express = require('express')
const path = require('path')
const app = express()
const {products} = require('./data')
// app.get('/api/', (req,res) => {
//     res.json(products)
// })

app.get('/api/v1/query', (req, res) => {
    const {search, limit} = req.query
    console.log(search)
    let sortedProd = [...products]
    if(search) {
        sortedProd = sortedProd.filter(p => p.name.startsWith(search))
    }
    if(sortedProd.length < 1) {
        return res.status(200).send({success:true, data:[]});
    }
    if(limit) {
        sortedProd = sortedProd.slice(0,Number(limit))
    }
    return res.json(sortedProd)
})
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {

    res.status(200).send('Helloo')
})

app.get('/api/products/:id', (req,res) => {
    const {id} = req.params;
    const prod = products.find(p => p.id === Number(id));
    if(!prod) {
        res.status(404).send('not found')
    } 

    res.json(prod)
   
})
app.get('/api/products', (req,res) => {
    const nProd = products.map(p => {
        const {id, name, image} = p;
        return {id, name, image}
    })
    res.json(nProd)
})
app.get('/', (req,res) => {
    res.send('<h1> Home page</h1> <a href="/api/products">products</a>')
})

app.listen(5001, () => {
    console.log('listeing')
})