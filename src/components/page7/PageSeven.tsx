'use client';

import React from "react";
import {
    motion
} from "framer-motion"


export default function PageSeven() {
    return (
        <div className="bg-transparent text-slate-200 mt-[150px] flex flex-col items-center justify-center h-full">
            <div className="flex flex-col items-center justify-center 2xl:w-5/6 xl:w-5/6 lg:w-5/6 md:w-full xs:w-full sm:w-full">
                <div className="flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col xs:flex-col sm:flex-col items-center justify-evenly mb-4 h-full  w-full gap-2">

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
                            margin: "-10%", // Adjust viewport margin to control when it appears
                        }}
                        className="2xl:w-3/5 xl:w-3/5 lg:w-11/12 md:w-11/12 xs:w-11/12 sm:w-11/12"
                    >
                        <p className="2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl xs:text-2xl sm:text-2xl  font-semibold inline-block bg-gradient-to-r from-white to-sky-500 bg-clip-text text-transparent whitespace-nowrap mb-2 " >
                            visual design & branding
                        </p>
                        <p className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl xs:text-lg sm:text-xl text-slate-200">
                            Solusi Visual Terbaik untuk Bisnis Anda
                        </p>
                        <p className="2xl:text-base xl:text-base lg:text-base md:text-sm xs:text-xxss sm:text-base text-slate-300 mb-3">
                            Identitas brand adalah jantung dari sebuah bisnis, mencerminkan nilai,
                            <br />
                            visi, dan keunikan yang membedakan Anda dari kompetitor. Kami dapat
                            <br />
                            membantu menciptakan identitas brand yang kuat dan konsisten
                            <br />
                            melalui logo, warna, tipografi, dan elemen visual lainnya
                        </p>
                        <button className="bg-sky-500 text-white pl-3 rounded-full text-sm font-light flex items-center gap-2 border border-transparent transition duration-300 hover:bg-transparent hover:border-sky-500">
                            Konsultasi Sekarang
                            <span className="rounded-full bg-[#0B0B0B]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="m14 16l4-4m0 0l-4-4m4 4H6" />
                                </svg>
                            </span>
                        </button>

                    </motion.div>
                    <div className=" flex mt-4 relative justify-around">

                        {/* <div className="flex space-x-[-40px] mt-4 relative ml-12 "> Mengatur jarak antar gambar */}

                        <motion.img
                            initial={{
                                y: -50, // Start slightly below
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
                                margin: "-10%", // Adjust viewport margin to control when it appears
                            }}
                            src="/pagesevenasset/kr.png"
                            alt="Gambar 1"
                            className=" 2xl:max-h-[600px] xl:max-h-[600px] lg:max-h-[500px] md:max-h-[400px] xs:max-h-[300px] sm:max-h-[400px] z-10   rounded-xl"
                            style={{ objectFit: "cover" }}
                        />

                        <motion.img
                            initial={{
                                scale: 0, // Memulai sedikit lebih besar
                                opacity: 0, // Awalnya transparan
                            }}
                            whileInView={{
                                scale: 1, // Kembali ke ukuran normal
                                opacity: 1, // Menjadi tidak transparan
                            }}
                            transition={{
                                scale: {
                                    type: "spring", // Efek pegas untuk transisi halus
                                    stiffness: 50, // Stiffness untuk kontrol efek pegas
                                    damping: 10, // Pengurangan kecepatan pegas
                                },
                                opacity: {
                                    duration: 0.3, // Durasi transisi opacity
                                }
                            }}
                            viewport={{
                                margin: "-20%", // Menyesuaikan margin viewport
                            }}
                            src="/pagesevenasset/lg.png"
                            alt="Gambar 2"
                            className="absolute 2xl:max-w-[1050px] xl:max-w-[1050px] lg:max-w-[900px] md:max-w-[900px] xs:max-w-[600px] sm:max-w-[700px] mr-10 z-30 rounded-xl hidden 2xl:block xl:block"
                            style={{ objectFit: "cover" }}
                        />


                        <div className="flex justify-center items-center">


                            <motion.img
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
                                    margin: "-30%", // Adjust viewport margin to control when it appears
                                }}
                                src="/pagesevenasset/mid.png"
                                alt="Gambar 2"
                                className="2xl:max-h-[600px] xl:max-h-[500px] lg:max-h-[300px] md:max-h-[200px] xs:max-h-[150px] sm:max-h-[200px] z-10 rounded-xl"
                                style={{ objectFit: "cover" }}
                            />
                            <motion.img
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
                                    margin: "-30%", // Adjust viewport margin to control when it appears
                                }}
                                src="/pagesevenasset/toop.png"
                                alt="Gambar 2"
                                className="2xl:w-[300px] xl:w-[300px] lg:w-[200px] md:w-[180px] xs:w-[100px] sm:w-[100px] z-10  absolute top-20  rounded-xl"
                                style={{ objectFit: "cover" }}
                            />
                            <img
                                src="/pagesevenasset/bt.png"
                                alt="Gambar 2"
                                className=" absolute bottom-[-20px] md:bottom-[-100px]  xs:bottom-[-50px] 2xl:right-[120px] xl:right-[150px] lg:right-[100px] md:right-[100px] xs:right-[60px] sm:right-[100px] 2xl:w-[160px] xl:w-[130px] lg:w-[150px] md:w-[120px] xs:w-[80px] sm:w-[100px]  z-20  rounded-xl"

                            />
                            <img
                                src="/pagesevenasset/stl.png"
                                alt="Gambar 2"
                                className=" 2xl:max-h-[350px] xl:max-h-[350px] lg:max-h-[300px] md:max-h-[300px] xs:max-h-[200px] sm:max-h-[200px] z-20 2xl:bottom-[-10px] xl:bottom-[-10px] lg:bottom-[-10px] md:bottom-[-50px] xs:bottom-[-50px] sm:bottom-[-10px] 2xl:left-[150px] xl:left-[150px] lg:left-[140px] md:left-[100px] xs:left-[70px] sm:left-[120px]  rounded-xl absolute"
                            />
                        </div>

                        <motion.img
                            initial={{
                                y: -50, // Start slightly below
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
                                margin: "-15%", // Adjust viewport margin to control when it appears
                            }}
                            src="/pagesevenasset/kn.png"
                            alt="Gambar 3"
                            className=" 2xl:max-h-[800px] xl:max-h-[800px] lg:max-h-[500px] md:max-h-[400px] xs:max-h-[300px] sm:max-h-[400px] top-10 z-10  relative "
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}