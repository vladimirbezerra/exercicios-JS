/* Criar uma função que receba um array de números e retorne o menor número desse array.
Exemplos:
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15 */

const menorNumero = (valor) => {

    const menor = valor.reduce(function(valorAcumulado,item){

        return item < valorAcumulado ? item: valorAcumulado

    },valor[0])
    return menor
    /*for (let i = 0; i < valor.length; i++){
        
        if (menor >= valor[i]){
            menor = valor[i]
        }
    } 
    return menor*/
}
let numero1 = [10, 5,35,65,9,2,8]
let numero2 = [5, -15, 50, 3]
console.log(menorNumero(numero2))