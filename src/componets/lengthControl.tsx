import Input from "./ui/input"
import Label from "./ui/label"

const LengthControl = ({ length, onChange }: { length: number, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => (
    <div className="space-y-2">
      <Label htmlFor="length">Longitud: {length}</Label>
      <Input
        id="length"
        type="range"
        className="accent-pelorous-500"
        min="8"
        max="30"
        value={length}
        onChange={onChange}
      />
    </div>
  )
  
export default LengthControl