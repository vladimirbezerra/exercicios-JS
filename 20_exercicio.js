/* Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário.
📕 Obs: a fórmula para calcular a área de um triângulo é (base x altura) / 2
Exemplos:
areaDoTriangulo(10, 15) // retornará 75.00
areaDoTriangulo(7, 9) // retornará 31.50
areaDoTriangulo(9.25, 13.1) // retornará 60.59
 
const calcularArea = (areas) => {
    h = []
    areas.forEach(item => { 
    h.push(areaDoTriangulo(item.base,item.altura))
        
    });
    return h
}

const areaDoTriangulo = (base,altura) => (base*altura/2).toFixed(2)

const area = [{base: 10, altura:15},{base: 50, altura: 20}]
//console.log(areaDoTriangulo(area))
console.log(calcularArea(area))

const calcularArea = (areas) => {    

    return areas.map(item => areaDoTriangulo(item.base,item.altura))
}
const areaDoTriangulo = (base,altura) => (base*altura/2).toFixed(2)

const area = [{base: 10, altura:15},{base: 50, altura: 20}]
//console.log(areaDoTriangulo(area))
console.log(calcularArea(area))*/

const calcularArea = (item) => {
    
    return areaDoTriangulo(item.base,item.altura)
    
}

const areaDoTriangulo = (base,altura) => (base*altura/2).toFixed(2)

const area = {base: 10, altura:15}
//console.log(areaDoTriangulo(area))
console.log(calcularArea(area))

