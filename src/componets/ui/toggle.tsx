
const Toggle = ({ id, checked, onCheckedChange }: {
  id: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}) => (
  <button
    id={id}
    role="switch"
    aria-checked={checked}
    onClick={() => onCheckedChange(!checked)}
    className={`
      relative inline-flex h-4 w-8 items-center rounded-full
      ${checked ? 'bg-pelorous-600' : 'bg-gray-200'}
      transition-colors focus:outline-none focus-visible:ring-2 
      focus-visible:ring-pelorous-600 focus-visible:ring-offset-2
    `}
  >
    <span className="sr-only">Alternar</span>
    <span
      className={`
        inline-block h-3 w-3 transform rounded-full bg-white 
        transition-transform duration-200 ease-in-out
        ${checked ? 'translate-x-4' : 'translate-x-1'}
      `}
    />
  </button>
)

export default Toggle
