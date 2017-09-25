const http = require('http')
const url = require('url')


const log = console.log
const port = 10086

function requestHandler(req, res) {
  if (req.method === "GET") {
    res.statusCode = 400
    res.end('get: hello world')
  } else if (req.method === 'POST') {
    res.writeHeader(200, {
      'Content-Type': 'application/json'
    })
    let body = {
      hello: 'world'
    }
    res.end(JSON.stringify(body))

  }
}
const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    log(err)
  } else {
    log('server running on port' + port)
  }
})