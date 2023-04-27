import SideBar from '../../../components/Sidebar'
import '../../../components/Sidebar'
import { useQuery } from '@apollo/client'
import { auth } from '@clerk/nextjs/app-beta'
import { getClient } from '@/lib/apollo'
import queries from '@/queries'
import { Suspense } from 'react'
import Loader from '@/components/Loader'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Tooltip } from '@/components/ToolTip'
import { DashboardConfig } from '@/config/dashboard'
import { InboxIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex w-full">
            <Suspense fallback={<Loader />}>
                <SideBar />
            </Suspense>
            <div className="w-full flex-grow">
                <div className="flex h-16 justify-between items-center border-b border-b-headline-text px-4">
                    <Navbar items={DashboardConfig.mainNav} className="text-highlight" />
                    <nav className="flex gap-6 px-6">
                        <Tooltip content="Inbox">
                            <Link href="/inbox" className="px-4">
                                <InboxIcon className="w-5 h-5 text-headline-text" />
                            </Link>
                        </Tooltip>
                        <Tooltip content="Settings">
                            <Link href="/" className="px-4">
                                <EllipsisVerticalIcon className="w-5 h-5 text-headline-text" />
                            </Link>
                        </Tooltip>
                    </nav>
                </div>
                {children}
            </div>
        </div>
    )
}
