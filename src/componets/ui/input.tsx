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
    className={`focus:ring-pelorous-500 focus:border-pelorous-500 block w-full px-10 tracking-wide sm:text-sm border-gray-300 rounded-md ${className}`}
    placeholder={placeholder}
    onChange={onChange}
    min={min}
    max={max}
    id={id}
  />
)

export default Input