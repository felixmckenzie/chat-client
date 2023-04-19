'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowSmallUpIcon, ArrowSmallDownIcon } from '@heroicons/react/24/solid'
import { NavCard } from './NavCard'

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)

    const handleScroll = () => {
        const scrollTop = window.scrollY

        if (scrollTop > 200) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !event.target.closest('.dropdown-toggle')) {
            setIsDropdownOpen(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-4'}`}>
            <div className="flex items-center justify-between h-16 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <a href="#" className="font-bold text-xl text-headline-text">
                        Dev Chat
                    </a>
                </div>
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="dropdown-toggle flex items-center text-headline-text hover:text-highlight px-3 py-2 text-sm font-medium"
                >
                    <span>Features</span> {isDropdownOpen ? <ArrowSmallDownIcon className="h-4 w-4" /> : <ArrowSmallUpIcon className="h-4 w-4" />}
                </button>
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/signup" className="text-headline-text  hover:text-highlight  px-3 py-2 text-sm font-medium">
                        Sign Up
                    </Link>
                    <Link href="/signin" className="text-headline-text  hover:text-highlight px-3 py-2 text-sm font-medium">
                        Login
                    </Link>
                </div>
            </div>
            <div className="relative flex justify-center" ref={dropdownRef}>
                {isDropdownOpen && (
                    <div className="w-11/12 flex justify-center items-center mt-6 mb-6 space-x-8">
                        <NavCard heading="Feature 1" subtext="Some subtext" />
                        <NavCard heading="Feature 2" subtext="Some subtext" />
                        <NavCard heading="Feature 3" subtext="Some subtext" />
                    </div>
                )}
            </div>
        </nav>
    )
}
