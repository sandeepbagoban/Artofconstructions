"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  const pathWithoutLocale = pathname.split("/").slice(2).join("/") || "";

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      {/* ── Navbar: always fully transparent, sits on top of hero image ── */}
      <div className="w-full flex items-center justify-between px-6 sm:px-10 py-5 fixed top-0 z-50">

        {/* Left: Hamburger */}
        <button
          onClick={toggleDrawer}
          className="p-1 cursor-pointer"
          aria-label="Open menu"
        >
          <Image
            src="/assets/images/menu_icon.svg"
            alt="Menu"
            width={22}
            height={22}
          />
        </button>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href={`/${currentLocale}`}>
            <Image
              src="/assets/images/logo.svg"
              alt="ART Construction"
              width={220}
              height={50}
              className="w-auto h-auto max-w-[160px] sm:max-w-[220px] cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Right: Language switcher */}
        <div className="flex items-center gap-2 text-sm ff_poppins text-[#111]">
          <Link
            href={`/fr/${pathWithoutLocale}`}
            className={`px-1 transition-opacity hover:opacity-60 ${
              currentLocale === "fr" ? "font-semibold" : "opacity-40"
            }`}
          >
            FR
          </Link>
          <span className="opacity-30 text-xs">|</span>
          <Link
            href={`/en/${pathWithoutLocale}`}
            className={`px-1 transition-opacity hover:opacity-60 ${
              currentLocale === "en" ? "font-semibold" : "opacity-40"
            }`}
          >
            ENG
          </Link>
        </div>
      </div>

      {/* ── Drawer (Sidebar) ── */}
      <div
        className={`fixed top-0 left-0 h-full w-64 md:w-80 bg-white z-50 p-8 shadow-2xl
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close */}
        <div className="flex justify-end mb-8">
          <button onClick={toggleDrawer} className="p-1 hover:opacity-50 transition-opacity">
            <IoClose className="text-2xl text-gray-800" />
          </button>
        </div>

        {/* Logo */}
        <div className="mb-10">
          <Link href={`/${currentLocale}`} onClick={toggleDrawer}>
            <Image
              src="/assets/images/logo.svg"
              alt="ART Construction"
              width={160}
              height={45}
              className="w-auto h-auto max-w-[140px]"
            />
          </Link>
        </div>

        {/* Nav links */}
        <nav>
          <ul className="space-y-7 text-[15px]">
            <li>
              <Link
                href={`/${currentLocale}`}
                className="block main_text ff_poppins tracking-wide hover:text-[#F3C76C] transition-colors"
                onClick={toggleDrawer}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={`/${currentLocale}/about`}
                className="block main_text ff_poppins tracking-wide hover:text-[#F3C76C] transition-colors"
                onClick={toggleDrawer}
              >
                About Us
              </Link>
            </li>

            <hr className="border-black/10" />

            {/* Services accordion */}
            <li>
              <button
                type="button"
                onClick={() => setProjectsOpen((p) => !p)}
                className="w-full flex items-center justify-between main_text ff_poppins tracking-wide hover:text-[#F3C76C] transition-colors focus:outline-none"
              >
                <span>Services</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${projectsOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${projectsOpen ? "max-h-48 mt-3" : "max-h-0"}`}>
                <ul className="pl-4 space-y-3 border-l border-black/10">
                  {["renovation", "planning", "demolition"].map((s) => (
                    <li key={s}>
                      <Link
                        href={`/${currentLocale}/${s}`}
                        className="block py-1 ff_poppins text-[14px] text-[#555] capitalize hover:text-[#F3C76C] transition-colors"
                        onClick={() => { toggleDrawer(); setProjectsOpen(false); }}
                      >
                        {s.charAt(0).toUpperCase() + s.slice(1)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <Link
                href={`/${currentLocale}/projects`}
                className="block main_text ff_poppins tracking-wide hover:text-[#F3C76C] transition-colors"
                onClick={toggleDrawer}
              >
                Projects
              </Link>
            </li>

            <hr className="border-black/10" />

            <li>
              <Link
                href={`/${currentLocale}/contact`}
                className="block main_text ff_poppins tracking-wide hover:text-[#F3C76C] transition-colors"
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
          className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40"
          onClick={toggleDrawer}
        />
      )}
    </>
  );
};

export default Header;
