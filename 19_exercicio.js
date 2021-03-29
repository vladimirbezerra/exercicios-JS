/*Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números.
💡 A média simples é o resultado da soma de todos os números dividido pela quantidade de números.
Exemplos:
calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3*/ 


//const somaItem = 0
//const mediaNumeros = 0 
const calcularMedia=(valor) =>{

    somaItem = 0 

    valor.forEach(item => somaItem += item/valor.length)
    //return mediaNumeros
    return somaItem
    //return valor.length

}
const numeros1 = [150,10,10,30]
const numeros2 = [1,2,3,4,5]
const numeros3 = [0, 10]
console.log(calcularMedia(numeros1))
console.log(calcularMedia(numeros2))
console.log(calcularMedia(numeros3))