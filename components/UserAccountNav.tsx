'use client'
import { useClerk, useUser } from '@clerk/clerk-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Cog8ToothIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

export default function UserAccountNav() {
    const router = useRouter()
    const { signOut } = useClerk()
    const { user } = useUser()
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Cog8ToothIcon className="w-5 h-5 text-headline-text" />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="z-50 min-w-[8rem] bg-headline-text overflow-hidden rounded-md border p-1 mx-4 shadow-md">
                <div className="flex items-center cursor-default text-xs text-text-dark gap-2 p-2 border-b border-body-text-light">
                    {user?.primaryEmailAddress?.emailAddress}
                </div>
                <DropdownMenu.Separator />
                <DropdownMenu.DropdownMenuItem className="relative flex text-text-dark hover:bg-highlight hover:text-headline-text select-none items-center rounded-sm px-2 py-2 text-xs outline-none">
                    <button onClick={async () => await signOut().then(() => router.push('/signin'))}>Sign Out</button>
                </DropdownMenu.DropdownMenuItem>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}
