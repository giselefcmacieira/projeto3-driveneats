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
    console.log(pratoSelecionadoAnteriormente)
    if (pratoSelecionadoAnteriormente !== null){
        pratoSelecionadoAnteriormente.classList.remove('selecionado');
    }
    //encontrar o novo prato selecionado
    const pratoSelecionado = document.querySelector(seletor) //seletor sendo .prato1 ou .prato2 ...
    pratoSelecionado.classList.add('selecionado');
}
