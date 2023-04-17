import { UserForm } from '@/app/components/UserForm'
import { auth } from '@clerk/nextjs/app-beta'
import { Suspense } from 'react'
import Loader from '../../components/Loader'

export default async function CreateProfile() {
    const { getToken } = auth()
    const token = await getToken()

    return (
        <div className="h-full flex flex-col justify-center items-center ">
            <Suspense fallback={<Loader />}>
                <UserForm authToken={token} />
            </Suspense>
        </div>
    )
}
