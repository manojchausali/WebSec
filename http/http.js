const net = require('net')

const s = net.createConnection({
    host: 'example.com',
    port:80
})

const request = `
GET / HTTP/1.1
Host: example.com


`.slice(1)

s.write(request)
s.pipe(process.stdout)