'use client';

import React from "react";
import {
    motion,
    useInView,
    useMotionValueEvent,
    useScroll,
    useTransform
} from "framer-motion"


export default function PageFour() {
    const images = [
        '/pagefourasset/coid.png',
        '/pagefourasset/com.png',
        '/pagefourasset/id.png',
        '/pagefourasset/info.png',
        '/pagefourasset/net.png',
        '/pagefourasset/org.png',
        '/pagefourasset/org.png',
        '/pagefourasset/site.png',
        '/pagefourasset/web.png',
        '/pagefourasset/info.png',
        '/pagefourasset/coid.png',
        '/pagefourasset/com.png',
    ];

    return (
        <div className="relative flex justify-center items-center h-screen overflow-hidden">
            {/* Concentric Circles */}
            {/* Concentric Circles */}
            {[...Array(12)].map((_, i) => {
                // Define specific angles for each image position
                const angles = [null, null, 0, 190, 40, 320, 150, 200, 20, 170, 190];
                const angle = angles[i] || 0; // Default to 0 if there aren't enough angles
                const imageSrc = images[i % images.length]; // Cycle through images
                if (angles[i] === null) {
                    return (
                        <div
                            key={i}
                            className="absolute rounded-full border border-gray-800"
                            style={{
                                width: `${150 + i * 150}px`, // Adjust for spacing between circles
                                height: `${150 + i * 150}px`,
                                zIndex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                        </div>
                    )
                }

                if (angles[i] === 170) {
                    return (
                        <motion.div
                            initial={{
                                scale: 0, // Memulai sedikit lebih besar
                                opacity: 0.5, // Awalnya transparan
                            }}
                            whileInView={{
                                scale: 1, // Kembali ke ukuran normal
                                opacity: 1, // Menjadi tidak transparan
                            }}
                            transition={{
                                scale: {
                                    type: "spring", // Efek pegas untuk transisi halus
                                    stiffness: 100, // Stiffness untuk kontrol efek pegas
                                    damping: 10, // Pengurangan kecepatan pegas
                                },
                                opacity: {
                                    duration: 0.3, // Durasi transisi opacity
                                }
                            }}
                            viewport={{
                                margin: "-20%", // Menyesuaikan margin viewport
                            }}
                            key={i}
                            className="absolute rounded-full border border-gray-800"
                            style={{
                                width: `${150 + i * 150}px`, // Adjust for spacing between circles
                                height: `${150 + i * 150}px`,
                                zIndex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {/* Position Image at Specific Angle without rotating it */}
                            <img

                                src={imageSrc}
                                className="w-12 h-12 rounded-full absolute"
                                style={{
                                    transform: `rotate(${angle}deg) translate(${(150 + i * 150) / 2}px) rotate(${-angle}deg)`, // Cancels the rotation effect
                                }}
                            />

                            <img
                                src={imageSrc}
                                className="w-12 h-12 rounded-full absolute"
                                style={{
                                    transform: `rotate(${angle + 180}deg) translate(${(150 + i * 150) / 2}px) rotate(${-angle + 180}deg)`, // Cancels the rotation effect
                                }}
                            />
                        </motion.div>
                    )
                }
                return (
                    <motion.div
                        initial={{
                            scale: 0, // Memulai sedikit lebih besar
                            opacity: 0.5, // Awalnya transparan
                        }}
                        whileInView={{
                            scale: 1, // Kembali ke ukuran normal
                            opacity: 1, // Menjadi tidak transparan
                        }}
                        transition={{
                            scale: {
                                type: "spring", // Efek pegas untuk transisi halus
                                stiffness: 100, // Stiffness untuk kontrol efek pegas
                                damping: 10, // Pengurangan kecepatan pegas
                            },
                            opacity: {
                                duration: 0.3, // Durasi transisi opacity
                            }
                        }}
                        viewport={{
                            margin: "-20%", // Menyesuaikan margin viewport
                        }}
                        key={i}
                        className="absolute rounded-full border border-gray-800"
                        style={{
                            width: `${150 + i * 150}px`, // Adjust for spacing between circles
                            height: `${150 + i * 150}px`,
                            zIndex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {/* Position Image at Specific Angle without rotating it */}
                        <img
                            src={imageSrc}
                            className="w-12 h-12 rounded-full absolute"
                            style={{
                                transform: `rotate(${angle}deg) translate(${(150 + i * 150) / 2}px) rotate(${-angle}deg)`, // Cancels the rotation effect
                            }}
                        />
                    </motion.div>
                );
            })}




            {/* Center Content */}
            <div className="relative z-10 flex flex-col items-center text-center p-6 bg-transparent rounded-lg shadow-lg max-w-lg">
                <img
                    src={'/pagefourasset/ligal.png'}
                    alt="Centered Image"
                    className="w-20 h-20 rounded-full mb-4" // Add spacing below image if needed
                />

                <p className="text-3xl font-semibold text-slate-200">Mengapa Bisnis Anda Butuh</p>
                <p className="text-3xl font-semibold inline-block bg-gradient-to-r from-white to-sky-500 bg-clip-text text-transparent whitespace-nowrap mb-2">
                    Sentuhan Digital
                </p>

                <p className="text-slate-200 mb-1 text-sm">
                    Di era digital saat ini, konsumen lebih sering mencari produk dan jasa melalui internet. Bisnis
                    yang memiliki website akan lebih mudah ditemukan dan dipercaya oleh pelanggan, karena website
                    berfungsi seperti toko atau kantor online yang selalu siap melayani selama 24 jam tanpa henti.
                    Dengan website, bisnis Anda selalu terbuka dan siap menyambut peluang kapan saja
                </p>

                <p className="text-slate-400 mb-4">Temukan solusi digital untuk bisnis Anda</p>
                <button className="bg-transparent text-white px-8 py-2 rounded-md border border-sky-500 shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                    Explore
                </button>
            </div>

        </div>
    );
}
