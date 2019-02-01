const { deepEqual, ok } = require('assert');

const database = require('./database')
const DEFAULT_ITEM_CADASTRAR = {
    name: 'Flash',
    power: 'Speed',
    id: 1
}

describe('Suite de  manipulação de Herois', () => {
    it('deve pesquisar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        // pegando a primeira posição usando destructor
        const [resultado] = await database.listar(expected.id)
        // const posicaoUm = resultado[0]
        deepEqual(resultado, expected)
        // ok(resultado, expected)
    })

    // it('deve cadastrar um heroi, usando arquivos', async () => {
    //     const expected = DEFAULT_ITEM_CADASTRAR
    //     //
    //     ok(null, expected)
    // })
})