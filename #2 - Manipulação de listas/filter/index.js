const { obterPessoas } = require('./service')

Array.prototype.meuFilter = function(callback) {
	const list = []
	for (item of this) {
		const result = callback(item, this)
		// 0, "", null, undefined === false 
		if (!result) continue
		list.push(item)
	}
	return list
}

async function main() {
	try {
		const { results } = await obterPessoas(`a`)

		// const familyLars = results.filter((pessoa) => {
		// 	const result = pessoa.name.toLowerCase().indexOf(`lars`) !== -1
		// 	return result
		// })

		const familyLars = results.meuFilter(pessoa => pessoa.name.toLowerCase().indexOf(`lars`) !== -1)

		const names = familyLars.map((pessoa) => pessoa.name)

		console.log('Names:', names)
	}
	catch(error) {
		console.error('Error: ', error)
	}
}

main()