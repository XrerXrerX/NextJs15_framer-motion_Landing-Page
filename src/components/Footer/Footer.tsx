/** @format */

"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white pt-12">
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-8 px-6">
        <div className="col-span-3 sm:col-span-3 ">
          <div className="flex flex-row items-center justify-start">
            <img src="/footer/footer.png" alt="Logo PT" className=" h-auto" />
            <p className="text-slate-200 ml-3">
              LIGAL
              <br />
              PT.LINTAS INOVASI GLOBAL
            </p>
          </div>
          <p className="text-lg italic">
            &ldquo;We growing up your business with more precious way.&rdquo;
          </p>
        </div>
        <div className="col-span-1">
          <h3 className="font-semibold mb-4 text-slate-100">Link</h3>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-sky-400 text-slate-300 font-medium"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-sky-400 text-slate-300 font-medium"
              >
                Layanan
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-sky-400 text-slate-300 font-medium"
              >
                Portofolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-sky-400 text-slate-300 font-medium"
              >
                Kontak
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="font-semibold mb-4 text-slate-100">Kontak</h3>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-sky-400 text-slate-300 font-medium"
              >
                Whatsapp
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-sky-400 text-slate-300 font-medium"
              >
                Tiktok
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-sky-400 text-slate-300 font-medium"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-sky-400 text-slate-300 font-medium"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="font-semibold mb-4 text-slate-100">Info</h3>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-sky-400 text-slate-300 font-medium"
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-sky-400 text-slate-300 font-medium"
              >
                Karir
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-sky-400 text-slate-300 font-medium"
              >
                Berita
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-sky-400 text-slate-300 font-medium"
              >
                Bantuan
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className=" my-6"></div>

      <div className="flex md:justify-start justify-center gap-4 mb-6">
        <a
          href="#"
          className="text-2xl hover:text-sky-400 text-slate-300 font-medium"
        >
          <img src="/footer/x.png" alt="" className="h-6" />
        </a>
        <a
          href="#"
          className="text-2xl hover:text-sky-400 text-slate-300 font-medium"
        >
          <img src="/footer/yt.png" alt="" className="h-6" />
        </a>
        <a
          href="#"
          className="text-2xl hover:text-sky-400 text-slate-300 font-medium"
        >
          <img src="/footer/fb.png" alt="" className="h-6" />
        </a>
        <a
          href="#"
          className="text-2xl hover:text-sky-400 text-slate-300 font-medium"
        >
          <img src="/footer/ig.png" alt="" className="h-6" />
        </a>
        <a
          href="#"
          className="text-2xl hover:text-sky-400 text-slate-300 font-medium"
        >
          <img src="/footer/tk.png" alt="" className="h-6" />
        </a>{" "}
      </div>

      <div className="border-t border-slate-400 my-6"></div>

      <div className="flex flex-row justify-between items-center">
        <p className="text-sm text-slate-200">
          © 2024 PT. LINTAS INOVASI GLOBAL. All Rights Reserved.
        </p>
        <div className="text-sm gap-6">
          <a href="#" className="hover:text-sky-400 text-slate-300 font-medium">
            Terms of Service
          </a>
          <a href="#" className="hover:text-sky-400 text-slate-300 font-medium">
            Cookies
          </a>
          <a href="#" className="hover:text-sky-400 text-slate-300 font-medium">
            Privacy Policies
          </a>
        </div>
      </div>
    </footer>
  );
}
