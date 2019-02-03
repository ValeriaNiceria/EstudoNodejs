const { deepEqual, ok } = require('assert');

const database = require('./database')
const DEFAULT_ITEM_CADASTRAR = {
    name: 'Flash',
    power: 'Speed',
    id: 1
}
const DEFAULT_ITEM_ATUALIZAR = {
    name: 'SuperGirl',
    power: 'fly',
    id: 3
}

describe('Suite de  manipulação de Herois', () => {
    before(async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        await database.cadastrar(DEFAULT_ITEM_ATUALIZAR)
    })

    it('deve pesquisar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        // pegando a primeira posição usando destructor
        const [result] = await database.listar(expected.id)
        // const posicaoUm = resultado[0]
        deepEqual(result, expected)
        // ok(resultado, expected)
    })

    it('deve cadastrar um heroi, usando arquivos', async () => {
        const expected = {
            ...DEFAULT_ITEM_CADASTRAR,
            id: 2,
            name: 'Batman'
        }
        const result = await database.cadastrar(expected)
        const [actual] = await database.listar(expected.id)
        deepEqual(actual, expected)
    })

    it('deve remover um heroi, usando id', async () => {
        const expected = true
        const result = await database.remover(DEFAULT_ITEM_CADASTRAR.id)
        deepEqual(result, expected)
    })

    it('deve atualizar um heroi, usando o id', async () => {
        const expected = {
            ...DEFAULT_ITEM_ATUALIZAR,
            name: 'Batman',
            power: 'Money'
        }
        const novoDado = {
            name: 'Batman',
            power: 'Money'
        }
        await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado)
        const [result] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id, expected)
        deepEqual(result, expected)
    })
})