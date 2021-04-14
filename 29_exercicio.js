/* Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
Exemplos:
segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6
 */

let segundoMaior = (arr,) => {

    let segundoMaior = null
    let primeiroMaior = arr[0]

    arr.forEach(elemento => {

        if (elemento > primeiroMaior){
            segundoMaior = primeiroMaior
            primeiroMaior = elemento
        }
    });
return segundoMaior
}
// sort estudar sobre
let maior = [-12, -16, -1, -5]
let vazio = []
//console.log(segundoMaior(maior))
console.log(segundoMaior(vazio))