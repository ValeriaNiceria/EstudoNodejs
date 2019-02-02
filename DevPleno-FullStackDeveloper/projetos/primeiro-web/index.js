const express = require('express')
const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    res.send('<h1>Olá!</h1>')
})

app.listen(PORT, err => {
    if (err) {
        console.log('Não foi possível iniciar')
    } else {
        console.log('Servidor rodando!')
    }
})