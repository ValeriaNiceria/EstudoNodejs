const express = require('express')
const app = express()
const session = require('express-session')

app.use(session({
    secret: 'fullstackacademy',
    resave: true,
    saveUninitialized: true
}))


app.get('/', (req, res) => {
    let count = 0
    if (req.session.count) {
        count = req.session.count
    }
    ++count
    req.session.count = count
    res.send(`<h1>Olá - ${ count }</h1>`)
})

app.get('/page1', (req, res) => {
    let count = 0
    if (req.session.count) {
        count = req.session.count
    }
    ++count
    req.session.count = count
    res.send(`<h1>Hello - ${ count }</h1>`)
})

const PORT = 3000
app.listen(PORT, err => {
    if (err) {
        console.log('Não foi possível iniciar')
    } else {
        console.log('Servidor rodando!')
    }
})