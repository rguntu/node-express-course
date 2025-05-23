const autorize = (req, res, next) => {
    const {user} = req.query
    if(user === 'john') {
        req.user = {name: 'john', id: 4}
    } else {
        res.status(401).send('UnAuth')
    }
    console.log("authorize")
    next()
}

module.exports = autorize