"use client";
import React from "react";

export default function Top() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-8 px-4 animate-fade-in md:flex-row md:gap-16">
      <div className="w-full max-w-[200px] md:max-w-[280px]">
        <img
          src="/mari_stick.png"
          alt="Mari's face"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4">
        <img
          src="/title.png"
          alt="welcome to my portfolio"
          className="max-w-[280px] sm:w-[720px] md:max-w-none h-auto"
        />

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
