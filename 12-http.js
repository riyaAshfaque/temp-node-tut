const http = require('http') 
const server = http.createServer((req, res) => {
    console.log(req)
    if(req.url === "/")
    {
        res.end('Welcomee to node.js')
    }
    if(req.url === "/about")
    {
        res.end('Welcomee to about page')
    }
     
    res.end(`<h1>Error</h1> 
    <a href="/">Navigate back home</a> `);
     
})

server.listen(4000);