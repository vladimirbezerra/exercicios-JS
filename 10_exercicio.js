/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++" */

const simboloMais = (a) => {
    let mais = "+"
    let t =""
    for (let i = 0;i < a; i++)
    {
        t  += mais
    }
    return ` "${t}" `
}
console.log(simboloMais(4))
