import { useState } from "react";
import CopyButton from "./copyButton"
import Input from "./ui/input"
import { EyeIcon, EyeSlashIcon } from "./ui/icons";

interface PasswordInputProps {
  password: string;
}

function PasswordInput({ password }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          value={password}
          readOnly
          className="h-8 pr-20"
          placeholder="Tu contraseña generada"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="p-2 text-pelorous-500"
            title={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          >
            {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
          </button>
        </div>
      </div>
      <CopyButton textToCopy={password} />
    </div>
  )
}

export default PasswordInput