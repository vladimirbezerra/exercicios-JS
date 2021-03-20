/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
Exemplo:
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0
*/

const multiplicar =(a,b) => {
    let r = 0
    for (let i = 0 ; i < b; i++){
        r = r + a 
    }
    return r
}

console.log(multiplicar(0,7))