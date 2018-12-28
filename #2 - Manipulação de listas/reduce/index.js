const { obterPessoas } = require('./service')

Array.prototype.meuReduce = function(callback, valorInicial){
	let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
	for (let indice = 0; indice < this.length; indice++) {
		valorFinal = callback(valorFinal, this[indice])
	}
	return valorFinal
}

async function main() {
	try {
		const { results } = await obterPessoas(`a`)
		const alturas = results.map(pessoa => parseInt(pessoa.height))

		// const totAlturas = alturas.reduce((tot, atual) => tot + atual, 0)
		// console.log('alturas: ', alturas)
		// console.log('totAlturas: ', totAlturas)


		const minhaLista = [
			['Valéria', 'Nicéria'],
			['JavaScript', 'Node']
		]
		const total = minhaLista.meuReduce((anterior, proximo) => {
			return anterior.concat(proximo)
		}, [])
		.join(', ')

		console.log('Total: ', total)

	} catch(error) {
		console.error('Error: ', error)
	}
}

main()