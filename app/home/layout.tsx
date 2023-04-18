import SideBar from '../components/Sidebar'
import '../components/Sidebar'
import { useQuery } from '@apollo/client'
import { auth } from '@clerk/nextjs/app-beta'
import { getClient } from '@/lib/apollo'
import queries from '@/queries'

async function getUser() {
    const { userId, getToken } = auth()
    const client = getClient(getToken)
    const { data } = await client.query({ query: queries.GET_USER, variables: { clerkId: userId } })
    console.log(data)
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    getUser()
    return (
        <div className="flex w-full">
            <SideBar />
            {children}
        </div>
    )
}
