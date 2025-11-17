'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header({ title, nav, currentPath }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={[
        "w-full fixed top-0 left-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-black border-b border-white/20" 
          : "bg-black/40 border-b border-white/10"
      ].join(" ")}
    >
      <div className="flex items-center justify-between w-full h-20 px-6 md:px-24">

        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0" onClick={() => window.location.href = "/"}>
          <Image
            src="/Header_logo.avif"
            width={130}
            height={50}
            alt="Company Logo"
            className="object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-end items-center w-[40%] gap-8">
          {nav.map((item) => {
            const active = currentPath === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                className={[
                  "relative inline-block text-lg font-medium transition-colors duration-200",
                  active ? "text-[#ffb300]" : "text-white hover:text-[#ffb300]",
                  "after:content-[''] after:absolute after:left-0 after:-bottom-1",
                  "after:h-[2px] after:bg-[#ffb300] after:transition-all after:duration-300",
                  active ? "after:w-full" : "after:w-0 hover:after:w-full",
                  "focus:outline-none focus-visible:after:w-full"
                ].join(" ")}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-white/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/20 px-6 py-3 flex flex-col space-y-2">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block py-2 text-base font-medium ${
                currentPath === item.href
                  ? "text-[#ffb300]"
                  : "text-white hover:text-[#ffb300]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
