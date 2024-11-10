
const Label = ({ htmlFor, children, className }: {
  htmlFor?: string
  className?: string
  children: React.ReactNode
}) => (
  <label
    htmlFor={htmlFor}
    className={`text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
  >
    {children}
  </label>
)

export default Label