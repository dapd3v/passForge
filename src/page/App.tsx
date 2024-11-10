import { useState } from 'react'
import Button from '../componets/ui/button'
import CheckboxControl, { CheckboxOption } from '../componets/checkboxControl'
import LengthControl from '../componets/lengthControl'
import PasswordInput from '../componets/passwordInput'
import { generatePassword, PasswordOptions } from '../utils/generatePassword'
import { GitIcon } from '../componets/ui/icons'

export default function PasswordGenerator() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)

  const handleGeneratePassword = () => {
    const options: PasswordOptions = {
      length,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols
    };
  
    try {
      const newPassword = generatePassword(options);
      setPassword(newPassword);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Error al generar la contraseña');
    }
  };

  const checkboxOptions: CheckboxOption[] = [
    { id: 'uppercase', label: 'A-Z', checked: includeUppercase, onChange: setIncludeUppercase },
    { id: 'lowercase', label: 'a-z', checked: includeLowercase, onChange: setIncludeLowercase },
    { id: 'numbers', label: '0-9', checked: includeNumbers, onChange: setIncludeNumbers },
    { id: 'symbols', label: '!@#$', checked: includeSymbols, onChange: setIncludeSymbols }
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white z-20">
        <div className="max-w-7xl mx-auto lg:divide-y lg:divide-gray-200 md:px-2 lg:px-8 border-b border-gray-200 py-6 flex items-center justify-between">
          <div className="relative flex justify-between w-full flex-col md:flex-row">
            <div className="flex-shrink-0 flex items-center mb-4 md:mb-0 px-2 md:px-0">
              <div className="block h-8 w-auto" aria-label='logo'>
                <img 
                  src="/logo.png" 
                  alt="Logo"
                />
              </div>
              <div className="text-lg font-medium leading-5 ml-2">
                PASS FORGE
                <div className="text-sm font-light leading-3 text-gray-600">
                  for access to your accounts
                </div>
              </div>
            </div>
            <div className="relative lg:z-10 lg:ml-4 flex items-center md:px-0 px-2">
              <a 
                href="" 
                className="cursor-pointer text-gray-700 hover:text-black hidden md:inline-block"
              >
                <GitIcon className='w-6 h-6' />
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className='md:mt-32 mt-52 relative'>
        <div className='max-w-sm mx-auto px-2 sm:px-4 lg:px-8'>
          <h1 className="text-lg font-medium leading-5 ml-2 mb-8 text-center">Generador de Contraseñas</h1>
          <div>
            <div className="space-y-4">
              <PasswordInput password={password} />
              <LengthControl
                length={length}
                onChange={(e) => setLength(Number(e.target.value))}
              />
              <div className="flex justify-between items-center">
                {checkboxOptions.map(option => (
                  <CheckboxControl key={option.id} option={option} />
                ))}
              </div>
              <Button onClick={handleGeneratePassword} size='icon'>
                Generar
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}