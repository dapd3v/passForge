
const Button = ({ onClick, size, variant, children }: {
  onClick?: () => void
  size?: "icon"
  variant?: "outline"
  children: React.ReactNode
}) => (
  <button
    onClick={onClick}
    className={`focus:ring-pelorous-500 focus:border-pelorous-500 block w-full px-10 tracking-wide sm:text-sm border-gray-300 rounded-md 
        ${variant === "outline" ? "border border-gray-300" : "bg-pelorous-500 text-white"}
        ${size === "icon" ? "p-2" : ""}`}
  >
    {children}
  </button>
)

export default Button