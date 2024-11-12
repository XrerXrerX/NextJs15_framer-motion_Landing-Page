"use client";

import React, { useState, useEffect } from 'react';

export default function Header() {

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [animationStage, setAnimationStage] = useState("slide-down"); // Initial state to slide down
    const words = ["Sekolah,", "Kampus,", "kantor,", "Custom,", "Usaha,"];

    useEffect(() => {
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
    }, []);

    return (
        <div className="text-white 2xl:mt-12 xl:mt-12 lg:mt-[150px] md:mt-[150px] xs:mt-[150px] sm:mt-[150px] rounded-lg  flex flex-col items-center">
            <div className="h-10 xl:h-8 lg:h-8 md:h-7 xs:h-6 sm:h-6 w rounded-full bg-gradient-to-r from-sky-500 via-white to-sky-500 p-0.5 mb-6">
                <div className="flex h-full w-full items-center justify-center bg-gray-900 back rounded-full px-8 sm:px-2 xs:px-2">
                    <p className="text-slate-300 text-md xs:text-tiny md:text-xxs sm:text-xxss ">
                        Selamat datang di layanan pembuatan website kami
                    </p>
                </div>
            </div>

            <p className="2xl:text-7xl xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-xl font-black text-center mb-2 text-slate-300 ">

                <span
                >Jasa Pembuatan Website</span> {/* Static part */}
                <span
                    className={`inline-block transition-transform duration-5000 ease-in-out animate-${animationStage.includes('bounce') ? 'slide-down animate-bounce' : animationStage} bg-gradient-to-r from-sky-500 to-white bg-clip-text text-transparent whitespace-nowrap  sm:min-w-[150px] xs:min-w-[90px] min-w-[80px]`} // Minimum width
                // style={{ width: '290px' }} // Fixed width to maintain space
                >
                    {words[currentWordIndex]}
                </span>
                <br />

                untuk Visibilitas dan Daya Tarik<br />
                di Era Digital


            </p>
            <div
                className='sm:text-xxss md:text-sm lg:text-base xl:text-xl 2xl:text-xl xs:text-xxss'>
                <p className="text-center mx-4 my-4">
                    Kami memperhatikan Branding dan Representasi Bisnis yang profesional, sehingga memenuhi berbagai <br />
                    Anda dengan desain yang menawan, fitur canggih, dan teknologi terkini 🚀.
                </p>
            </div>
            <div className="flex justify-center space-x-4">
                <button className="flex-1 bg-transparent text-white px-12 py-4 rounded-md border border-sky-500 shadow-md transition 
                xl:px-12 xl:h-16 xl:py-4 
                lg:px-6 lg:h-12 lg:py-2 
                md:px-6 md:h-12 md:py-2 
                sm:px-6 sm:h-12 sm:py-2 
                xs:px-4 xs:h-8 xs:py-1 
                 duration-300 ease-in-out transform hover:scale-105">
                    Explore
                </button>

                <button className="flex-1 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:ring-sky-800 shadow-lg shadow-sky-500/50 dark:shadow-lg dark:shadow-sky-800/80 text-white 
               xl:px-12 xl:h-16 xl:py-4 
                lg:px-6 lg:h-12 lg:py-2 
                md:px-6 md:h-12 md:py-2 
               sm:px-6 sm:h-12 sm:py-2 
                xs:px-4 xs:h-8 xs:py-1 
                rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                    Konsultasi
                </button>

            </div>
        </div>
    );
}
