import { UseFormRegister } from 'react-hook-form'

type InputProps = {
    label: string
    name: string
    placeholder: string
    fileRef: any
    handleFileChange: any
    field: any
}

export const FileInput = ({ label, name, placeholder, handleFileChange, fileRef, field }: InputProps): JSX.Element => {
    return (
        <div className="flex flex-auto mt-6 pt-4 w-full relative">
            <label className="absolute top-2 left-2 inline-block px-1 text-xs font-medium text-headline-text" htmlFor={name}>
                {label}
            </label>
            <div className="flex w-full mt-2 relative shadow-md">
                <input
                    className="w-full p-2 focus:ring-1 rounded sm:text-sm placeholder-body-text-light bg-bg-light"
                    ref={fileRef}
                    name={name}
                    type="file"
                    placeholder={placeholder}
                    onChange={(e) => handleFileChange(e, field)}
                />
            </div>
        </div>
    )
}
