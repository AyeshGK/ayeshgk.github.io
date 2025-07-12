"use client";

import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import BrandIcon from "./BrandIcon";
import { usePathname } from "next/navigation";
import { RxCaretRight } from "react-icons/rx";
import { BsFileEarmarkPerson } from "react-icons/bs";

const navlinks = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Projects",
        href: "/projects",
    },
    {
        name: "Blogs",
        href: "/blogs",
    },
    {
        name: "Publications",
        href: "/publications",
    },
];

export default function Navbar(): JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const navbarRef = useRef<HTMLDivElement>(null);
    const [navbarHeight, setNavbarHeight] = useState<number>(90);

    const pathname = usePathname();

    const toggleMenu = (): void => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = (): void => {
        setIsMenuOpen(false);
    };

    // Close menu on window resize >= md breakpoint
    useEffect(() => {
        const closeMenuOnResize = (): void => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", closeMenuOnResize);
        return () => window.removeEventListener("resize", closeMenuOnResize);
    }, []);

    // Disable body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    // Measure navbar height once on mount to set mobile menu padding
    useEffect(() => {
        if (navbarRef.current) {
            setNavbarHeight(navbarRef.current.offsetHeight);
        }
    }, []);

    return (
        <>
            <nav
                ref={navbarRef}
                className="sticky top-0 z-50 w-screen bg-white md:relative safe-layout border-b border-gray-300 dark:border-gray-700"
            >
                <div className="flex flex-row items-center justify-between py-6 border-b-2 border-b-gray safe-x-padding">
                    <Link href="/" onClick={closeMenu} prefetch={false} className="z-50">
                        <div className="w-[32px] h-[40px] lg:w-[42px] lg:h-[50px]">
                            <BrandIcon />
                        </div>
                    </Link>

                    {/* Desktop menu */}
                    <div className="hidden md:flex md:gap-6 lg:gap-8 items-center text-lg font-bold">
                        <ul className="flex md:gap-6 lg:gap-8 justify-evenly">
                            {navlinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className={`p-4 ${pathname === link.href ? "text-accent" : "text-accent2"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="/resume.pdf"
                            download="Ayesh Vininda - Resume 2024.pdf"
                            className="px-6 py-2 text-white gradient-btn rounded-xl"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile hamburger button */}
                    <div className="z-50 md:hidden">
                        <button
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                            onClick={toggleMenu}
                            className="cursor-pointer hamburger"
                        >
                            <svg viewBox="0 0 32 32" id="hamburger">
                                <path
                                    className="line line-top-bottom"
                                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                                ></path>
                                <path className="line" d="M7 16 27 16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                id="mobile-menu"
                className={`fixed top-0 w-screen h-screen transition-all duration-500 ease-in-out z-40 bg-white ${isMenuOpen ? "top-0" : "-translate-y-full"
                    }`}
                style={{ paddingTop: `${navbarHeight}px` }}
            >
                <div className="flex flex-col items-start justify-between p-4 text-lg font-medium lg:hidden lg:gap-8">
                    <ul className="w-full">
                        {navlinks.map((link, index) => (
                            <li key={index} className="flex mb-2 rounded-lg">
                                <Link
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="flex-1 py-4 safe-x-padding"
                                >
                                    <div className="flex items-center justify-between">
                                        <span
                                            className={`text-2xl font-semibold ${pathname === link.href ? "gradient-text" : "text-accent"
                                                }`}
                                        >
                                            {link.name}
                                        </span>
                                        <span
                                            className={`text-4xl ${pathname === link.href ? "text-secondary" : ""
                                                }`}
                                        >
                                            <RxCaretRight />
                                        </span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                        <li className="flex text-white rounded-lg gradient-bg">
                            <a
                                href="/resume.pdf"
                                download="Ayesh Vininda - Resume 2024.pdf"
                                className="flex-1 py-4 safe-x-padding"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-semibold">Resume</span>
                                    <span className="text-4xl">
                                        <BsFileEarmarkPerson />
                                    </span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
