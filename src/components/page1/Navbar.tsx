/** @format */

"use client";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll effect and hydration
  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Prevent hydration mismatch by not rendering dynamic content until mounted
  if (!isMounted) {
    return (
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gradient-to-r from-slate-900/95 via-blue-600/30 to-slate-900/95 backdrop-blur-md shadow-2xl shadow-blue-500/20"
            : "bg-gradient-to-r from-slate-900/80 via-[#29aaf6]/20 to-slate-900/80 backdrop-blur-sm"
        } ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Animated Stars Background */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          suppressHydrationWarning
        >
          {isMounted &&
            [...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              >
                <div className="w-1 h-1 bg-white rounded-full shadow-lg shadow-white/50"></div>
              </div>
            ))}
        </div>

        <div className="container mx-auto flex items-center 2xl:justify-around xl:justify-around lg:justify-around md:justify-around xs:justify-around sm:justify-around p-4 relative">
          {/* Logo with cosmic glow */}
          <div className="flex items-center group">
            <div className="relative">
              <img
                src="/lgic.png"
                alt="Logo"
                className="h-12 w-auto mr-4 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-xl group-hover:bg-purple-400/30 transition-all duration-300"></div>
            </div>
          </div>

          {/* Centered Menu with cosmic effects */}
          <div className="hidden lg:flex space-x-12 text-lg relative">
            <a href="#" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <p className="relative text-gray-300 hover:text-white transition-all duration-300 group-hover:scale-105">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Beranda
                </span>
              </p>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </a>

            <a href="#layanan" className="cursor-pointer group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <p className="relative text-gray-300 hover:text-white transition-all duration-300 group-hover:scale-105">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Layanan
                </span>
                <span className="ml-1 text-xs">✨</span>
              </p>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
            </a>

            <a href="#portofolio" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <p className="relative text-gray-300 hover:text-white transition-all duration-300 group-hover:scale-105">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Portofolio
                </span>
              </p>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#explore" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-emerald-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <p className="relative text-gray-300 hover:text-white transition-all duration-300 group-hover:scale-105">
                <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                  Explore
                </span>
              </p>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 group-hover:w-full transition-all duration-300"></div>
            </a>

            <a href="#contact" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <p className="relative text-gray-300 hover:text-white transition-all duration-300 group-hover:scale-105">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Contact Me
                </span>
              </p>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>

          {/* Right Button with cosmic styling */}
          <div className="flex items-center space-x-4">
            <button className="group relative flex items-center space-x-3 text-white px-6 py-3 rounded-full overflow-hidden transition-all duration-300 hover:scale-105">
              {/* Cosmic background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-full group-hover:from-purple-500/20 group-hover:via-pink-500/20 group-hover:to-blue-500/20 transition-all duration-300"></div>

              {/* Border glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-400 p-[1px] group-hover:p-[2px] transition-all duration-300">
                <div className="w-full h-full bg-slate-900 rounded-full"></div>
              </div>

              {/* Content */}
              <div className="relative flex items-center space-x-2">
                <p className="text-lg font-medium bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Discuss Project
                </p>
                <img
                  src="/arrow.png"
                  alt="Arrow"
                  className="h-5 w-auto transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </button>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-slate-900/95 via-blue-600/30 to-slate-900/95 backdrop-blur-md shadow-2xl shadow-blue-500/20"
          : "bg-gradient-to-r from-slate-900/80 via-[#29aaf6]/20 to-slate-900/80 backdrop-blur-sm"
      } ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Animated Stars Background */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        suppressHydrationWarning
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            <div className="w-1 h-1 bg-white rounded-full shadow-lg shadow-white/50"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto flex items-center 2xl:justify-around xl:justify-around lg:justify-around md:justify-around xs:justify-around sm:justify-around p-4 relative ">
        {/* Logo with cosmic glow */}
        <div className="flex items-center group">
          <div className="relative">
            <img
              src="/lgic.png"
              alt="Logo"
              className="h-12 w-auto mr-4 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-xl group-hover:bg-purple-400/30 transition-all duration-300"></div>
          </div>
        </div>

        {/* Centered Menu with cosmic effects */}
        <div className="hidden lg:flex space-x-12 text-lg relative">
          <a href="#" className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <p className="relative text-gray-300 hover:text-white transition-all duration-300 group-hover:scale-105">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Beranda
              </span>
            </p>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
          </a>

          <a href="#layanan" className="cursor-pointer group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <p className="relative text-gray-300 hover:text-white transition-all duration-300 group-hover:scale-105">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Layanan
              </span>
              <span className="ml-1 text-xs">✨</span>
            </p>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
          </a>

          <a href="#portofolio" className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <p className="relative text-gray-300 hover:text-white transition-all duration-300 group-hover:scale-105">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Portofolio
              </span>
            </p>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
          </a>
          <a href="#explore" className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-emerald-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <p className="relative text-gray-300 hover:text-white transition-all duration-300 group-hover:scale-105">
              <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
                Explore
              </span>
            </p>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 group-hover:w-full transition-all duration-300"></div>
          </a>

          <a href="#contact" className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <p className="relative text-gray-300 hover:text-white transition-all duration-300 group-hover:scale-105">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Contact Me
              </span>
            </p>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 group-hover:w-full transition-all duration-300"></div>
          </a>
        </div>

        {/* Right Button with cosmic styling */}
        <div className="flex items-center space-x-4">
          <a
            href="https://wa.me/+6285788818811"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center space-x-3 text-white px-6 py-3 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
          >
            {/* Cosmic background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-full group-hover:from-purple-500/20 group-hover:via-pink-500/20 group-hover:to-blue-500/20 transition-all duration-300"></div>

            {/* Border glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-400 p-[1px] group-hover:p-[2px] transition-all duration-300">
              <div className="w-full h-full bg-slate-900 rounded-full"></div>
            </div>

            {/* Content */}
            <div className="relative flex items-center space-x-2">
              <p className="text-lg font-medium bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Discuss Project
              </p>
              <img
                src="/arrow.png"
                alt="Arrow"
                className="h-5 w-auto transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}
