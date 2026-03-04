/*******************************************************************************************************************************************
* Objetivo: Arquivo responsável por realizar os cálculos da tabuada
* Data: 04/03/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/

//Função para calcular a tabuada
const calcularTabuada = function (contadorInicial, contadorFinal, tabuadaInicial, tabuadaFinal){
    let status = false

    //O sistema deve calcular a tabuada de um número fornecido pelo usuário,
    for(let i = tabuadaInicial; i <= tabuadaFinal; i++){
        console.log(`Tabuada do [${i}]`)
        let resultados = [] 

        //O sistema deve calcular a tabuada de um número fornecido pelo usuário, considerando um contador inicial e um contador final para o cálculo.
        for(let j = contadorInicial; j <= contadorFinal; j++){
            let resultado = i * j

            resultados.push({
                Expressão: `${i} x ${j}`,
                Resultado: resultado
            });
        }

        //O sistema deve exibir o resultado da tabuada de forma organizada, utilizando console.table para apresentar os resultados em formato de tabela.
        console.table(resultados)
        status = true 
    }

    //O sistema deve validar as seguintes condições;
    return status
}

module.exports = {
    calcularTabuada
}
