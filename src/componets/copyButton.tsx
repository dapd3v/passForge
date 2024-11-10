import { useState } from 'react';
import { Check, Copy } from './ui/icons';

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
}

export default function CopyButton({ textToCopy, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  const baseClasses = "p-2 rounded-md transition-all duration-200";
  const disabledClasses = "disabled:opacity-50 disabled:cursor-not-allowed";
  const colorClasses = copied ? "text-green-500" : "text-pelorous-500";

  return (
    <button
      onClick={handleCopy}
      className={`${baseClasses} ${disabledClasses} ${colorClasses} ${className}`}
      disabled={!textToCopy}
      title="Copiar al portapapeles"
    >
      {copied ? (
        <Check className='h-4 w-4' />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </button>
  );
}