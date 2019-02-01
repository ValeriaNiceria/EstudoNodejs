const { readFile } = require('fs')

// convertendo função para promise
const { promisify } = require('util')
const readFileAsync = promisify(readFile)

// outra forma de obter os dados do json
// const dadosJson = require('./herois.json')

class Database {
    constructor() {
        this.NOME_ARQUIVO = 'herois.json'
    }

    async obterDadosArquivo() {
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }

    escreverArquivo() {

    }

    async listar(id) {
        const dados = await this.obterDadosArquivo()
        const dadosFiltrados = dados.filter((item) => {
            if (id) {
                return item.id === id
            }
            return true
        })
        return dadosFiltrados
    }
}


module.exports = new Database()