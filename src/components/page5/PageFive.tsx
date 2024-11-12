'use client';

import React from "react";
import {
    motion
} from "framer-motion"


export default function PageFive() {
    return (
        <div className="bg-transparent text-slate-200 mt-[150px] flex flex-col items-center justify-center h-full">
            <div className="flex  items-center justify-center w-5/6">
                <div className="flex 2xl:flex-row xl:flex-col lg:flex-col md:flex-col xs:flex-col sm:flex-col items-center justify-evenly mb-4 h-full  w-full gap-2">

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
                        className=" 2xl:w-2/5 xl:w-11/12 lg:w-11/12 md:w-11/12 xs:w-full sm:w-full"> {/* Kolom 2: 40% */}
                        <p className="2xl:text-5xl xl:text-6xl lg:text-6xl md:text-5xl xs:text-2xl sm:text-2xl  font-semibold inline-block bg-gradient-to-r from-white to-sky-500 bg-clip-text text-transparent whitespace-nowrap mb-2 " >
                            Website Development
                        </p>
                        <p className="2xl:text-3xl xl:text-4xl lg:text-4xl md:text-4xl xs:text-md sm:text-xl text-slate-200">
                            Digitalisasi untuk Pertumbuhan Bisnis
                        </p>
                        <p className="2xl:text-base xl:text-base lg:text-base md:text-sm xs:text-xxss sm:text-base text-slate-300 mb-3">
                            Memiliki website yang optimal bukan hanya sekadar pilihan,
                            <br />
                            tetapi sebuah keharusan untuk mendorong pertumbuhan bisnis.
                            <br />
                            Digitalisasi memberikan kesempatan bagi bisnis Anda untuk
                            <br />
                            menjangkau konsumen yang lebih luas.
                        </p>
                        <button className="bg-sky-500 text-white 2xl:pl-2 xl:pl-2 lg:pl-2 md:pl-2 xs:pl-2 sm:pl-2 2xl:py-1 xl:py-1 lg:py-1 md:py-1 xs:py-1 sm:py-1 2xl:px-1 xl:px-1 lg:px-1 md:px-1 xs:px-1 sm:px-1  rounded-full 2xl:text-sm xl:text-sm lg:text-sm md:text-xs xs:text-xxs sm:text-xs font-light flex items-center gap-2 border border-transparent transition duration-300 hover:bg-transparent hover:border-sky-500">
                            Konsultasi Sekarang
                            <span className="rounded-full bg-[#0B0B0B]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="m14 16l4-4m0 0l-4-4m4 4H6" />
                                </svg>
                            </span>
                        </button>

                    </motion.div>
                    <div className="flex mt-4 relative justify-around">

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
                            src="/pagefiveasset/img1.png"
                            alt="Gambar 1"
                            className="2xl:max-w-[550px] xl:max-h-[800px] lg:max-h-[500px] xs:max-h-[250px] sm:max-h-[400px] z-10 md:max-h-[400px]   rounded-xl"
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
                            src="/pagefiveasset/fr.png"
                            alt="Gambar 2"
                            className="absolute 2xl:max-w-[1050px] lg:max-w-[1050px] xl:max-w-[1050px] md:max-w-[1050px] sm:max-w-[1050px] xs:max-w-[1050px] xl:max-h-[450px] 2xl:max-h-[500px] md:max-h-[400px] sm:max-h-[570px] mr-10 z-30 rounded-xl
                            hidden 2xl:block xl:block lg:block md:block "
                            style={{ objectFit: "cover" }}
                        />


                        <div className="flex flex-col items-center justify-start h-full">


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
                                src="/pagefiveasset/img2.png"
                                alt="Gambar 2"
                                className=" 2xl:max-h-[800px] xl:max-h-[500px] lg:max-h-[500px] md:max-h-[400px]  sm:max-h-[400px] xs:max-h-[200px]    z-10   rounded-xl"
                                style={{ objectFit: "cover" }}
                            />
                            <img
                                src="/pagefiveasset/img2b.png"
                                alt="Gambar 2"
                                className=" z-10 md:max-w-[300px] 2xl:max-w-[400px] xl:max-w-[400px] lg:max-w-[400px] xs:max-w-[230px] sm:max-w-[300px]   absolute  bottom-12 pl-10 rounded-xl"
                                style={{ objectFit: "cover" }}
                            />
                            <img
                                src="/pagefiveasset/rock.png"
                                alt="Gambar 2"
                                className="2xl:w-[180px] xl:w-[120px] lg:w-[120px] xs:w-[90px] sm:w-[150px]  2xl:max-h-[250px] xl:max-h-[250px] md:w-[160px] lg:max-h-[250px] xs:max-h-[120px] sm:max-h-[190px] z-20  bottom-2  rounded-xl"
                                style={{
                                    objectFit: "cover",
                                    position: "absolute",
                                    bottom: "-50px",  // Offset from the bottom
                                    right: "150px",   // Offset from the right
                                }}
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
                            src="/pagefiveasset/img3.png"
                            alt="Gambar 3"
                            className=" 2xl:max-h-[760px] xl:max-h-[500px] lg:max-h-[500px] xs:max-h-[250px] sm:max-h-[400px]  md:max-h-[400px]  top-10 z-10  relative "
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>



    )
}