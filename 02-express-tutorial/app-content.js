const http = require('http')
const fs = require('fs')
const data = fs.readFileSync('./navbar-app/index.html')
const server = http.createServer((req,res) => {
    const url = req.url;
    if(url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        console.log('user called')
        res.write(data)
        res.end()
    } else {
        res.writeHead(404, {'content-type': 'text/html'})
        console.log('user called')
        res.write('<h1>Error page</h1>')
        res.end()
    }
  
})

server.listen('5001', () => {
    console.log("listeing")
})
