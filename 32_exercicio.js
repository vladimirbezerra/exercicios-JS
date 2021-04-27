/* Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
Exemplo:
recerberMelhorEstudante({
Joao: [8, 7.6, 8.9, 6], // média 7.625
Mariana: [9, 6.6, 7.9, 8], // média 7.875
Carla: [7, 7, 8, 9] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875 } */

let recerberMelhorEstudante = (aluno) => {
   // return Object.keys(aluno)
    //return Object.values(aluno)
    let desestruturacaoObjeto = Object.entries(aluno)
    let i = 0
    let u = 0
    let arrays = []
    let segundoElemento = []
    let cont = 0
    let media = 0
    let contii = null
    for (i ; i < desestruturacaoObjeto.length; i++){
        arrays = desestruturacaoObjeto[i]  // passa os arrays
            segundoElemento = arrays[1] // passa o segundo elemento do array 
            //console.log(segundoElemento)
            for (u = 0 ; u < segundoElemento.length; u++){
                cont = cont + segundoElemento[u]
                //console.log(cont)
            }
            //console.log(cont) 
        media = cont / segundoElemento.length
        cont = 0
        //console.log(media)
        if (contii == null){
            contii = media
            nome = arrays[0]
        }
        if (contii < media) {
            contii = media
            nome = arrays[0]
        } 
    }
    return  {nome: nome,media: contii} 
    

}

let turma01 = {Joao: [8, 7.6, 8.9, 6],Mariana: [9, 6.6, 7.9, 8],Carla: [7, 7, 8, 9]}
console.log(recerberMelhorEstudante(turma01))