'use client' 
import { useState, useEffect, useRef } from "react";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleScroll = () => {
        const scrollTop = window.scrollY

        if(scrollTop > 200) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

      const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !event.target.closest('.dropdown-toggle')) {
      setIsDropdownOpen(false);
    }
  };


      useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
       document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
    
    return (
        <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        isScrolled ? 'shadow-md py-2' : 'py-4'
      }`}>
        <div className="flex items-center justify-between h-16 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
            <a href="#" className="font-bold text-xl text-headline-text">
              Dev Chat
            </a>
          </div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="dropdown-toggle text-headline-text hover:text-highlight px-3 py-2 text-sm font-medium"
              >
                Features
              </button>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-headline-text  hover:text-highlight  px-3 py-2 text-sm font-medium">
              Sign Up
            </a>
            <a href="#" className="text-headline-text  hover:text-highlight px-3 py-2 text-sm font-medium">
              Login
            </a>
          </div>
        </div>
          <div className="relative flex justify-center" ref={dropdownRef}>
            {isDropdownOpen && (
                <div className="w-11/12 flex justify-center items-center h-48 mt-6 mb-6 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="text-headline-text px-3 py-2">Feature 1</div>
                    <div className="text-headline-text px-3 py-2">Feature 2</div>
                    <div className="text-headline-text px-3 py-2">Feature 3</div>
                </div>
            )}
          </div>
        </nav>
    )
}