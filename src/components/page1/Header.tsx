/** @format */

"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationStage, setAnimationStage] = useState("slide-down"); // Initial state to slide down
  const [isMounted, setIsMounted] = useState(false);
  const words = ["Kantor ,", "Custom,", "Usaha,"];

  useEffect(() => {
    setIsMounted(true);

    const interval = setInterval(() => {
      // Trigger slide-up animation
      setAnimationStage("slide-up");

      // After the slide-up animation completes, update the word and trigger slide-down
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setAnimationStage("slide-down");
      }, 1000); // Match the duration of slide-up
    }, 2000); // Change word every 5 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="text-white pt-24 2xl:mt-12 xl:mt-12 lg:mt-[30px] md:mt-[50px] xs:mt-[72px] sm:mt-[60px] rounded-lg flex flex-col items-center relative overflow-hidden">
      {/* Animated Stars Background */}
      {isMounted && (
        <>
          <div
            className="star"
            style={{ left: "10%", top: "20%", width: "3px", height: "3px" }}
          ></div>
          <div
            className="star-delayed"
            style={{ left: "85%", top: "15%", width: "2px", height: "2px" }}
          ></div>
          <div
            className="star"
            style={{ left: "20%", top: "60%", width: "4px", height: "4px" }}
          ></div>
          <div
            className="star-delayed"
            style={{ left: "75%", top: "45%", width: "2px", height: "2px" }}
          ></div>
          <div
            className="star"
            style={{ left: "90%", top: "70%", width: "3px", height: "3px" }}
          ></div>
          <div
            className="star-delayed"
            style={{ left: "5%", top: "80%", width: "2px", height: "2px" }}
          ></div>
          <div
            className="star"
            style={{ left: "50%", top: "10%", width: "3px", height: "3px" }}
          ></div>
          <div
            className="star-delayed"
            style={{ left: "30%", top: "85%", width: "2px", height: "2px" }}
          ></div>
          <div
            className="star"
            style={{ left: "70%", top: "25%", width: "4px", height: "4px" }}
          ></div>
          <div
            className="star-delayed"
            style={{ left: "15%", top: "40%", width: "3px", height: "3px" }}
          ></div>
          <div
            className="star"
            style={{ left: "60%", top: "75%", width: "2px", height: "2px" }}
          ></div>
          <div
            className="star-delayed"
            style={{ left: "40%", top: "30%", width: "3px", height: "3px" }}
          ></div>
          <div
            className="star"
            style={{ left: "80%", top: "55%", width: "2px", height: "2px" }}
          ></div>
          <div
            className="star-delayed"
            style={{ left: "25%", top: "70%", width: "4px", height: "4px" }}
          ></div>
          <div
            className="star"
            style={{ left: "95%", top: "35%", width: "3px", height: "3px" }}
          ></div>
        </>
      )}
      <div
        className={`h-10 xl:h-8 lg:h-8 md:h-7 xs:h-8 sm:h-6 w rounded-full p-0.5 mb-6 ${
          isMounted ? "animate-border-rotate" : ""
        }`}
      >
        <div className="flex h-full w-full items-center justify-center bg-gray-900 back rounded-full px-8 sm:px-2 xs:px-4">
          <p
            className={`text-slate-300 bg-gradient-to-r from-gray-100 via-blue-400/90 to-gray-100 bg-clip-text text-transparent text-md xs:text-xs md:text-sm sm:text-sm ${
              isMounted ? "animate-gradient-shift" : ""
            }`}
          >
            Selamat datang di layanan pembuatan website kami
          </p>
        </div>
      </div>

      <p className="2xl:text-7xl xl:text-7xl lg:text-5xl md:text-5xl sm:text-4xl xs:text-2xl font-black text-center mb-2 text-slate-300 bg-gradient-to-r from-gray-50 to-sky-400/90 bg-clip-text text-transparent ">
        <span>Jasa Pembuatan Website</span> {/* Static part */}
        <span
          className={`inline-block transition-transform duration-5000 ease-in-out bg-gradient-to-r from-sky-500 to-white bg-clip-text text-transparent whitespace-nowrap sm:min-w-[150px] xs:min-w-[90px] min-w-[80px] ${
            isMounted && animationStage.includes("bounce")
              ? "animate-bounce"
              : isMounted && animationStage === "slide-up"
              ? "animate-slide-up"
              : isMounted && animationStage === "slide-down"
              ? "animate-slide-down"
              : ""
          }`}
        >
          {words[currentWordIndex]}
        </span>
        <br />
        untuk Visibilitas dan Daya Tarik
        <br />
        di Era Digital
      </p>
      <div className="sm:text-xxss md:text-sm lg:text-base xl:text-xl 2xl:text-xl xs:text-xxss 2xl:mt-12 xl:mt-12 lg:mt-12 md:mt-6 xs:mt-2 sm:mt-6 sm:block hidden">
        <p className="text-center mx-4 my-4 text-slate-300 ">
          <span>
            Kami memperhatikan Branding dan Representasi Bisnis yang
            profesional, sehingga memenuhi berbagai <br />
            Anda dengan desain yang menawan, fitur canggih, dan teknologi
            terkini
          </span>
          🚀.
        </p>
      </div>
      <div className="flex justify-center space-x-4 2xl:mt-12 xl:mt-12 lg:mt-12 md:mt-12 xs:mt-6 sm:mt-6">
        <a
          href="https://wa.me/+6285888818811"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-transparent text-white px-12 py-4 rounded-md border border-sky-500 shadow-md transition 
                xl:px-12 xl:h-16 xl:py-4 
                lg:px-6 lg:h-12 lg:py-2 
                md:px-6 md:h-12 md:py-2 
                sm:px-6 sm:h-12 sm:py-2 
                xs:px-6 xs:h-12 xs:py-2 
                 duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
        >
          Explore
        </a>

        <a
          href="https://wa.me/+6285888818811"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:ring-sky-800 shadow-lg shadow-sky-500/50 dark:shadow-lg dark:shadow-sky-800/80 text-white 
               xl:px-12 xl:h-16 xl:py-4 
                lg:px-6 lg:h-12 lg:py-2 
                md:px-6 md:h-12 md:py-2 
               sm:px-6 sm:h-12 sm:py-2 
                xs:px-6 xs:h-12 xs:py-2 
                rounded-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
        >
          Konsultasi
        </a>
      </div>
    </div>
  );
}
