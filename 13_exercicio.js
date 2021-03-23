/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
Exemplos:
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []
 */
//var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

const filtrarNumeros = ["Javascript", 1, "3", "Web", 20].filter((x)=>{return typeof(x) == 'number'})

console.log(filtrarNumeros)