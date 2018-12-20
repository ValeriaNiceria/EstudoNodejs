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
            rua: 'dos bobos',
            numero: 0
        });
    }, 2000)
}


/* ====================================
    Refatorando Callbacks para Promises
====================================== */
const user_promise = get_user()
// para manipular o sucesso, usamos a função .then
// para manipular error, usamos o .catch

user_promise
    .then((usuario) => {
        return get_fone(usuario.id)
            .then((result) => {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then((resultado) => {
        const address = get_address_async(resultado.usuario.id)
        return address.then((result) => {
            return {
                user: resultado.usuario,
                fone: resultado.telefone,
                address: result
                
            }
        })
    })
    .then((result) => {
        console.log(`
            Nome: ${ result.user.nome }
            Endereço: ${ result.address.rua } - ${ result.address.numero }
            Telefone: (${ result.fone.ddd }) ${ result.fone.telefone }
        `)
    })
    .catch((error) => {
        console.error('DEU ERRO NA FUNÇÃO', error)
    })