/** @format */

"use client";

import React from "react";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

export default function PageTen() {
  return (
    <div className="flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col xs:flex-col sm:flex-col justify-evenly lg:items-center md:items-center xs:items-center sm:items-center space-x-2 2xl:p-12 xl:p-12 lg:p-12 md:p-12 xs:p-0 sm:p-5 md:mt-0 mt-24">
      <div className="2xl:w-1/2 xl:w-1/2 lg:w-full md:w-full xs:w-full sm:w-full flex flex-col items-center justify-center">
        <h1
          className="2xl:text-5xl xl:text-4xl lg:text-4xl md:text-4xl xs:text-2xl font-bold inline-block bg-gradient-to-l from-sky-400 via-sky-400 to-sky-300 bg-clip-text text-transparent whitespace-nowrap mb-2 mt-5"
          style={{ backgroundSize: "100% 95%" }}
        >
          Ingin tahu lebih banyak?
        </h1>
        <p className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-lg xs:text-lg text-slate-300 text-center sm:mb-0 mb-12">
          Kami siap membantu Anda 24/7
        </p>
      </div>

      <div className="2xl:w-1/2 xl:w-1/2 lg:w-full md:w-full xs:w-11/12 sm:w-full relative">
        {/* Card dengan gradient border dan glow effect */}
        <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-slate-600/50 2xl:p-12 xl:p-12 lg:p-12 md:p-12 xs:p-8 sm:p-8 rounded-2xl shadow-2xl">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-blue-500/5 to-sky-500/10 rounded-2xl blur-xl"></div>

          {/* Content */}
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mb-4 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h2 className="2xl:text-2xl xl:text-xl lg:text-xl md:text-lg xs:text-lg font-bold text-white mb-3">
                Mari Diskusikan Proyek Anda! 🚀
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Konsultasikan kebutuhan digital Anda bersama kami dan mulai
                langkah besar Anda menuju kesuksesan online!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <a
                href="mailto:ligal@lintasinovasiglobal.com"
                className="bg-gradient-to-r from-sky-500/10 to-blue-600/10 border border-sky-500/20 rounded-xl p-4 hover:from-sky-500/20 hover:to-blue-600/20 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm font-medium">Email</p>
                    <p className="text-white text-sm">
                      ligal@lintasinovasiglobal.com
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/+6285788818811"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-sky-500/10 to-blue-600/10 border border-sky-500/20 rounded-xl p-4 hover:from-sky-500/20 hover:to-blue-600/20 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm font-medium">
                      WhatsApp
                    </p>
                    <p className="text-white text-sm">+62 857-8881-8811</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <a
                href="https://wa.me/+6285788818811"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span>Mulai Konsultasi</span>
              </a>

              <a
                href="https://wa.me/+6285788818811"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-transparent border-2 border-sky-500/50 hover:border-sky-500 text-sky-400 hover:text-white font-semibold py-4 px-6 rounded-xl hover:bg-sky-500/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <span>Hubungi Kami</span>
              </a>
            </div>

            {/* Social Media Links 
            <div className="mt-8 pt-6 border-t border-slate-600/50">
              <p className="text-slate-400 text-sm text-center mb-4">
                Ikuti kami di media sosial
              </p>
              <div className="flex justify-center space-x-4">
                 <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a> 
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </a> 
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  );
}
