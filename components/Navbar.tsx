"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

const NavLinks = [
  { name: "Electronics", href: "/Electronics" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const { handleCartClick, cartCount } = useShoppingCart();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false); // This will automatically update both menu visibility and icon
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="navbar isolate z-50 relative">
        <div className="navbar-start">
          <div className="dropdown" ref={menuRef}>
            <div
              tabIndex={0}
              onClick={() => setMenuOpen(!menuOpen)}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              )}
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
              <div className="absolute top-full left-0 shadow-lg md:hidden menu overflow-hidden menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 z-50">
                <ul className="flex flex-col p-4 space-y-2">
                  {NavLinks.map((link, index) => (
                    <li key={index} className="w-full">
                      <Link
                        href={link.href}
                        className={`
                      block w-full p-2 
                      ${
                        pathname === link.href
                          ? "font-bold text-gray-800 underline"
                          : "text-gray-600 hover:bg-gray-100"
                      }
                    `}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Link href="/" className="btn btn-ghost text-xl font-semibold">
            Shopy
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={`${
                    pathname === link.href
                      ? "font-bold text-gray-800 underline"
                      : ""
                  } duration-500 transition hover:text-primary`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => handleCartClick()}
          className="navbar-end flex items-center md:space-x-2 pr-4"
        >
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span
              className={`absolute top-0 right-0 ${
                cartCount === 0 ? "" : "bg-red-500 w-2 h-2 rounded-full p-1"
              }`}
            />
          </div>

          <span className="hidden md:block text-sm">Cart</span>
        </button>
      </nav>
    </>
  );
}
