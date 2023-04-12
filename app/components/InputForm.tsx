
type InputProps = {
    label: string
    name: string
    placeholder: string
    onChange?: () => void
    disabled?: boolean
    className?: string
    children?: React.ReactNode
    type?: 'text' | 'number' | 'password' | 'file'
}
export const InputForm = ({label, name, placeholder, disabled=false, type='text', onChange}: InputProps) => {

    return (
    <div className="flex flex-auto mt-6 pt-4 w-full relative">
         <label className="absolute top-2 left-2 inline-block px-1 text-xs font-medium text-headline-text" htmlFor={name}>
            {label}
        </label>
        <div className="flex w-full mt-2 relative shadow-md">
        <input className="w-full p-2 focus:ring-1 rounded sm:text-sm placeholder-body-text-light bg-bg-light" type={type} name={name} placeholder={placeholder} onChange={onChange} />
        </div>
    </div>
    )
}