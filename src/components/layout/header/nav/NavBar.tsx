"use client";
import { navItems } from "@/data/nav-items";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const NavBar = () => {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const selectItem = (name: string) => {
    return name === pathname ? " border-primary-light" : " border-transparent";
  };

  const selectItemCell = (name: string) => {
    return name === pathname
      ? " bg-emerald-50 border-emerald-500 text-emerald-700"
      : " border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800";
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* <div className="flex-shrink-0 flex items-center">
            <Image
              alt="log image"
              priority
              src={`http://localhost:1337/uploads/logo1_6cb582cf09.png`}
              width={500}
              height={500}
              className="w-[57px] h-[50px] "
            />
          </div> */}
          <Logo />
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index + Date.now()}
                href={item.url}
                className={
                  "text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" +
                  selectItem(item.url)
                }
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              id="mobile-menu-button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Abrir menú principal</span>
              <svg
                className={`h-6 w-6 ${!menuOpen ? "block" : "hidden"}`}
                id="menu-open-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${menuOpen ? "block" : "hidden"}`}
                id="menu-close-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`sm:hidden overflow-hidden transition-all ${
          menuOpen ? "h-47" : "h-0"
        }`}
        id="mobile-menu"
      >
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item, index) => (
            <Link
              key={index + Date.now()}
              href={item.url}
              className={
                "block pl-3 pr-4 py-2 border-l-4 text-base font-medium" +
                selectItemCell(item.url)
              }
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
