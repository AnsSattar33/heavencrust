import { AlignJustify } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='top-0 left-0 w-full z-50'>
            <nav className="bg-orange-500 relative">
                {/* Background with opacity */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/lines.png')] bg-end opacity-40 z-0"></div>

                {/* Navbar content */}
                <div className="relative z-10 flex flex-col items-end justify-center py-10 px-2 sm:px-4">
                    <div className="container flex flex-wrap items-center justify-between mx-auto">
                        <Link href="#" className="flex items-center text-white flex-col">
                            <span className="self-center text-2xl sm:text-4xl font-bold whitespace-nowrap text-white uppercase">HeavenCrust</span>
                            <span className='self-center text-2xl sm:text-4xl font-bold whitespace-nowrap text-white uppercase'>LLC</span>
                        </Link>

                        {/* Mobile Menu Toggle Button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={toggleMenu}>
                                <AlignJustify className="text-white" size={32} />
                            </button>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:block w-full md:w-auto">
                            <ul className="flex flex-col sm:flex-row p-4 mt-4 bg-white rounded-lg sm:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-orange-500 rounded hover:bg-gray-100 sm:hover:bg-transparent md:p-0" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-orange-500 rounded hover:bg-gray-100 sm:hover:bg-transparent md:p-0" aria-current="page">Shipping</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-orange-500 rounded hover:bg-gray-100 sm:hover:bg-transparent md:p-0">About</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-orange-500 rounded hover:bg-gray-100 sm:hover:bg-transparent md:p-0">Services</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-orange-500 rounded hover:bg-gray-100 sm:hover:bg-transparent md:p-0">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden relative z-20`}>
                <ul className="flex flex-col p-4 mt-4 bg-white rounded-lg md:hidden absolute -top-20 sm:right-15 right-5">
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-orange-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-orange-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0" aria-current="page">Shipping</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-orange-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">About</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-orange-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">Services</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-orange-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
