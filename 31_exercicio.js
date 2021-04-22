/* Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
Exemplo:
recerberMelhorEstudante({
Joao: [8, 7.6, 8.9, 6], // média 7.625
Mariana: [9, 6.6, 7.9, 8], // média 7.875
Carla: [7, 7, 8, 9] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875 } */

let recerberMelhorEstudante = (media) => {
let medi  = 0
let soma = 0
let maiorMedia = {nome: null, media: null}
    Object.entries(media).forEach(([nomeEstudante,notas]) => {
        for (let i = 0 ; i < notas.length; i++){

            soma += notas[i]
        }
        medi = soma/notas.length
        if (maiorMedia.nome === null){
            maiorMedia.nome = nomeEstudante
            maiorMedia.media = medi
        }
        if (maiorMedia.media < medi){
            maiorMedia.media = medi
            maiorMedia.nome = nomeEstudante 
        }
        soma = 0
    });
    
    return maiorMedia
}


 let estudantes = {
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]}

console.log(recerberMelhorEstudante(estudantes))
