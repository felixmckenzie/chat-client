import SideBar from '@/components/Sidebar'
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
import { InboxIcon } from '@heroicons/react/24/outline'
import UserAccountNav from '@/components/UserAccountNav'

export default function DashBoardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex w-full">
            <SideBar />
            <div className="w-full flex-grow">
                <div className="flex h-16 justify-between items-center border-b border-b-headline-text px-4">
                    <Navbar items={DashboardConfig.mainNav} className="text-highlight" />
                    <nav className="flex gap-6 items-center">
                        <Tooltip content="Inbox">
                            <Link href="/inbox" className="px-4">
                                <InboxIcon className="w-5 h-5 text-headline-text" />
                            </Link>
                        </Tooltip>
                        <Tooltip content="Settings">
                            <div className="flex col px-4 items-center">
                                <UserAccountNav />
                            </div>
                        </Tooltip>
                    </nav>
                </div>
                {children}
            </div>
        </div>
    )
}
