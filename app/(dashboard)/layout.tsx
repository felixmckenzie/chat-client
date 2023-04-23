import SideBar from '../../components/Sidebar'
import '../../components/Sidebar'
import { useQuery } from '@apollo/client'
import { auth } from '@clerk/nextjs/app-beta'
import { getClient } from '@/lib/apollo'
import queries from '@/queries'
import { Suspense } from 'react'
import Loader from '@/components/Loader'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex w-full space-y-6">
            <Suspense fallback={<Loader />}>
                <SideBar />
            </Suspense>
            {children}
        </div>
    )
}
