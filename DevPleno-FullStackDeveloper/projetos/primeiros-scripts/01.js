const soma = (num1, num2) => num1 + num2
const subtracao = (num1, num2) => num1 - num2
const operacao = (op, num1, num2) => op(num1, num2)

console.log(soma(10, 20))
console.log(subtracao(10, 20))
console.log(operacao(soma, 10, 20))

const arr = [1, 2, 4]
const print = num => console.log('Num:', num)
const dobro = num => num * 2
arr.forEach(print)
arr.map(dobro).forEach(print)
console.log(arr.reduce((num1, num2) => num1 + num2, 0))