/*Creando mis constantes/variables */
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    /*
    Llaves de encriptación
    */
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "ines"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            /*Reemplazo */
            stringEncriptada = stringEncriptada.replaceAll(
                matrizCodigo[i][0],
                matrizCodigo[i][1]
            );
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "ines"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            /*Reemplazo */
            stringDesencriptada = stringDesencriptada.replaceAll(
                matrizCodigo[i][1],
                matrizCodigo[i][0]
            );
        }
    }
    return stringDesencriptada;
}

function copiarTexto() {
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
