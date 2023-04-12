
import { UseFormRegister } from 'react-hook-form'

type InputProps = {
    label: string
    name: string
    placeholder: string
    register: UseFormRegister<any>
}

export const TextArea = ({label, name, placeholder, register}: InputProps) => {

    return (
        <div className="flex flex-auto mt-6 pt-4 shadow-md rounded relative">
             <label className="absolute top-2 left-2 inline-block px-1 text-xs font-medium text-headline-text" htmlFor={name}>
            {label}
        </label>
        <div className="pt-2">
        <textarea className="rounded shadow-md text-sm p-2" {...register(name)} placeholder={placeholder} id="" cols={40} rows={3}></textarea>
        </div>
        </div>
    )
}