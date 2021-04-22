/* Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objet
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
Exemplo:
recerberMelhorEstudante({
Joao: [8, 7.6, 8.9, 6], // média 7.625
Mariana: [9, 6.6, 7.9, 8], // média 7.875
Carla: [7, 7, 8, 9] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875  */

let recerberMelhorEstudante = (mediaFinal) => {
    
    let estudantes = []
    for (let estudante in mediaFinal){
        estudantes.push({nome: estudante,media: mediaFinal[estudante].reduce((acumulador,valorAtual)=>{return acumulador + valorAtual},0)/mediaFinal[estudante].length})
    }
    let maiorMedia = estudantes.reduce((acumulador2,valorAtual2)=> {
        if (valorAtual2.media > acumulador2.media){
            return valorAtual2
        } else {
            return acumulador2
        }
    },estudantes[0])

    return maiorMedia

    //array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))
     
}

let estudantes = {

    Joao: [8, 7.6, 8.9, 6], // média 7.625

    Mariana: [9, 6.6, 7.9, 8], // média 7.875

    Carla: [7, 7, 8, 9] // média 7.75
    }

console.log(recerberMelhorEstudante(estudantes))
let estud = {

    Joao: 6, // média 7.625

    Mariana: 9, // média 7.875

    Carla: 7 // média 7.75
    }
    //console.log(recerberMelhorEstudante(estud)) 