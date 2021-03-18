/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
Exemplos:
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará false
*/

const maiorOuIgual = (a, b) => {
    
    if (a > b) {
        return false
    } else if (a < b) {
        return true
    }
    else if (a === b) {
        return true
    } else {
        return false
    }

}

console.log(maiorOuIgual(1,5))
