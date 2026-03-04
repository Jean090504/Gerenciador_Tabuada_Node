/*******************************************************************************************************************************************
* Objetivo: Arquivo responsável por realizar os cálculos da tabuada
* Data: 04/03/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/

//Função para calcular a tabuada
const calcularTabuada = function (contadorInicial, contadorFinal, tabuadaInicial, tabuadaFinal){
    let status = false

    for(let i = tabuadaInicial; i <= tabuadaFinal; i++){
        console.log(`Tabuada do [${i}]`)
        let resultados = [] 

        for(let j = contadorInicial; j <= contadorFinal; j++){
            let resultado = i * j

            resultados.push({
                Expressão: `${i} x ${j}`,
                Resultado: resultado
            });
        }
        console.table(resultados)
        status = true 
    }

    return status
}

module.exports = {
    calcularTabuada
}
