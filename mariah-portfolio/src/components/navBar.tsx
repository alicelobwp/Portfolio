"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#FFF3E8] border-b border-powderblue px-6 py-4 relative z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between uppercase tracking-wider text-xs font-semibold text-midnightviolet">
        
        <div className="hidden md:flex gap-8 w-1/3 justify-start">
          <a href="#projects" className="text-midnightviolet hover:text-frenchblue transition">Projects</a>
          <a href="#about" className="text-midnightviolet hover:text-frenchblue transition">About</a>
        </div>

        <div className="text-xl font-black tracking-normal lowercase text-center md:w-1/3 md:text-center text-left text-midnightviolet">
          Mariah.
        </div>

        <div className="hidden md:flex gap-8 w-1/3 justify-end">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-midnightviolet hover:text-frenchblue transition">Resume</a>
          <a href="#contact" className="text-midnightviolet hover:text-frenchblue transition">Contact</a>
        </div>

        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-midnightviolet focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FFF3E8] border-b border-powderblue md:hidden flex flex-col items-center gap-4 py-6 uppercase tracking-wider text-xs font-semibold shadow-lg animate-fade-in">
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-midnightviolet hover:text-frenchblue transition w-full text-center py-2">Projects</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-midnightviolet hover:text-frenchblue transition w-full text-center py-2">About</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="text-midnightviolet hover:text-frenchblue transition w-full text-center py-2">Resume</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-midnightviolet hover:text-frenchblue transition w-full text-center py-2">Contact</a>
        </div>
      )}
    </nav>
  );
}