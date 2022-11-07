// function to ceaser cipher a string
export function caesarCipher(text: string, shift: number): string {
    let cipheredText = "";
    for (let i = 0; i < text.length; i++) {
        let c = text.charCodeAt(i);
        if (c >= 65 && c <= 90) {
            cipheredText += String.fromCharCode((c - 65 + shift) % 26 + 65);
        } else if (c >= 97 && c <= 122) {
            cipheredText += String.fromCharCode((c - 97 + shift) % 26 + 97);
        } else {
            cipheredText += text.charAt(i);
        }
    }
    return cipheredText;
}

// function to ceaser decipher a string
export function caesarDecipher(text: string, shift: number): string {
    let decipheredText = "";
    for (let i = 0; i < text.length; i++) {
        let c = text.charCodeAt(i);
        if (c >= 65 && c <= 90) {
            decipheredText += String.fromCharCode((c - 65 - shift + 26) % 26 + 65);
        } else if (c >= 97 && c <= 122) {
            decipheredText += String.fromCharCode((c - 97 - shift + 26) % 26 + 97);
        } else {
            decipheredText += text.charAt(i);
        }
    }
    return decipheredText;
}
