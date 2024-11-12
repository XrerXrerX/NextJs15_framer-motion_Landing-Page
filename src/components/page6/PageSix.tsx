'use client';

import React from "react";
import {
    motion,
    useInView,
    useMotionValueEvent,
    useScroll,
    useTransform
} from "framer-motion"


export default function PageSix() {
    return (
        <div className="bg-transparent text-slate-200 2xl:mt-[150px] xl:mt-[150px] lg:mt-[150px] md:mt-[250px] xs:mt-[250px] sm:mt-[150px] flex flex-colitems-center justify-center">
            <div className="flex flex-col items-center justify-center w-5/6 ">
                <div className="flex 2xl:flex-row xl:flex-row lg:flex-col-reverse md:flex-col-reverse xs:flex-col-reverse sm:flex-col-reverse-reverse items-center justify-evenly mb-4 h-full  w-full  gap-2">
                    <div className="flex mt-4 relative justify-center  lg:mt-5 md:mt-10 xs:mt-10 sm:mt-20">
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
                            className="absolute top-[-20px] 2xl:right-[300px] xl:right-[300px] lg:right-[180px] md:right-[200px] xs:right-[150px] sm:right-[160px]  2xl:max-w-[350px] xl:max-w-[350px] lg:max-w-[280px] md:max-w-[250px] xs:max-w-[160px] sm:max-w-[200px] z-10 rounded-xl lg:mt-10"
                            style={{ transform: "translateX(-40%)", width: "100%" }}
                        />

                        {/* Image 2 */}
                        <img
                            src="/pagesixasset/img42.png"
                            alt="Gambar 2"
                            className="relative 2xl:max-w-[500px] xl:max-w-[500px] lg:max-w-[400px] md:max-w-[400px] xs:max-w-[250px] sm:max-w-[300px] z-20 rounded-xl mt-5"
                            style={{ objectFit: "cover" }}
                        />

                        <motion.img
                            initial={{
                                scale: 0,
                                opacity: 0.5,
                            }}
                            whileInView={{
                                scale: 1,
                                opacity: 1,
                            }}
                            transition={{
                                scale: {
                                    type: "spring",
                                    stiffness: 50, // Stiffness untuk kontrol efek pegas
                                    damping: 10, // Pengurangan kecepatan pegas
                                },
                                opacity: {
                                    duration: 0.3,
                                }
                            }}
                            viewport={{
                                margin: "-20%",
                            }}

                            src="/pagesixasset/fr.png"
                            alt="Gambar 2"
                            className="absolute 2xl:max-w-[880px] xl:max-w-[880px] lg:max-w-[680px] md:max-w-[680px] xs:max-w-[880px] sm:max-w-[680px] z-20 rounded-xl
                            hidden xl:block 2xl:block"
                            style={{ objectFit: "cover", marginLeft: '-60px' }} // Menambahkan margin kiri negatif
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
                            className="absolute top-[-30px] sm:top-[-80px] right-[-60px] sm 2xl:h-[780px] xl:h-[780px] lg:h-[580px] md:h-[680px] xs:h-[420px] sm:h-[550px] z-10 rounded-xl"
                            style={{ transform: "translateX(40%)", width: "60%" }}
                        />
                    </div>

                    <motion.div
                        initial={{
                            y: -50, // Start slightly below
                            opacity: 0.5, // Start as transparent
                        }}
                        whileInView={{
                            y: 0, // Move to normal position
                            opacity: 1, // Fade in to full opacity
                        }}
                        transition={{
                            y: {
                                type: "spring", // Smooth spring effect
                                stiffness: 100, // Spring stiffness control
                                damping: 10, // Slow down the spring effect
                            },
                            opacity: {
                                duration: 0.3, // Duration for opacity transition
                            }
                        }}
                        viewport={{
                            margin: "-40%", // Adjust viewport margin to control when it appears
                        }}
                    >
                        <p className="2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl xs:text-2xl sm:text-2xl  font-semibold inline-block bg-gradient-to-r from-white to-sky-500 bg-clip-text text-transparent whitespace-nowrap mb-2 " >
                            mobile apps development
                        </p>
                        <p className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl xs:text-lg sm:text-xl text-slate-200">
                            aplikasi Mengoptimalkan Bisnis Anda
                        </p>
                        <p className="2xl:text-base xl:text-base lg:text-base md:text-sm xs:text-xxss sm:text-base text-slate-300 mb-3">
                            Aplikasi mobile yang tepat membantu dalam pengelolaan
                            <br />
                            inventaris, pemasaran, dan layanan pelanggan, serta memberikan
                            <br />
                            analisis yang berguna untuk pengambilan keputusan yang lebih
                            <br />
                            baik. Mulailah mengintegrasikan solusi digital dan saksikan pertumbuhan usaha Anda
                        </p>
                        <button className="bg-sky-500 text-white pl-3 rounded-full text-sm font-light flex items-center gap-2 border border-transparent transition duration-300 hover:bg-transparent hover:border-sky-500 z-40 ">
                            Konsultasi Sekarang
                            <span className="rounded-full bg-[#0B0B0B]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="m14 16l4-4m0 0l-4-4m4 4H6" />
                                </svg>
                            </span>
                        </button>
                    </motion.div>
                </div>
            </div >
        </div >
    )
}