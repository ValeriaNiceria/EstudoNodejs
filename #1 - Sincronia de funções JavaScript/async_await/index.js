/* 
OBJETIVOS
0 - Obter um usuário
1 - Obter o número de telefone de um usuário a partir de seu ID
2 - Obter o endereço do usuário pelo ID
*/

// importando um módulo interno do node.js
const util = require('util')
const get_address_async = util.promisify( get_address )
// usando o módulo 'promisify' -> converte callback em promise

function get_user() {
    // quando ocorre algum problema - reject
    // quando ocorrer tudo bem - resolve
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            // return reject(new Error('DEU RUIM DE VERDADE!'))
            return resolve({
                id: 1,
                nome: 'Jasmine',
                data_nascimento: new Date()
            })
        }, 1000)
    })
   
}

function get_fone(id_usuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                telefone: '31232424',
                ddd: 31
            })
        }, 2000)
    })
}

function get_address(id_usuario, callback) {
    setTimeout(() => {
        return callback( null,  {
            rua: 'Rua dos bobos',
            numero: 0
        });
    }, 2000)
}


// 1º passo: Adicionar a palavra async -> automaticamente ela retornará uma Promise
main()
async function main() {
    try {
        // Medindo o tempo de execução - Inicio
        console.time('medida-promise')
        
        const usuario = await get_user()
        // const telefone = await get_fone( usuario.id )
        // const endereco = await get_address_async( usuario.id )

        const resultado = await Promise.all([
            get_fone( usuario.id ),
            get_address_async( usuario.id )
        ])
        const telefone = resultado[0]
        const endereco = resultado[1]

        console.log(`
            Nome: ${ usuario.nome }
            Telefone: (${ telefone.ddd }) ${ telefone.telefone }
            Endereço: ${ endereco.rua } - ${ endereco.numero }
        `)

        // Medindo o tempo de execução - Fim
        console.timeEnd('medida-promise')
    }
    catch(error) {
        console.log('ERROR: ', errror)
    }
}