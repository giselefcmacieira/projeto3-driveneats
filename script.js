let botao = document.querySelector('.botao-desabilitado');
botao.disabled = true;
let infPrato = '';
let infBebida = '';
let infSobremesa = '';
let nomePrato = '';
let nomeBebida = '';
let nomeSobremesa = '';
let precoPrato = '';
let precoBebida = '';
let precoSobremesa = '';
console.log(botao);

function fazerPedido(){
    if (infPrato !== '' & infBebida !== '' & infSobremesa !== ''){
                botao.disabled = false;
                const texto = document.querySelector('.botao-desabilitado .texto-fechar-pedido')
                texto.innerHTML = "<a href='' class='link'>Fechar pedido</a>";            
                botao.classList.remove('botao-desabilitado');
                botao.classList.add('botao-habilitado');
                console.log(texto);
    }
}

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
    infPrato = pratoSelecionado.innerHTML;
    const nome = document.querySelector(seletor + '.nome');
    nomePrato = nome.innerHTML;
    console.log(nomePrato);
    const preco = document.querySelector(seletor + '.preco');
    const precoPratoBruto = preco.innerHTML;
    const precoPratoBruto1 = precoPratoBruto.replace('R$','');
    precoPrato = precoPratoBruto1.replace(',','.');
    console.log(precoPrato);
    fazerPedido();
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
    infBebida = bebidaSelecionado.innerHTML;
    const nome = document.querySelector(seletor + '.nome');
    nomeBebida = nome.innerHTML;
    console.log(nomeBebida);
    const preco = document.querySelector(seletor + '.preco');
    const precoBebidaBruto = preco.innerHTML;
    const precoBebidaBruto1 = precoBebidaBruto.replace('R$','');
    precoBebida = precoBebidaBruto1.replace(',','.');
    console.log(precoBebida);
    fazerPedido();
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
    infSobremesa = sobremesaSelecionado.innerHTML;
    const nome = document.querySelector(seletor + '.nome');
    nomeSobremesa = nome.innerHTML;
    console.log(nomeSobremesa);
    const preco = document.querySelector(seletor + '.preco');
    const precoSobremesaBruto = preco.innerHTML;
    const precoSobremesaBruto1 = precoSobremesaBruto.replace('R$','');
    precoSobremesa = precoSobremesaBruto1.replace(',','.');
    console.log(precoSobremesa);
    fazerPedido();
}

function linkwpp(){
    const precoTotal1 = Number(precoPrato)+Number(precoBebida)+Number(precoSobremesa);
    const precoTotal = precoTotal1.toFixed(2);
    const total = precoTotal.replace('.',',');
    const link1 = "https://wa.me/5531993265917?text=";
    const link2 = encodeURIComponent("Olá, gostaria de fazer o pedido:\n")
    const link3 = encodeURIComponent('- Prato: ' + nomePrato + '\n');
    const link4 = encodeURIComponent('- Bebida: ' + nomeBebida + '\n');
    const link5 = encodeURIComponent('- Sobremesa: ' + nomeSobremesa + '\n');
    const link6 = encodeURIComponent('Total: R$ ' + total);
    const link = link1 + link2 + link3 + link4 + link5 + link6;
    const a = document.querySelector('.link');
    a.href = link;
    console.log(a);
}