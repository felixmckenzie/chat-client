import SideBar from '../../components/Sidebar'
import '../../components/Sidebar'
import { useQuery } from '@apollo/client'
import { auth } from '@clerk/nextjs/app-beta'
import { getClient } from '@/lib/apollo'
import queries from '@/queries'
import { Suspense } from 'react'
import Loader from '@/components/Loader'
import { Navbar } from '@/components/Navbar'
import { marketingConfig } from '@/config/marketing'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex w-full">
            <Suspense fallback={<Loader />}>
                <SideBar />
            </Suspense>
            <div className="w-full flex-grow">
                <div className="flex h-16 justify-start items-center border-b border-b-headline-text px-4">
                    <Navbar items={marketingConfig.mainNav} />
                </div>
                {children}
            </div>
        </div>
    )
}
