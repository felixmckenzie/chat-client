'use client'
import { FC } from 'react'
import { useMutation } from '@apollo/client'
import { getClient } from '@/lib/apollo'
import { useForm, Controller } from 'react-hook-form'
import { useUser, useAuth } from '@clerk/nextjs'
import { Input } from '../Input'
import queries from '@/queries'

export const AddFriendForm: FC = () => {
    const { user } = useUser()
    const { getToken } = useAuth()
    const client = getClient(getToken)

    const { handleSubmit, register, control, formState, setValue } = useForm({
        defaultValues: {
            email: '',
        },
    })

    return (
        <div className="mx-auto">
            <form>
                <Input label="CaSe SeNsItIvE" name="addFriend" placeholder="Enter an Email Address" register={register}>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2">
                        <button className=" bg-tertiary rounded p-2 text-headline-text text-xs">Send Friend Request</button>
                    </div>
                </Input>
            </form>
        </div>
    )
}
