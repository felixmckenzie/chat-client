'use client'
import {FC, useState} from 'react'
import {useAuth, useUser} from '@clerk/nextjs'
import {InputForm} from './InputForm'
import {TextArea} from './textArea'
import { AvatarPreview } from './AvatarPreview'
import { ArrowSmallLeftIcon, ArrowSmallRightIcon } from '@heroicons/react/24/solid'
export const UserForm: FC = () => {
const { isLoaded, userId, sessionId, getToken } = useAuth()
const {user} = useUser()

const handleSubmit = (event) => {
    event.preventDefault()

}

    return (
        <div className='flex flex-col justify-center items-center'>
        <form onSubmit={handleSubmit} className='w-full rounded-lg border-solid border-2 border-body-text-light shadow-md p-6 max-w-lg'>
            <AvatarPreview alt="Uploaded Avatar" />
             <InputForm label="Avatar" name="Profile" placeholder='profile' type='file'/>
            <InputForm label="Username" name="username" placeholder='username'/>
            <TextArea label="Bio" name="bio" placeholder='Write a little about yourself'/>
            <div className='flex justify-end p-2'>
                <button className=' text-headline-text hover:text-highlight'>Next <span><ArrowSmallRightIcon className=" inline h-4 w-4"/></span></button>
            </div>
        </form>
        </div>
    )
}