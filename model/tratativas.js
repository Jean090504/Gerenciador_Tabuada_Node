/*******************************************************************************************************************************************
* Objetivo: Arquivo responsável por realizar as tratativas de erros e validações para o cálculo da tabuada
* Data: 04/03/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/

//Função para validar a entrada de dados do usuário
const validarEntrada = function (contadorInicial, contadorFinal, tabuadaInicial, tabuadaFinal) {

    //Validar se os campos estão vazios
    if(contadorInicial == '' || contadorFinal == '' || tabuadaInicial == '' || tabuadaFinal == ''){
        return 'ERRO: Todos os campos devem ser preenchidos!'
    }

    //Converter os valores para números
    let cInicial = Number(contadorInicial)
    let cFinal = Number(contadorFinal)
    let tInicial = Number(tabuadaInicial)
    let tFinal = Number(tabuadaFinal)

    //Validar se os campos são do tipo número, se as tabuadas estão entre 2 e 100, 
    //se o contador está entre 1 e 50 e se o valor inicial não é maior que o valor final
    if(isNaN(cInicial) || isNaN(cFinal) || isNaN(tInicial) || isNaN(tFinal)){
        return 'ERRO: Todos os campos devem ser do tipo número!'
    }else if(tInicial < 2 || tFinal > 100){
        return 'ERRO: As tabuadas devem estar entre 2 e 100.'
    }else if(cInicial < 1 || cFinal > 50){
        return 'ERRO: O contador deve estar entre 1 e 50.'
    }else if(cInicial > cFinal || tInicial > tFinal){
        return 'ERRO: O valor inicial não pode ser maior que o valor final.'
    }
    return true
}

module.exports = {
    validarEntrada
}