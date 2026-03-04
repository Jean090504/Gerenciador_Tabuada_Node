/*******************************************************************************************************************************************
* Objetivo: Desenvolver um sistema para gerenciar o cálculo de uma tabuada
* Data: 04/03/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/

//Importação da biblioteca de entrada e saída de dados
const readline = require('readline')

const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Importação das funções de cálculos e tratativas
const calculos = require('./model/calculos')
const tratativas = require('./model/tratativas')

//Entrada de dados do usuário
entradaDados.question('Digite o número inicial do contador: ', function (contadorInicial) {
    entradaDados.question('Digite o número final do contador: ', function (contadorFinal) {
        entradaDados.question('Digite o número inicial da tabuada: ', function (tabuadaInicial) {
            entradaDados.question('Digite o número final da tabuada: ', function (tabuadaFinal) {
                let resultadoValidado = tratativas.validarEntrada(contadorInicial, contadorFinal, tabuadaInicial, tabuadaFinal)

                if(resultadoValidado === true){
                    let resultadoTabuada = calculos.calcularTabuada(Number(contadorInicial), Number(contadorFinal), Number(tabuadaInicial), Number(tabuadaFinal))
                if (resultadoTabuada) {
                    console.log('Tabuadas geradas com sucesso!')
                    console.log('Obrigado por utilizar o sistema de tabuada!')
                    entradaDados.close()
                } else {
                    console.log('Houve um erro ao gerar as tabuadas.')
                    entradaDados.close()
                }
                } else {
                    console.log(resultadoValidado) 
                    entradaDados.close()
                }

            })
        })
    })
})