"use client";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#FFF3E8] border-b border-powderblue px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between uppercase tracking-wider text-xs font-semibold text-[#4A1525]">
        
        <div className="hidden md:flex gap-8 w-1/3 justify-start">
          <a href="#projects" className=" text-midnightviolet hover:text-frenchblue transition">Projects</a>
          <a href="#about" className="text-midnightviolet hover:text-frenchblue transition">About</a>
        </div>

        <div className="text-xl font-black tracking-normal lowercase text-center w-full md:w-1/3">
          Mariah.
        </div>

        <div className="hidden md:flex gap-8 w-1/3 justify-end">
          <a href="/resume.pdf" target="_blank" className="text-midnightviolet hover:text-frenchblue transition">Resume</a>
          <a href="#contact" className="text-midnightviolet hover:text-frenchblue transition">Contact</a>
        </div>

      </div>
    </nav>
  );
}