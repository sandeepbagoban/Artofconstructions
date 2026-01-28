'use client';
import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [projectsOpen, setProjectsOpen] = useState(false);

    const pathname = usePathname();
    const currentLocale = pathname.split("/")[1] || "en"; // default locale is "en"
    const pathWithoutLocale = pathname.split("/").slice(2).join("/") || "";

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Top Navbar */}
            <div
                className={`w-full flex items-center justify-between px-4 py-3 fixed top-0 z-50 transition-all duration-300 
                ${scrolled ? 'bg-white/60 backdrop-blur-md shadow-md' : 'bg-white'}`}
            >
                {/* Left: Menu Icon */}
                <div
                    className="text-2xl text-gray-800 cursor-pointer"
                    onClick={toggleDrawer}
                >
                    <Image
                        src="/assets/images/menu_icon.svg"
                        alt="Menu"
                        width={24}
                        height={24}
                    />
                </div>

                {/* Center: Logo */}
                <div className="flex items-center space-x-2">
                    <Link href={`/${currentLocale}`}>
                        <Image
                            src="/assets/images/logo.svg"
                            alt="Logo"
                            width={250}
                            height={60}
                            className="cursor-pointer w-auto h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[250px]"
                        />
                    </Link>
                </div>

                {/* Right: Language Options */}
                <div className="flex items-center gap-3 text-black text-sm sm:text-base">
                    <Link
                        href={`/fr/${pathWithoutLocale}`}
                        className={`ff_fira font-normal cursor-pointer hover:text-blue-600 ${currentLocale === "fr" ? "font-bold text-blue-600" : ""
                            }`}
                    >
                        FR
                    </Link>
                    <Link
                        href={`/en/${pathWithoutLocale}`}
                        className={`ff_fira font-normal cursor-pointer hover:text-blue-600 ${currentLocale === "en" ? "font-bold text-blue-600" : ""
                            }`}
                    >
                        ENG
                    </Link>
                </div>
            </div>

            {/* Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-64 md:w-80 bg-white shadow-lg z-50 p-5 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Close Button */}
                <div className="flex justify-end mb-4">
                    <IoClose
                        className="text-2xl text-gray-600 cursor-pointer"
                        onClick={toggleDrawer}
                    />
                </div>

                {/* Menu Items */}
                <nav className="mt-8">
                    <ul className="space-y-6 text-lg">
                        <li>
                            <Link
                                href={`/${currentLocale}`}
                                className="block hover:text-blue-600 transition-colors main_text ff_fira"
                                onClick={toggleDrawer}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/${currentLocale}/about`}
                                className="block hover:text-blue-600 transition-colors main_text ff_fira"
                                onClick={toggleDrawer}
                            >
                                About Us
                            </Link>
                        </li>

                        <hr />

                        {/* Services dropdown */}
                        <li>
                            <button
                                type="button"
                                onClick={() => setProjectsOpen((prev) => !prev)}
                                className="w-full flex items-center justify-between hover:text-blue-600 transition-colors main_text ff_fira focus:outline-none"
                            >
                                <span>Services</span>
                                <svg
                                    className={`w-4 h-4 transform transition-transform duration-200 ${projectsOpen ? 'rotate-180' : ''
                                        }`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>
                            {projectsOpen && (
                                <ul className="mt-2 pl-4 space-y-2">
                                    <li>
                                        <Link
                                            href={`/${currentLocale}/renovation`}
                                            className="block px-2 py-2 hover:bg-gray-100 rounded main_text ff_fira"
                                            onClick={() => {
                                                toggleDrawer();
                                                setProjectsOpen(false);
                                            }}
                                        >
                                            Renovation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={`/${currentLocale}/planning`}
                                            className="block px-2 py-2 hover:bg-gray-100 rounded main_text ff_fira"
                                            onClick={() => {
                                                toggleDrawer();
                                                setProjectsOpen(false);
                                            }}
                                        >
                                            Planning
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={`/${currentLocale}/demolition`}
                                            className="block px-2 py-2 hover:bg-gray-100 rounded main_text ff_fira"
                                            onClick={() => {
                                                toggleDrawer();
                                                setProjectsOpen(false);
                                            }}
                                        >
                                            Demolition
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link
                                href={`/${currentLocale}/projects/residential`}

                                className="block hover:text-blue-600 transition-colors main_text ff_fira"
                                onClick={toggleDrawer}
                            >
                                Projects
                            </Link>
                        </li>
                        <hr />

                        <li>
                            <Link
                                href={`/${currentLocale}/contact`}
                                className="block hover:text-blue-600 transition-colors main_text ff_fira"
                                onClick={toggleDrawer}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                    onClick={toggleDrawer}
                ></div>
            )}
        </>
    );
};

export default Header;
