const fs = require('fs')

const lerArquivo = arquivo => {
    return new Promise((resolve, reject) => {
        fs.readFile(arquivo, (err, conteudo) => {
            if (err) {
                reject('Não foi possível ler o arquivo', err)
            } else {
                resolve(conteudo)
            }
        })
    })
}

// lerArquivo('01.js')
//     .then((conteudo) => {
//         console.log(String(conteudo))
//     })
//     .catch((error) => {
//         console.log(error)
//     })

const executa = async() => {
    try {
        const conteudo = await lerArquivo('021.js')
        console.log(String(conteudo))
    } catch(error) {
        console.log(error)
    }
}

executa()
    .then(() => {
        console.log('TERMINOU!')
    })