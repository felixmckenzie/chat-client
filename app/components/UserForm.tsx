'use client'
import { FC, ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { setAuthToken } from '@/lib/apollo'
import Loader from './Loader'
import { zodResolver } from '@hookform/resolvers/zod'
import { z, string, boolean } from 'zod'
import { useMutation } from '@apollo/client'
import { getClient } from '@/lib/apollo'
import { useUser } from '@clerk/nextjs'
import { Input } from './Input'
import { FileInput } from './FileInput'
import { TextArea } from './textArea'
import { AvatarPreview } from './AvatarPreview'
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'
import queries from '@/queries'

interface UserFormInputs {
    clerkId: string
    username: string
    email: string
    about: string
    avatar: string
    isActive: boolean
    role: string
    file: File | null
}

// const schema = z.object({
//     username: string().min(2,{message: 'username is required'}),
//     email: string().email(),
//     about: string().optional(),
//     avatar: string().optional(),
//     isActive: boolean(),
//     role: string()
// })

export const UserForm: FC = ({ authToken }) => {
    setAuthToken(authToken)
    const { user } = useUser()
    const client = getClient()
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [fileInputKey, setFileInputKey] = useState(0)

    const { handleSubmit, register, control, formState, setValue } = useForm<UserFormInputs>({
        defaultValues: {
            clerkId: '',
            username: '',
            email: '',
            about: '',
            avatar: '',
            isActive: true,
            role: 'REGULAR',
            file: null,
        },
        // resolver: zodResolver(schema)
    })

    const [createUser, create] = useMutation(queries.CREATE_USER, { client })

    const { errors } = formState

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>, field: { onChange: (value: FileList | null) => void }) => {
        const files = e.target.files

        if (files && files[0]) {
            const file = files[0]
            field.onChange(file)
            const reader = new FileReader()

            reader.onloadend = () => {
                setPreviewUrl(reader.result as string)
            }
            reader.readAsDataURL(file)
        } else {
            setPreviewUrl(null)
        }
    }

    const removeFile = () => {
        setPreviewUrl(null)
        setValue('file', null)
        setFileInputKey((prevKey) => prevKey + 1)
    }

    const uploadFile = async (file: File | null) => {
        const fileFormData = new FormData()
        if (file) {
            fileFormData.append('file', file)
            fileFormData.append('upload_preset', 'chat-uploads')
        }
        const fileData = await fetch('https://api.cloudinary.com/v1_1/dpjuz8jd4/image/upload', {
            method: 'POST',
            body: fileFormData,
        }).then((r) => r.json())

        return fileData?.secure_url
    }

    const onSubmit = async (data: UserFormInputs) => {
        setLoading(true)
        const file = data?.file
        const cloudinaryImageURL = await uploadFile(file)

        const input: UserFormInputs = {
            isActive: data.isActive,
            role: data.role,
            username: data.username,
            avatar: cloudinaryImageURL,
            clerkId: user?.id,
            email: user?.primaryEmailAddress?.emailAddress,
        }
        try {
            const user = await createUser({
                variables: {
                    input: input,
                },
                optimisticResponse: {
                    createUser: {
                        id: 'temp-id',
                        __typename: 'User',
                        ...input,
                    },
                },
            })
            router.push('/home')
        } catch (error) {
            console.log(error)
        }
    }

    if (loading) {
        return <Loader />
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full rounded-lg border-solid border-2 border-body-text-light shadow-md p-6 max-w-lg">
                <AvatarPreview alt="Uploaded Avatar" avatarUrl={previewUrl} />
                <Controller
                    name="file"
                    control={control}
                    render={({ field }) => (
                        <>
                            <FileInput
                                key={fileInputKey}
                                name={field.name}
                                fileRef={field.ref}
                                field={field}
                                label="avatarUpload"
                                placeholder="avatar-upload"
                                handleFileChange={handleFileChange}
                            />
                            {previewUrl && (
                                <button type="button" onClick={removeFile} className="text-headline-text hover:text-highlight">
                                    Remove File
                                </button>
                            )}
                        </>
                    )}
                />
                <Input label="Username" name="username" placeholder="username" register={register} />
                <TextArea label="Bio" name="about" placeholder="Write a little about yourself" register={register} />
                <div className="flex justify-end p-2">
                    <button type="submit" className=" text-headline-text hover:text-highlight">
                        Next{' '}
                        <span>
                            <ArrowSmallRightIcon className=" inline h-4 w-4" />
                        </span>
                    </button>
                </div>
            </form>
        </div>
    )
}
