/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
Exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]
*/

const repetir = (a,b) => {
    r = []
    for (let i = 0; i < b; i++ ){
        r.push(a)
    }
    return r
}

console.log(repetir(7,3))