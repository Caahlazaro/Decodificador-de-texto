let textoDigitado = document.querySelector(".conteudo__texto");

let campoVazio = document.querySelector('.resultado__vazio');
let campoCheio = document.querySelector('.resultado__completo');

let textoTransformado = '';

function transformarTexto(funcao, texto) {
    if (funcao === 'criptografar') {
        textoTransformado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    } else {
        textoTransformado = texto.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    }
    return textoTransformado;
}

function exibeTexto(classe, texto) {
    let campo = document.querySelector(classe);
    campo.value = texto;
}

function ocultarElemento(elemento) {
    elemento.style.display = 'none';
}

function exibirElemento(elemento) {
    elemento.style.display = 'flex';
}

function limpaConteudo(classe) {
    let campo = document.querySelector(classe);
    campo.value = '';
}

function criptografar() {
    if (textoDigitado.value === "") {
        alert('Conteúdo não encontrado! Digite um conteúdo para seguir.');
    } else {
        ocultarElemento(campoVazio);
        exibirElemento(campoCheio);
        exibeTexto('.resultado__completo textarea', transformarTexto('criptografar', textoDigitado.value));
        limpaConteudo('.conteudo__texto');
    }
}

function descriptografar() {
    if (textoDigitado.value === "") {
        alert('Conteúdo não encontrado! Digite um conteúdo para seguir.');
    } else {
        ocultarElemento(campoVazio);
        exibirElemento(campoCheio);
        exibeTexto('.resultado__completo textarea', transformarTexto('descriptografar', textoDigitado.value));
        limpaConteudo('.conteudo__texto');
    }
}

function copiarTexto() {
    let texto = document.querySelector('.resultado__completo textarea').value;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado com sucesso!");

        ocultarElemento(campoCheio);
        exibirElemento(campoVazio);
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
    });
}

function limparTexto() {
    document.querySelector('.conteudo__texto').value = '';
    document.querySelector('.resultado__completo textarea').value = '';
}
