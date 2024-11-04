'use client';

import React from "react";
import {
    motion,
    useInView,
    useMotionValueEvent,
    useScroll,
    useTransform
} from "framer-motion"


export default function PageFive() {
    return (
        <div className="bg-transparent text-slate-200 p-14 mx-4 mt-12 flex flex-col items-center h-full">

            <div className="flex flex-col w-3/4">
                <div className="flex justify-center items-center mb-4 gap-2 h-full"> {/* Added justify-center and items-center */}
                    <div className="flex mt-4 relative">
                        {/* Image 1 */}
                        <motion.img
                            initial={{ x: -50, opacity: 0.5 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                x: { type: "spring", stiffness: 100, damping: 10 },
                                opacity: { duration: 0.3 }
                            }}
                            viewport={{ margin: "-20%" }}
                            src="/pagesixasset/img411.png"
                            alt="Gambar 1"
                            className="absolute top-[-20px] right-[220px] max-w-[280px] max-h-[450px] z-10 rounded-xl"
                            style={{ transform: "translateX(-40%)", width: "100%" }}
                        />

                        {/* Image 2 */}
                        <img
                            src="/pagesixasset/img42.png"
                            alt="Gambar 2"
                            className="relative max-w-[650px] max-h-[550px] z-20 rounded-xl"
                            style={{ objectFit: "cover" }}
                        />

                        {/* Image 3 */}
                        <motion.img
                            initial={{ x: 50, opacity: 0.5 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                x: { type: "spring", stiffness: 100, damping: 10 },
                                opacity: { duration: 0.3 }
                            }}
                            viewport={{ margin: "-20%" }}
                            src="/pagesixasset/img43.png"
                            alt="Gambar 3"
                            className="absolute top-[20px] right-[-50px] max-w-[650px] max-h-[450px] z-10 rounded-xl"
                            style={{ transform: "translateX(40%)", width: "60%" }}
                        />
                    </div>



                    <div className=" w-2/5"> {/* Kolom 2: 40% */}
                        <p className="text-3xl font-semibold inline-block bg-gradient-to-r from-white to-sky-500 bg-clip-text text-transparent whitespace-nowrap mb-2">
                            mobile apps development
                        </p>
                        <p className="text-xl text-slate-200">
                            aplikasi Mengoptimalkan Bisnis Anda
                        </p>
                        <p className="text-sm text-slate-300 mb-3">
                            Aplikasi mobile yang tepat membantu dalam pengelolaan inventaris,
                            <br />
                            pemasaran, dan layanan pelanggan, serta memberikan analisis yang
                            <br />
                            berguna untuk pengambilan keputusan yang lebih baik. Mulailah
                            <br />
                            mengintegrasikan solusi digital dan saksikan pertumbuhan usaha Anda
                        </p>
                        <button className="bg-sky-500 text-white pl-3 rounded-full text-sm font-light flex items-center gap-2 border border-transparent transition duration-300 hover:bg-transparent hover:border-sky-500">
                            Konsultasi Sekarang
                            <span className="rounded-full bg-[#0B0B0B]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="m14 16l4-4m0 0l-4-4m4 4H6" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div >
        </div >
    )
}