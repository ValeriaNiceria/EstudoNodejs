const express = require('express')
const app = express()

const PORT = 3000

let count = 0
app.get('/', (req, res) => {
    res.send(`<h1>Olá - ${ ++count }</h1>`)
})

app.get('/page1', (req, res) => {
    res.send(`<h1>Hello - ${ count }</h1>`)
})


app.listen(PORT, err => {
    if (err) {
        console.log('Não foi possível iniciar')
    } else {
        console.log('Servidor rodando!')
    }
})