const Input = ({ type = "text", value, readOnly, className, placeholder, onChange, min, max, id }: {
  type?: string
  value?: string | number
  readOnly?: boolean
  className?: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  min?: string
  max?: string
  id?: string
}) => (
  <input
    type={type}
    value={value}
    readOnly={readOnly}
    className={`flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus:ring-pelorous-500 focus:border-pelorous-500 tracking-wide sm:text-sm border-pelorous-500 $${className ?? ''}`}
    placeholder={placeholder}
    onChange={onChange}
    min={min}
    max={max}
    id={id}
  />
)

export default Input