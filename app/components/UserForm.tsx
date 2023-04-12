'use client'
import {FC, ChangeEvent, useState} from 'react'
import {useForm, useFormState} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {z, string} from 'zod'
import { useMutation } from '@apollo/client'
import {useAuth, useUser} from '@clerk/nextjs'
import {InputForm} from './InputForm'
import {TextArea} from './textArea'
import { AvatarPreview } from './AvatarPreview'
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'

interface UserFormInputs {
    username: string
    email: string 
    bio: string
    avatarURL: string
}

const schema = z.object({
    username: string().min(2,{message: 'username is required'}),
    email: string().email(),
    bio: string().optional(),
    avatarURL: string().optional()
})

export const UserForm: FC = () => {
const { isLoaded, userId, sessionId, getToken } = useAuth()
const {user} = useUser()
const {handleSubmit, register, formState} = useForm<UserFormInputs>({
    defaultValues: {
        username: '',
        email: user?.email,
        bio: '',
        avatarURL: '',
    }
})

const {errors} = formState

const onSubmit = async (data: UserFormInputs) => {
    console.log(data)
}

    return (
        <div className='flex flex-col justify-center items-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full rounded-lg border-solid border-2 border-body-text-light shadow-md p-6 max-w-lg'>
            <AvatarPreview alt="Uploaded Avatar" />
             <InputForm label="Avatar" name="avatar" placeholder='avatar upload' type='file' register={register}/>
            <InputForm label="Username" name="username" placeholder='username' register={register}/>
            <TextArea label="Bio" name="bio" placeholder='Write a little about yourself' register={register}/>
            <div className='flex justify-end p-2'>
                <button className=' text-headline-text hover:text-highlight'>Next <span><ArrowSmallRightIcon className=" inline h-4 w-4"/></span></button>
            </div>
        </form>
        </div>
    )
}