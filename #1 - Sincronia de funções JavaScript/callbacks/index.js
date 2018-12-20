/* 
OBJETIVOS
0 - Obter um usuário
1 - Obter o número de telefone de um usuário a partir de seu ID
2 - Obter o endereço do usuário pelo ID
*/

function get_user(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'Jasmine',
            data_nascimento: new Date()
        })
    }, 1000)
}

function get_fone(id_usuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '31232424',
            ddd: 31
        })
    }, 2000)
}

function get_address(id_usuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000);
}

function resolver_user(error, usuario) {
    console.log('usuário: ', usuario)
}

// Chamando as funções
get_user(function resolver_user(error, usuario) {
    if (error) {
        console.log('DEU RUIM no USUÁRIO', error)
        return;
    }
    get_fone(usuario.id, function resolver_fone(error1, telefone) {
        if (error1) {
            console.log('DEU RUIM no TELEFONE', error1)
            return;
        }
        
        get_address(usuario.id, function resolver_address(error2, endereco) {
            if (error2) {
                console.log('DEU RUM no ENDEREÇO', error2)
                return;
            }
    
            console.log(`
                Nome usuário: ${ usuario.nome },
                Endereço: ${ endereco.rua } - nº ${ endereco.numero },
                Telefone: (${ telefone.ddd })${ telefone.telefone }
            `)
        })
    })
})

// const fone = get_fone(user.id)
// console.log('telefone', fone)