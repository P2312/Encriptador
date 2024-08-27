const entradaTexto = document.querySelector(".text-area");
const salidaTexto = document.querySelector(".mensaje");
const seccionTexto1 = document.querySelector(".text1");
const seccionTexto2 = document.querySelector(".text2");
const btnCopiar = document.querySelector(".btn-copiar");

const reemplazos = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};


function validar(textoValidar) {
    return !/[ÁÉÍÓÚáéíóúÑ]/.test(textoValidar); // Permite mayúsculas y minúsculas
}


function encriptar() {
    const texto = entradaTexto.value.toLowerCase(); // Convertir todo a minúsculas
    if (!validar(texto)) {
        alert("Texto inválido, verifique su texto.");
        return;
    }
    const salida = texto.split('').map(letra => reemplazos[letra] || letra).join('');
    entradaTexto.value = "";
    salidaTexto.value = salida;
    ocultar();
}


function desencriptar() {
    let texto = entradaTexto.value.toLowerCase(); // Convertir todo a minúsculas
    if (!validar(texto)) {
        alert("Texto inválido, verifique su texto.");
        return;
    }
    for (const [letra, codificacion] of Object.entries(reemplazos)) {
        texto = texto.split(codificacion).join(letra);
    }
    entradaTexto.value = "";
    salidaTexto.value = texto;
    ocultar();
}


function ocultar() {
    salidaTexto.style.background = "white";
    seccionTexto1.style.display = "none";
    seccionTexto2.style.display = "none";
    btnCopiar.style.display = "block";
}


function mostrar() {
    salidaTexto.style.background = "#FFF no-repeat center url(imagenes/notexto.png)";
    seccionTexto1.style.display = "block";
    seccionTexto2.style.display = "block";
    btnCopiar.style.display = "none";
}

// Función para copiar texto
function copiar() {
    navigator.clipboard.writeText(salidaTexto.value);
    const anuncio = document.querySelector(".anuncio");
    anuncio.textContent = "Texto copiado";
    anuncio.style.display = "block";
    setTimeout(() => {
        anuncio.style.display = "none";
        salidaTexto.value = "";
        mostrar();
    }, 950);
}
