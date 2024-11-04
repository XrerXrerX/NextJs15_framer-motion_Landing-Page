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
        <div className="text-white p-14 rounded-lg mx-4 mt-12 flex flex-col items-center">
            <div className="h-10 w rounded-full bg-gradient-to-r from-sky-500 via-white to-sky-500 p-0.5 mb-4">
                <div className="flex h-full w-full items-center justify-center bg-gray-900 back rounded-full px-8">
                    <p className="text-slate-300">
                        Selamat datang di layanan pembuatan website kami
                    </p>
                </div>
            </div>

            <h1 className="text-6xl font-black text-center mb-2">
                <span>Jasa Pembuatan Website</span> {/* Static part */}
                <span
                    className={`inline-block transition-transform duration-5000 ease-in-out animate-${animationStage.includes('bounce') ? 'slide-down animate-bounce' : animationStage} bg-gradient-to-r from-sky-500 to-white bg-clip-text text-transparent whitespace-nowrap min-w-[250px]`} // Minimum width
                    style={{ width: '290px' }} // Fixed width to maintain space
                >
                    {words[currentWordIndex]}
                </span>
                <br />
                untuk Visibilitas dan Daya Tarik<br />
                di Era Digital
            </h1>
            <p className="text-center font-b mb-6 mt-4 text-xl">
                Kami memperhatikan Branding dan Representasi Bisnis yang profesional, sehingga memenuhi berbagai <br />
                Anda dengan desain yang menawan, fitur canggih, dan teknologi terkini 🚀.
            </p>
            <div className="flex justify-center space-x-4">
                <button className="flex-1 bg-transparent text-white px-12 py-4 rounded-md border border-sky-500 shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                    Explore
                </button>

                <button className="flex-1 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:ring-sky-800 shadow-lg shadow-sky-500/50 dark:shadow-lg dark:shadow-sky-800/80 text-white px-12 py-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                    Konsultasi
                </button>

            </div>
        </div>
    );
}
