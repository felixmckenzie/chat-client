import { UserForm } from '@/components/forms/UserForm'
import { auth } from '@clerk/nextjs/app-beta'
import { Suspense } from 'react'
import Loader from '../../../../components/Loader'

export default function CreateProfile() {
    return (
        <div className="h-full flex flex-col justify-center items-center ">
            <Suspense fallback={<Loader />}>
                <UserForm />
            </Suspense>
        </div>
    )
}
