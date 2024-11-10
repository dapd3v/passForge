// Función para mezclar una cadena
export default function shuffle(str: string): string {
  const array = str.split('');
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] % (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join('');
}