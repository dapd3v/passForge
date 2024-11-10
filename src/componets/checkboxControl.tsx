import Toggle from './ui/toggle'
import Label from './ui/label'

export interface CheckboxOption {
    id: string
    label: string
    checked: boolean
    onChange: (value: boolean) => void
}

const CheckboxControl = ({ option }: { option: CheckboxOption }) => (
    <div className="flex items-center space-x-2 align-middle">
      <Toggle
        id={option.id}
        checked={option.checked}
        onCheckedChange={option.onChange}
      />
      <Label className='text-xs text-gray-500' htmlFor={option.id}>{option.label}</Label>
    </div>
  )

export default CheckboxControl
