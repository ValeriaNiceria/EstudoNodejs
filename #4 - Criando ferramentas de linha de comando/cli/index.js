const Commander = require('commander')
const Database = require('./database')
const Heroi = require('./heroi')

const main = async () => {
    Commander
        .version('v1')
        .option('-n, --name [value]', 'Nome do Heroi')
        .option('-p, --power [value]', 'Poder do Heroi')
        .option('-i, --id [value]', 'ID do Heroi')

        .option('-c, --cadastrar', 'Cadastrar um Heroi')
        .option('-l, --listar', 'Listar os Herois')
        .option('-r, --remover', 'Remover um Heroi pelo ID')
        .option('-a, --atualizar [value]', 'Atualizar um Heroi pelo ID')
        .parse(process.argv)
    const heroi = new Heroi(Commander)
    try {
        if (Commander.cadastrar) {
            delete heroi.id
            const result = await Database.cadastrar(heroi)

            if (!result) {
                console.error('Erro ao cadastrar o heroi!')
                return
            }
            console.log('Heroi cadastrado com sucesso!')
        }

        if (Commander.listar) {
            const result = await Database.listar()
            console.log(result)
        }

        if (Commander.remover) {
            const result = await Database.remover(heroi.id)

            if (!result) {
                console.error('Erro ao remover o heroi!')
                return
            }
            console.log('Heroi removido com sucesso!')
        }

        if (Commander.atualizar) {
            const idAtualizar = parseInt(Commander.atualizar)
            // remover todas as chaves que estiverem com o valor undefined | null
            const dado = JSON.stringify(heroi)
            const heroiAtualizar = JSON.parse(dado)

            const result = await Database.atualizar(idAtualizar, heroiAtualizar)
            
            if (!result) {
                console.error('Erro ao atualizar o heroi')
                return
            }
            console.log('Heroi atualizado com sucesso!')
        }
    } catch (error) {
        console.error('Ocorreu um problema', error)
    }
}

main()