'use client';

import React from "react";
import {
    motion,
    useInView,
    useMotionValueEvent,
    useScroll,
    useTransform
} from "framer-motion"


export default function PageTen() {
    return (
        <div className="flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col xs:flex-col sm:flex-col justify-evenly lg:items-center md:items-center xs:items-center sm:items-center space-x-2 2xl:p-12 xl:p-12 lg:p-12 md:p-12 xs:p-0 sm:p-5">
            <div className="2xl:w-1/2 xl:w-1/2 lg:w-full md:w-full xs:w-full sm:w-full flex flex-col items-center justify-center">
                <h1 className="2xl:text-5xl xl:text-4xl lg:text-4xl md:text-4xl xs:text-2xl font-bold inline-block bg-gradient-to-l from-sky-400 via-sky-400 to-sky-300 bg-clip-text text-transparent whitespace-nowrap mb-2 mt-5" style={{ backgroundSize: '100% 95%' }}>

                    Ingin tahu lebih banyak?
                </h1>
                <p className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-lg xs:text-xs text-slate-300 text-center">
                    Kami siap membantu Anda 24/7
                </p>
            </div>


            <div className="2xl:w-1/2 xl:w-1/2 lg:w-full md:w-full xs:w-full sm:w-full bg-[#161f27] border-2 border-slate-600 p-12 rounded-lg">
                <h2 className="2xl:text-xl xl:text-lg lg:text-lg md:text-lg xs:text-xs font-semibold text-slate-200 mb-4">
                    Konsultasikan kebutuhan digital Anda bersama kami dan isi form di bawah untuk memulai langkah besar Anda!
                </h2>

                <form>
                    <div className="flex space-x-4 mb-4">
                        <input
                            type="text"
                            placeholder="Nama Depan"
                            className="w-1/2 p-3 rounded-lg text-slate-200 bg-[#28313f] border border-slate-600 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Nama Belakang"
                            className="w-1/2 p-3 rounded-lg text-slate-200 bg-[#28313f] border border-slate-600 focus:outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 rounded-lg text-slate-200 bg-[#28313f] border border-slate-600 focus:outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="tel"
                            placeholder="Nomor Hape"
                            className="w-full p-3 rounded-lg text-slate-200 bg-[#28313f] border border-slate-600 focus:outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <textarea
                            placeholder="Pesan"
                            className="w-full p-3 rounded-lg text-slate-200 bg-[#28313f] border border-slate-600 focus:outline-none"
                            rows="5"

                        >
                        </textarea>
                    </div>
                    <button
                        className="w-full py-3 bg-gradient-to-r from-sky-500 via-sky-500 to-white text-black rounded-lg shadow-md hover:shadow-xl">
                        Kirim Sekarang 🚀
                    </button>

                </form>
            </div>
        </div>

    )
}