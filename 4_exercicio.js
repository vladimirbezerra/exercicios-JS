/*Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
    exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
    Exemplos:
    nomeDoMes(1) // retornará "janeiro"
    nomeDoMes(4) // retornará "abril"*/

    const nomeDoMes = (mes) => {
        let m = " "
        switch (mes)
        {
            case 1: 
            m = "Janeiro"
            break

            case 2:
            m = "Fevereiro"
            break

            case 3:
            m = "Março"
            break

            case 4:
            m = "Abril"
            break

            case 5:
            m = "Maio"
            break

            case 6:
            m = "Junho"
            break

            
            default : m = "Digite uma referência valida entre 1 a 6"

        }
        return m
    }

    console.log(nomeDoMes(6))
    