import getRandomChar from "./getRandomChar";
import shuffle from "./shuffle";


export interface PasswordOptions {
    length: number;
    includeUppercase: boolean;
    includeLowercase: boolean;
    includeNumbers: boolean;
    includeSymbols: boolean;
  }
  // Mover la función a un archivo separado
export function generatePassword(options: PasswordOptions): string {
  const chars = {
    uppercase: 'ABCDEFGHJKLMNPQRSTUVWXYZ',
    lowercase: 'abcdefghijkmnpqrstuvwxyz',
    numbers: '23456789',
    symbols: '!@#$%^&*'  
  };

  let password = '';
  let availableChars = '';
  
  if (options.includeUppercase) {
    password += getRandomChar(chars.uppercase);
    availableChars += chars.uppercase;
  }
  if (options.includeLowercase) {
    password += getRandomChar(chars.lowercase);
    availableChars += chars.lowercase;
  }
  if (options.includeNumbers) {
    password += getRandomChar(chars.numbers);
    availableChars += chars.numbers;
  }
  if (options.includeSymbols) {
    password += getRandomChar(chars.symbols);
    availableChars += chars.symbols;
  }
  
  if (availableChars === '') {
    throw new Error('Selecciona al menos un tipo de carácter');
  }
  
  while (password.length < options.length) {
    const nextChar = getRandomChar(availableChars);
    if (nextChar !== password[password.length - 1]) {
      password += nextChar;
    }
  }
  
  return shuffle(password);
}
