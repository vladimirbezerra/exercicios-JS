/*Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
Exemplos:
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]
*/

const arrayPrimeiroUltimoElemento = (array) => {
    let novoArray = [array[0],array[array.length-1]]
    return novoArray
}

console.log(arrayPrimeiroUltimoElemento([-100,"aplicativo",16]))


