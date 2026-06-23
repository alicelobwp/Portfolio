"use client";
import React from "react";

export default function Top() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-8 px-4 animate-fade-in md:flex-row md:gap-16">
      <div className="w-full max-w-[200px] md:max-w-[280px]">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 
                   w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]
                   rounded-full opacity-40 blur-3xl pointer-events-none -z-10
                   bg-[radial-gradient(circle,_#A6BCC9_0%,_transparent_99%)]"
        />

        <img
          src="/mari_stick.png"
          alt="Mari's face"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="z-10 flex flex-col items-center md:items-start gap-2">
        <span className="font-sans font-extrabold text-xl sm:text-2xl tracking-tight text-midnightviolet md:ml-2">
          Welcome to my
        </span>

        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-normal text-[#27478B] uppercase border-b-4 border-midnightviolet/65 pb-1 leading-none">
          Portfolio
        </h1>

        <div className="flex flex-row items-center justify-center gap-1 w-full">
          <a
            href="https://github.com/alicelobwp"
            target="_blank"
            rel="noopener noreferrer"
            className="w-18 h-8 transition-transform hover:scale-110"
          >
            <img
              src="/github-outline-svgrepo-com.svg"
              alt="github"
              className="w-full h-full"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mariah-alice-pereira/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-18 h-8 transition-transform hover:scale-110"
          >
            <img
              src="/linkedin-outline-svgrepo-com.svg"
              alt="linkedin"
              className="w-full h-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
