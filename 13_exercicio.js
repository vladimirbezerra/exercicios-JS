/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
Exemplos:
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []
 */
//var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

const filtrarNumeros = (valor)=> {
    const  numeros = valor.filter((x)=>{return typeof(x) == 'number'})
    return numeros
}


console.log(filtrarNumeros([12, 5, 8, 130, 44]))
console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros(["a", "c"]))