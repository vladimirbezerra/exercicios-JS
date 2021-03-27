/* Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
 */
const somarNumeros = [10,10,10,10,10]
const somaReduce = somarNumeros.reduce(function(valorAcumulativo,valorArray){
    valorAcumulativo.soma += valorArray
    return valorAcumulativo
    //return {soma:valorAcumulativo.soma + valorArray}
},{soma:0})
console.log(somaReduce)


/*
const somarNumeros = (valor) => {
    let soma = 0
    for (let i = 0; i < valor.length; i++){
        soma = soma + valor[i]
    }
    return  soma
}
console.log(somarNumeros([10,10,10,10]))
*/

