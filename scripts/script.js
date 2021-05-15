'use strict'

//Retorna a quantidade de dias que os remédios duram
function medDays() {
    let CPporDia = document.getElementById('inputCPporDia');
    let CPcaixa = document.getElementById('input1Caixa');
    let compra = document.getElementById('inputDiasComprar');

    // resultado mostra quantos dias inteiros duram comprimidos contidos em uma caixa
    // modulo mostra quantos comprimidos vão sobrar
    let resultado = parseInt(CPcaixa.value/CPporDia.value);
    let modulo = CPcaixa.value%CPporDia.value;

    // Só imprime se campos preenchidos
    let html = "";
    switch(true) {
        case (CPporDia.value == "" || CPcaixa.value == ""):
            html = "";
            break;
        case (modulo == 0 && resultado == 1):
            html = `${resultado} dia e não sobra comprimidos`;
            break;
        case (modulo > 0 && resultado == 1):
            html = `${resultado} dia e sobra ${modulo} comprimidos`;
            break;
        case (modulo == 0):
            html = html = `${resultado} dias e não sobra comprimidos`;
            break;
        default:
            html = `${resultado} dias e sobra ${modulo} comprimidos`;
            break;
    }

    return html;
}


// Função retorna quantas caixas precisa comprar pra durar x dias
function proximaCompra() {
    let CPporDia = document.getElementById('inputCPporDia');
    let CPcaixa = document.getElementById('input1Caixa');
    let compra = document.getElementById('inputDiasComprar'); 
    
    // Quantos dias dura uma caixa
    let resultado = CPcaixa.value/CPporDia.value; //ex.: 30cps/2cpsDia = 15 dias
    
    // Quantidade de caixas inteiras
    let resultadoCompra = Math.ceil(compra.value/resultado); //ex.: 30dias / 15 = 2cxs

    // Total de comprimidos consumidos
    let consumo = compra.value*CPporDia.value; //ex.: 30*2cpsDia = 60 cps consumidos em 30 dias
    
    // Total de comprimidos comprados
    let comprados = CPcaixa.value*resultadoCompra; //ex.: 30cps*2cxs = 60cps comprados em 30 dias

    let sobra = comprados-consumo;

    let html = "";

    switch(true) {
        case (CPporDia.value == "" || CPcaixa.value == ""):
            html = "";
            break;
        case (sobra == 0 && resultadoCompra == 1):
            html = `${resultadoCompra} caixa e não sobrará comprimidos.`;
            break;
        case (sobra > 0 && resultadoCompra == 1):
            html = `${resultadoCompra} caixa e sobrará ${sobra} comprimidos.`;
            break;
        case (sobra == 0):
            html = `${resultadoCompra} caixas e não sobrará comprimidos.`;
            break;
        case (sobra > 15):
            html = `${resultadoCompra} caixas e sobrará ${sobra} comprimidos.\n Parece que sobrarão muitos comprimidos, tente alterar o número de dias para próxima compra.`;
            break;
        default:
            html = `${resultadoCompra} caixas e sobrará ${sobra} comprimidos.`;
    }

    /* if(CPporDia.value == "" || CPcaixa.value == "") {
        html = "";
    } */

    return html;
}

//Atualiza tela com o valor
function updateOutput(value1, value2) {
    const output1 = document.getElementById('output1CaixaDias');
    const output2 = document.getElementById('outputQuantidadeCaixa');
    output1.innerText = value1;
    output2.innerText = value2;
}

//Atualiza a janela
window.inputMonitor = (value1, value2) => updateOutput(medDays(value1), proximaCompra(value2));