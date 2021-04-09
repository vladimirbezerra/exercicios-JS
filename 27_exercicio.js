/* Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir:
Exemplo:
inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c" */

const inverter = (obj) => {
let novoObj = {}
Object.entries(obj).forEach(([chave,valor]) => {

   novoObj[valor] = chave
   console.log(typeof(valor))
   console.log(typeof(chave))

});

return novoObj
}
let objTexte = {a: 1, b: 2, c: 3}
console.log(inverter(objTexte))
//console.log(Object.values(objTexte))
//console.log(Object.keys(objTexte))
console.log(Object.entries(objTexte))
//let j = Object.entries(objTexte).map(([chave,valor]) => {
 //   return `${chave}: ${valor}`
//})
//console.log(j)

//console.log(Object.entries(objTexte))