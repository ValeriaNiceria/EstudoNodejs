const service = require('./service')

async function main() {
    try {
        const result = await service.obterPessoas('a')
        const names = []

        console.time('Tempo For: ')
        for (let i = 0; i < result.results.length; i++) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('Tempo For: ')

        console.time('Tempo ForIn: ')
        for (let i in result.results) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('Tempo ForIn: ')

        console.time('Tempo ForOf: ')
        for (pessoa of result.results) {
            names.push(pessoa.name)
        }
        console.timeEnd('Tempo ForOf: ')

        
        console.log('NOMES: ', names)
    }
    catch(error) {
        console.error('ERRO INTERNO: ', error)
    }
}

main()