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

            <div className="flex flex-col w-11/12">
                <div className="flex justify-center items-center mb-4 gap-2 h-full"> {/* Added justify-center and items-center */}
                    <div className="w-2/5"> {/* Kolom 1: 60% */}
                        <p className="text-5xl font-semibold inline-block bg-gradient-to-r from-white to-sky-500 bg-clip-text text-transparent whitespace-nowrap mb-2">
                            Website Development
                        </p>
                        <p className="text-4xl text-slate-200">
                            Digitalisasi untuk Pertumbuhan Bisnis
                        </p>
                        <p className="text-xl text-slate-300 mb-3">
                            Memiliki website yang optimal bukan hanya sekadar pilihan,
                            <br />
                            tetapi sebuah keharusan untuk mendorong pertumbuhan bisnis.
                            <br />
                            Digitalisasi memberikan kesempatan bagi bisnis Anda untuk
                            <br />
                            menjangkau konsumen yang lebih luas.
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


                    <div className=" w-3/5"> {/* Kolom 2: 40% */}
                        <div className="bg-transparent  rounded-xl overflow-hidden relative pl-20">
                            <img
                                src="/pagefiveasset/laravel.png"
                                alt="Gambar 2"
                                className="max-w-[200px] max-h-[250px] z-20  "
                                style={{
                                    objectFit: "cover",
                                    position: "absolute",
                                    top: "20px",  // Offset from the bottom
                                    right: "0px",   // Offset from the right
                                }}
                            />

                            <img
                                src="/pagefiveasset/flutter.png"
                                alt="Gambar 2"
                                className="max-w-[180px] max-h-[250px] z-20 "
                                style={{
                                    objectFit: "cover",
                                    position: "absolute",
                                    bottom: "0px",  // Offset from the bottom
                                    right: "0px",   // Offset from the right
                                }}
                            />
                            <div className="flex justify-cemter">
                                {/* <div className="flex space-x-[-40px] mt-4 relative ml-12 "> Mengatur jarak antar gambar */}

                                <motion.img
                                    initial={{
                                        y: -70, // Start slightly below
                                        opacity: 50, // Start as transparent
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
                                        margin: "-20%", // Adjust viewport margin to control when it appears
                                    }}
                                    src="/pagefiveasset/img1.png"
                                    alt="Gambar 1"
                                    className="max-w-[850px] max-h-[600px] z-10   rounded-xl"
                                    style={{ objectFit: "cover" }}
                                />




                                <div className="row flexflex-col">
                                    <motion.img
                                        initial={{
                                            y: -80, // Start slightly below
                                            opacity: 0, // Start as transparent
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
                                            margin: "-30%", // Adjust viewport margin to control when it appears
                                        }}
                                        src="/pagefiveasset/img2.png"
                                        alt="Gambar 2"
                                        className="max-w-[850px] max-h-[600px] z-10   rounded-xl"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <img
                                        src="/pagefiveasset/img2b.png"
                                        alt="Gambar 2"
                                        className="w-[400px] max-h-[400px] z-10  absolute  bottom-12 pl-10 rounded-xl"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <img
                                        src="/pagefiveasset/rock.png"
                                        alt="Gambar 2"
                                        className="w-[180px] max-h-[250px] z-20  bottom-2  rounded-xl"
                                        style={{
                                            objectFit: "cover",
                                            position: "absolute",
                                            bottom: "-50px",  // Offset from the bottom
                                            right: "150px",   // Offset from the right
                                        }}
                                    />
                                    <img
                                        src="/pagefiveasset/fig.png"
                                        alt="Gambar 2"
                                        className="max-w-[180px] max-h-[250px] z-20 rounded-xl"
                                        style={{
                                            objectFit: "cover",
                                            position: "absolute",
                                            bottom: "0px",  // Offset from the bottom
                                            left: "220px"
                                        }}
                                    />

                                    <img
                                        src="/pagefiveasset/tail2.png"
                                        alt="Gambar 2"
                                        className="max-w-[180px] max-h-[250px] z-20 "
                                        style={{
                                            objectFit: "cover",
                                            position: "absolute",
                                            top: "20px",  // Offset from the bottom
                                            left: "0px",   // Offset from the right
                                        }}
                                    />

                                    <img
                                        src="/pagefiveasset/vscd.png"
                                        alt="Gambar 2"
                                        className="max-w-[180px] max-h-[250px] z-20 rounded-xl"
                                        style={{
                                            objectFit: "cover",
                                            position: "absolute",
                                            bottom: "50px",  // Offset from the bottom
                                            left: "-0px",   // Offset from the right
                                        }}
                                    />
                                </div>



                                <motion.img
                                    initial={{
                                        y: -70, // Start slightly below
                                        opacity: 50, // Start as transparent
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
                                        margin: "-20%", // Adjust viewport margin to control when it appears
                                    }}
                                    src="/pagefiveasset/img3.png"
                                    alt="Gambar 3"
                                    className="max-w-[850px] max-h-[600px] z-10   rounded-xl"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}