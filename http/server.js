const express = require('express')
const { createReadStream } = require('fs') 
const cookieParser = require('cookie-parser')

//const createReadStream = require('fs).createReadStream

const bodyParser = require('body-parser')

const USERS = {
    alice: 'password',
    bob: 'bob'
}

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.get('/', (req, res) => {
    const username = req.cookies.username
    if (username) {
        res.send(`Hi ${username}`)

    }
    else {
        res.setHeader('Content-Type', 'text/html');
        createReadStream('index.html').pipe(res) 
    }
    //reads index.html and pipes it to response
})

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = USERS[username]

    if (req.body.password === password) {
        res.cookie('username', username)
        res.send('Nice!')
    } else {
        res.send('Fail!')
    }

})

app.listen(5000)
