//Created by chatGPT
export function capitalize(texto: string): string {
    const palabras = texto.split(' ');
    const palabrasCapitalizadas = palabras.map(palabra => {
        if (palabra.length > 0) {
            return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        } else {
            return '';
        }
    });

    return palabrasCapitalizadas.join(' ');
}