"use client";

import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="border-gray-200 bg-transparent dark:bg-transparent dark:border-gray-700 fixed w-full top-0 left-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white md:hidden"
            aria-controls="navbar-hamburger"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block bg-white dark:bg-white" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-hamburger"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:bg-transparent dark:md:bg-transparent md:border-0">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-white dark:hover:text-black md:dark:hover:bg-transparent"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-white dark:hover:text-black md:dark:hover:bg-transparent"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-white dark:hover:text-black md:dark:hover:bg-transparent"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-white dark:hover:text-black md:dark:hover:bg-transparent"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="pt-16">
        {/* Konten utama di sini */}
      </main>
    </>
  );
}

export default Navbar;
