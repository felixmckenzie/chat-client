import SideBar from '../../components/Sidebar'
import '../../components/Sidebar'
import { useQuery } from '@apollo/client'
import { auth } from '@clerk/nextjs/app-beta'
import { getClient } from '@/lib/apollo'
import queries from '@/queries'
import { Suspense } from 'react'
import Loader from '@/components/Loader'

// async function getUser() {
//     const { userId, getToken } = auth()
//     const client = getClient(getToken)
//     const { data } = await client.query({ query: queries.GET_USER, variables: { clerkId: userId } })
//     return data
// }

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    // const userData = getUser()
    return (
        <div className="flex w-full">
            <Suspense fallback={<Loader />}>
                <SideBar />
            </Suspense>
            {children}
        </div>
    )
}
