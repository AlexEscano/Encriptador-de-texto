
var texto = document.querySelector('.cajatexto');
var botonencriptar = document.querySelector('.btn-encriptar');
var botondesencriptar = document.querySelector('.btn-desencriptar');
let munieco = document.getElementById("munieco")
let ningunTexto = document.getElementById("parra")


botonencriptar.onclick = function encriptar(){
    
    munieco.style.display = 'none';
    ningunTexto.style.display = 'none';
    // texto.value = texto.value.toLowerCase;
    var cifrado = texto.value.replace(/e/gi,'enter' ).replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    document.querySelector('.texto-resultado').value = cifrado
    texto.value = ''
}




botondesencriptar.onclick = function desencriptar(){
    munieco.style.display = 'none';
    ningunTexto.style.display = 'none';
    var cifrado = texto.value.replace(/enter/gi,'e' ).replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    document.querySelector('.texto-resultado').value = cifrado
    texto.value = ''
}
    

