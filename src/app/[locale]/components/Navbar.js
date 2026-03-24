"use client";
import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  const pathWithoutLocale = pathname.split("/").slice(2).join("/") || "";

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <div
        className={`w-full flex items-center justify-between px-4 py-4 fixed top-0 z-50 transition-all duration-500
          ${
            scrolled
              ? "bg-gray-300/80 backdrop-blur-lg shadow-md"
              : "bg-gray-200/80 backdrop-blur-md"
          }`}
      >
        {/* Left: Menu Icon + Logo */}
        <div className="flex items-center gap-4">
          <div
            className="p-2 rounded-full transition-colors cursor-pointer"
            onClick={toggleDrawer}
          >
            <Image
              src="/assets/images/menu_icon.svg"
              alt="Menu"
              width={24}
              height={24}
            />
          </div>

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
            className={`ff_poppins font-normal cursor-pointer hover:text-blue-600 px-2 py-1 rounded transition-colors ${
              currentLocale === "fr"
                ? "font-bold text-blue-600 bg-blue-50/50"
                : ""
            }`}
          >
            FR
          </Link>
          <Link
            href={`/en/${pathWithoutLocale}`}
            className={`ff_poppins font-normal cursor-pointer hover:text-blue-600 px-2 py-1 rounded transition-colors ${
              currentLocale === "en"
                ? "font-bold text-blue-600 bg-blue-50/50"
                : ""
            }`}
          >
            ENG
          </Link>
        </div>
      </div>

      {/* Drawer (Glossy Sidebar) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 md:w-80 shadow-2xl z-50 p-5 transform transition-transform duration-500 ease-in-out border-r border-white/30
          bg-white backdrop-blur-xl ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleDrawer}
            className="p-2 hover:bg-black/5 rounded-full transition-all"
          >
            <IoClose className="text-2xl text-gray-800" />
          </button>
        </div>

        {/* Logo inside drawer */}
        <div className="flex justify-left mb-6">
          <Link href={`/${currentLocale}`} onClick={toggleDrawer}>
            <Image
              src="/assets/images/logo.svg"
              alt="Logo"
              width={180}
              height={60}
              className="w-auto h-auto max-w-[160px]"
            />
          </Link>
        </div>

        {/* Menu Items */}
        <nav className="mt-8">
          <ul className="space-y-6 text-lg">
            <li>
              <Link
                href={`/${currentLocale}`}
                className="block hover:translate-x-2 hover:text-blue-600 transition-all main_text ff_poppins"
                onClick={toggleDrawer}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={`/${currentLocale}/about`}
                className="block hover:translate-x-2 hover:text-blue-600 transition-all main_text ff_poppins"
                onClick={toggleDrawer}
              >
                About Us
              </Link>
            </li>

            <hr className="border-black/10" />

            {/* Services dropdown */}
            <li>
              <button
                type="button"
                onClick={() => setProjectsOpen((prev) => !prev)}
                className="w-full flex items-center justify-between hover:text-blue-600 transition-colors main_text ff_poppins focus:outline-none"
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    projectsOpen ? "rotate-180" : ""
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

              {/* Glossy Sub-menu */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  projectsOpen ? "max-h-60 mt-2" : "max-h-0"
                }`}
              >
                <ul className="pl-4 space-y-2 border-l border-black/10 ml-1">
                  <li>
                    <Link
                      href={`/${currentLocale}/renovation`}
                      className="block px-2 py-2 hover:bg-white/40 hover:backdrop-blur-sm rounded transition-all main_text ff_poppins"
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
                      className="block px-2 py-2 hover:bg-white/40 hover:backdrop-blur-sm rounded transition-all main_text ff_poppins"
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
                      className="block px-2 py-2 hover:bg-white/40 hover:backdrop-blur-sm rounded transition-all main_text ff_poppins"
                      onClick={() => {
                        toggleDrawer();
                        setProjectsOpen(false);
                      }}
                    >
                      Demolition
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link
                href={`/${currentLocale}/projects/residential`}
                className="block hover:translate-x-2 hover:text-blue-600 transition-all main_text ff_poppins"
                onClick={toggleDrawer}
              >
                Projects
              </Link>
            </li>

            <hr className="border-black/10" />

            <li>
              <Link
                href={`/${currentLocale}/contact`}
                className="block hover:translate-x-2 hover:text-blue-600 transition-all main_text ff_poppins"
                onClick={toggleDrawer}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Dark Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 transition-opacity"
          onClick={toggleDrawer}
        ></div>
      )}
    </>
  );
};

export default Header;