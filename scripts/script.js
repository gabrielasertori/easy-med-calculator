'use strict'
//Quantidade de dias que os remédios duram
function userInput() {
    let dias1 = document.getElementById('inputQuantidadeDia');
    let dias2 = document.getElementById('inputQuantidadeCaixa');
    let resultado = parseInt(dias2.value/dias1.value);
    let modulo = dias2.value%dias1.value;

    if(dias1.value == "" || dias2.value == "") {
        resultado = "0";
        modulo = "0";
    }
    return `${resultado} dias e sobra ${modulo} comprimidos`;
}

//Atualiza tela com o valor
function updateOutput(value) {
    const output = document.getElementById('outputQuantidadeDias');
    output.innerText = value;
}

//Atualiza a cada tecla digitada
window.inputMonitor = (value) => updateOutput(userInput(value));



function proximaCompra() {
    let dias1 = document.getElementById('inputQuantidadeDia');
    let dias2 = document.getElementById('inputQuantidadeCaixa');
    let compra = document.getElementById('inputQuantidadeMes'); 
    
    let resultado = dias2.value/dias1.value; 
    let modulo = dias2.value%dias1.value;
    let inteiroX = 1;
    
    let resultadoCompra = Math.ceil(compra.value/resultado);
    let conta1 = compra.value*dias1.value;
    
    while (inteiroX*dias2.value <= conta1) {
        inteiroX++
    }
    let conta2 = dias2.value*inteiroX;
    let conta3 = conta2-conta1;
    if(conta3 == dias2.value) {
        return `${resultadoCompra} caixas e não sobrará comprimidos`;
    } else {
        return `${resultadoCompra} caixas e sobrará ${conta3} comprimidos`;
    }
      
}

//Atualiza tela com o valor
function updateCompra(value) {
    const output = document.getElementById('outputQuantidadeCaixa');
    output.innerText = value;
}

//Atualiza a cada tecla digitada
window.compraMonitor = (value) => updateCompra(proximaCompra(value));

//Rever conta do quanto sobra de comprimidos...