const fs = require('fs')
const http = require('http')

const port = process.env.PORT || 23457


const page = fs.readFileSync('index.html')


const server = http.createServer((request, response) => {
  return response.end(page)
})

server.listen(port, () => {
  console.log('Fresh iona site running on port ', port)
})
