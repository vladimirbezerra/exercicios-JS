/* Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.
Exemplos:
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"
 */


removerVogais = (vogais) => { 
    //return vogais.split("").filter(parametroFilter => "aeiou".indexOf(parametroFilter) < 0).//join(".")

    //return vogais.split("").filter(parametroFilter => !"aeiou".includes(parametroFilter) ).join(".")

    //return vogais.split("").filter(parametroFilter => "aeiou".includes(parametroFilter) ).join(".")

    return vogais.split("").filter(function (parametroFilter){ 
        return !"aeiou".includes(parametroFilter) 
    }).join(".")

}

let fundamentos = "Fundamentos"
let cod3r = "Cod3r"
console.log(removerVogais(fundamentos))
console.log(removerVogais(cod3r))
//console.log('aeiou'.indexOf("a")) // explicação do indexOf