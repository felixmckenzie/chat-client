
type InputProps = {
    label: string
    name: string
    placeholder: string
    onChange?: () => void
}

export const TextArea = ({label, name, placeholder, onChange}: InputProps) => {

    return (
        <div className="flex flex-auto mt-6 pt-4 shadow-md rounded relative">
             <label className="absolute top-2 left-2 inline-block px-1 text-xs font-medium text-headline-text" htmlFor={name}>
            {label}
        </label>
        <div className="pt-2">
        <textarea className="rounded shadow-md text-sm p-2" name={name} placeholder={placeholder} id="" cols={40} rows={3}></textarea>
        </div>
        </div>
    )
}