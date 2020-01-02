const fs = require('fs')
const http = require('http')
const { networkInterfaces } = require('os')

const port = process.env.PORT || 23457

const page = fs.readFileSync('index.html')


const server = http.createServer((request, response) => {
  const getLocalExternalIp = [].concat.apply([], Object.values(networkInterfaces()))
    .filter(details => details.family === 'IPv4' && !details.internal)
    .pop().address

  console.log(getLocalExternalIp)

  return response.end(page)
})

server.listen(port, () => {
  console.log('Fresh iona site running on port ', port)
})
