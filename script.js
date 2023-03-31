function checkPrato(seletor1){
    const checkAnterior = document.querySelector('.prato' + '.checkon');
    if (checkAnterior !== null){
        checkAnterior.classList.add('escondido');
        checkAnterior.classList.remove('checkon');
    }
    const check = document.querySelector('.check' + seletor1);
    check.classList.remove('escondido');
    check.classList.add('checkon');
}
function selecionarPrato(seletor){
    checkPrato(seletor);
    const pratoSelecionadoAnteriormente = document.querySelector('.prato' + '.selecionado');
    if (pratoSelecionadoAnteriormente !== null){
        pratoSelecionadoAnteriormente.classList.remove('selecionado');
    }
    //encontrar o novo prato selecionado
    const pratoSelecionado = document.querySelector(seletor); //seletor sendo .prato1 ou .prato2 ...
    pratoSelecionado.classList.add('selecionado');
}
function checkBebida(seletor1){
    const checkAnterior = document.querySelector('.bebida' + '.checkon');
    if (checkAnterior !== null){
        checkAnterior.classList.add('escondido');
        checkAnterior.classList.remove('checkon');
    }
    const check = document.querySelector('.check' + seletor1);
    check.classList.remove('escondido');
    check.classList.add('checkon');
}
function selecionarBebida(seletor){
    checkBebida(seletor);
    const bebidaSelecionadoAnteriormente = document.querySelector('.bebida' + '.selecionado');
    if (bebidaSelecionadoAnteriormente !== null){
        bebidaSelecionadoAnteriormente.classList.remove('selecionado');
    }
    const bebidaSelecionado = document.querySelector(seletor);
    bebidaSelecionado.classList.add('selecionado');
}
function checkSobremesa(seletor1){
    const checkAnterior = document.querySelector('.sobremesa' + '.checkon');
    if (checkAnterior !== null){
        checkAnterior.classList.add('escondido');
        checkAnterior.classList.remove('checkon');
    }
    const check = document.querySelector('.check' + seletor1);
    check.classList.remove('escondido');
    check.classList.add('checkon');
}
function selecionarSobremesa(seletor){
    checkSobremesa(seletor);
    const sobremesaSelecionadoAnteriormente = document.querySelector('.sobremesa' + '.selecionado');
    if (sobremesaSelecionadoAnteriormente !== null){
        sobremesaSelecionadoAnteriormente.classList.remove('selecionado');
    }
    const sobremesaSelecionado = document.querySelector(seletor);
    sobremesaSelecionado.classList.add('selecionado');
}