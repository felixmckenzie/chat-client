'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MobileNav } from './MobileNav'
import { useSelectedLayoutSegment } from 'next/navigation'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { NavItem } from '@/types'
import { cn } from '@/utils'
interface NavProps {
    items?: NavItem[]
    children?: React.ReactNode
    className?: string
}

export const Navbar = ({ items, children, className }: NavProps) => {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
    const segment = useSelectedLayoutSegment()
    return (
        <nav className="flex gap-6 md:gap-10">
            {items?.length && (
                <div className="hidden gap-6 md:flex">
                    {items?.map((item, index) => (
                        <Link
                            key={index}
                            href={item.disabled ? '#' : item.href}
                            className={cn(
                                'flex items-center text-lg font-semibold  sm:text-sm',
                                item.href.startsWith(`/${segment}`) && 'text-headline-text',
                                item.disabled && 'cursor-not-allowed opacity-80',
                                item.title === 'Add Friend' && className
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            )}
            <button className="flex items-center text-headline-text space-x-2 md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {showMobileMenu ? <XMarkIcon className="h-4 w-4" /> : <Bars3Icon className="h-4 w-4" />}
                <span className="font-bold">Menu</span>
            </button>
            {showMobileMenu && items && <MobileNav items={items}>{children}</MobileNav>}
        </nav>
    )
}
