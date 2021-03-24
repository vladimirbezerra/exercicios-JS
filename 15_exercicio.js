/* Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
💡 Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele
por 2 é zero.
Exemplos:
receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]
 */

const IndicesPares = [1, 2, 3, 4,6,20,89]

receberSomenteOsParesDeIndicesPares = IndicesPares.filter(value => value%2==0)

console.log(receberSomenteOsParesDeIndicesPares)