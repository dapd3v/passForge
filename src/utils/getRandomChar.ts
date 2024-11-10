// Función para obtener un carácter aleatorio de una cadena
export default function getRandomChar(chars: string): string {
  const randomIndex = crypto.getRandomValues(new Uint32Array(1))[0] % chars.length;
  return chars[randomIndex];
}
