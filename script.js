function criptografar() {
    // Captura o valor do texto de entrada e da chave
    let texto = document.getElementById('input-text').value.toUpperCase();
    let chave = parseInt(document.getElementById('key').value);
    
    // Verifica se o texto inserido contém apenas letras (A-Z) e se está dentro do limite
    if (texto.match(/^[A-Z]+$/i) && texto.length > 0 && texto.length <= 30) {
        // Criptografar o texto completo usando a Cifra de César
        let textoCifrado = cifraCesar(texto, chave);
        document.getElementById('encrypted-text').textContent = textoCifrado;
    } else {
        alert("Por favor, insira até 30 letras (A-Z) válidas.");
    }
}

function cifraCesar(texto, chave) {
    let textoCifrado = '';
    
    // Itera por cada caractere do texto e aplica a cifra de César
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        let codigoASCII = letra.charCodeAt(0);
        
        // Verifica se o caractere é uma letra maiúscula
        if (codigoASCII >= 65 && codigoASCII <= 90) {
            textoCifrado += String.fromCharCode((codigoASCII - 65 + chave) % 26 + 65);
        } else {
            textoCifrado += letra;
        }
    }
    return textoCifrado;
}
