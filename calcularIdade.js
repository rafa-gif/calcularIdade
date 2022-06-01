const calcularIdade = (nome, anoNascimento) => {
let data = new Date()
let idade = data.getFullYear() - anoNascimento

console.log(`${nome} tem ${idade} anos.`)
}

calcularIdade("Rafa", 1990)
calcularIdade("Pedro", 2001)
calcularIdade("Maria", 1998)
