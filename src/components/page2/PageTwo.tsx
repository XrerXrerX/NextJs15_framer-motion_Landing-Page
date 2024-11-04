"use client";
import Percentage from "@/components/page2/progressbar/Percentage";

import React from "react";
import {
    motion,
    useInView,
    useMotionValueEvent,
    useScroll,
    useTransform
} from "framer-motion"



export default function PageTwo() {
    return (
        <div>
            <div className="bg-transparent text-slate-200 p-14 rounded-lg mx-4 mt-12 flex flex-col items-center h-full">

                <motion.p
                    className="text-3xl text-slate-200 text-center"
                    initial={{
                        y: -70, // Memulai sedikit ke kiri
                        opacity: 0.0, // Awalnya transparan
                    }}
                    whileInView={{
                        y: 0, // Bergerak kembali ke posisi normal
                        opacity: 1, // Menjadi tidak transparan
                    }}
                    transition={{
                        x: {
                            type: "spring", // Efek pegas untuk transisi halus
                            stiffness: 50, // Stiffness untuk kontrol efek pegas
                            damping: 10, // Pengurangan kecepatan pegas
                        },
                        opacity: {
                            duration: 0.8, // Durasi transisi opacity
                        }
                    }}
                    viewport={{
                        margin: "-20%", // Menyesuaikan margin viewport
                    }}
                >
                    Layanan Penuh Kami <br />
                    Untuk Perkembangan Bisnis Anda
                </motion.p>

                {/* Grid di bawah h2 */}
                <div className="flex flex-col w-3/4 mt-8">
                    {/* Baris Pertama */}
                    <div className="flex mb-4 gap-2">
                        <div className="w-3/5 " > {/* Kolom 1: 60% */}
                            {/* Konten Kolom 1 */}
                            <div className="bg-gray-700/20 p-4 rounded-xl border border-slate-700 overflow-hidden relative max-h-96">
                                <div>
                                    <p className="text-xl text-slate-200">Website Development</p>
                                    <p className="text-sm text-gray-400">
                                        Kami mengembangkan website profesional dan responsif yang dirancang khusus untuk
                                        mengakselerasi bisnis anda secara digital. Dengan desain modern, penggunaan teknologi
                                        terkini, serta optimasi SEO dan performa terbaik, kami memastikan website yang
                                        user-friendly, cepat, dan siap bersaing di era digital
                                        <br />

                                    </p>
                                    <p className="text-sm text-gray-200 mt-1">
                                        selengkapnya &rarr;</p>
                                </div>

                                {/* Tumpukan Gambar ease in */}
                                <div className="flex space-x-[-40px] mt-4 relative ml-12 "> {/* Mengatur jarak antar gambar */}
                                    {/* <motion.img
                                        initial={{
                                            x: -100, // Memulai dari posisi di sebelah kiri
                                            opacity: 0, // Awalnya transparan
                                        }}
                                        whileInView={{
                                            x: 0, // Bergerak ke posisi normal
                                            opacity: 1, // Menjadi tidak transparan
                                        }}
                                        transition={{
                                            duration: 0.5, // Durasi transisi
                                            ease: "easeInOut", // Pilihan jenis easing
                                        }}
                                        viewport={{
                                            margin: "-50%", // Tuning margin viewport agar animasi dimulai lebih cepat atau lambat
                                        }}
                                        src="/pagetwoasset/grone/imagea1.png"
                                        alt="Gambar 1"
                                        className="w-50 h-50 z-10 border border-slate-400 rounded-xl"
                                        style={{ objectFit: "cover" }}
                                    /> */}

                                    <motion.img
                                        initial={{
                                            x: -50, // Memulai sedikit ke kiri
                                            opacity: 50, // Awalnya transparan
                                        }}
                                        whileInView={{
                                            x: 0, // Bergerak kembali ke posisi normal
                                            opacity: 1, // Menjadi tidak transparan
                                        }}
                                        transition={{
                                            x: {
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
                                        src="/pagetwoasset/grone/imagea1.png"
                                        alt="Gambar 1"
                                        className="w-50 h-50 z-10 border border-slate-400 rounded-xl"
                                        style={{ objectFit: "cover" }}
                                    />





                                    <img
                                        src="/pagetwoasset/grone/imagea2.png"
                                        alt="Gambar 2"
                                        className="w-45 h-60  z-20 mt-6 border border-slate-400 rounded-xl"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <motion.img
                                        initial={{
                                            x: 50, // Memulai sedikit ke kiri
                                            opacity: 50, // Awalnya transparan
                                        }}
                                        whileInView={{
                                            x: 0, // Bergerak kembali ke posisi normal
                                            opacity: 1, // Menjadi tidak transparan
                                        }}
                                        transition={{
                                            x: {
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
                                        src="/pagetwoasset/grone/imagea3.png"
                                        alt="Gambar 3"
                                        className="w-45 h-60  z-30 mt-12 border border-slate-400 rounded-xl"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className=" w-2/5"> {/* Kolom 2: 40% */}
                            {/* Konten Kolom 2 */}
                            <div className="bg-gray-700/20 page-one-card-one p-4 rounded-xl border border-slate-700 overflow-hidden relative max-h-96">
                                <div className="">
                                    <p className="text-xl text-slate-200">
                                        mobile apps
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        Kami siap mengembangkan aplikasi mobile intuitif untuk
                                        Android, dengan fokus pada user experience dan user interface
                                        yang unggul. Aplikasi yang kami buat tidak hanya fungsional,
                                        tetapi juga menarik, dirancang khusus untuk mendukung
                                        kebutuhan bisnis Anda secara maksimal
                                        <br />

                                    </p>
                                    <p className="text-sm text-gray-200 mt-1">
                                        selengkapnya &rarr;
                                    </p>
                                </div>
                                <div className="mt-4 space-y-4 flex flex-col items-center ">
                                    <div className="absolute bottom-20 left-5 z-10 animate-bounce-slow delay-1">
                                        <motion.img
                                            initial={{
                                                x: -20, // Memulai sedikit ke kiri
                                                opacity: -50, // Awalnya transparan
                                            }}
                                            whileInView={{
                                                x: 0, // Bergerak kembali ke posisi normal
                                                opacity: 1, // Menjadi tidak transparan
                                            }}
                                            transition={{
                                                x: {
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
                                            src="/pagetwoasset/grtwo/kotlin.png" alt="Icon 2" className="w-24 h-15 blur-[1px]" />
                                    </div>

                                    <div className="absolute bottom-28 right-4 z-10 animate-bounce-slow delay-2">
                                        <motion.img
                                            initial={{
                                                x: 20, // Memulai sedikit ke kiri
                                                opacity: -50, // Awalnya transparan
                                            }}
                                            whileInView={{
                                                x: 0, // Bergerak kembali ke posisi normal
                                                opacity: 1, // Menjadi tidak transparan
                                            }}
                                            transition={{
                                                x: {
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
                                            src="/pagetwoasset/grtwo/dart.png" alt="Icon 1" className="w-24 h-15 blur-[1px]" />
                                    </div>

                                    <div className="absolute bottom-8 right-4 z-10 animate-bounce-slow delay-3">
                                        <motion.img
                                            initial={{
                                                x: -20, // Memulai sedikit ke kiri
                                                opacity: -50, // Awalnya transparan
                                            }}
                                            whileInView={{
                                                x: 0, // Bergerak kembali ke posisi normal
                                                opacity: 1, // Menjadi tidak transparan
                                            }}
                                            transition={{
                                                x: {
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
                                            src="/pagetwoasset/grtwo/reactnative.png" alt="Icon 3" className="w-35 h-15" />
                                    </div>

                                    <img
                                        src="/pagetwoasset/grtwo/imagea4.png"
                                        alt="Gambar 1"
                                        className=" w-60 h-5 object-cover rounded-lg"
                                    />
                                    <img
                                        src="/pagetwoasset/grtwo/imagea5.png"
                                        alt="Gambar 2"
                                        className="w-72 h-800 object-cover rounded-lg"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Baris Kedua */}
                    <div className="flex w-full mb-4 gap-2">
                        <div className=" w-1/2"> {/* Kolom 1: 60% */}
                            {/* Konten Kolom 1 */}
                            <div className="bg-gray-700/20 p-4 rounded-xl border border-slate-700 overflow-hidden relative max-h-96">
                                <div>
                                    <p className="text-xl text-slate-200">
                                        visual design & branding
                                    </p>
                                    <p className="text-sm text-gray-400">

                                        Kami menawarkan solusi visual design dan branding yang kreatif untuk
                                        memperkuat identitas bisnis Anda. Mulai dari logo, desain kemasan, hingga
                                        materi promosi, kami menciptakan elemen visual yang menarik dan kami
                                        membantu bisnis Anda tampil menonjol dan relevan di pasar, membangun
                                        koneksi emosional dengan audiens serta meningkatkan daya saing
                                        <br />

                                    </p>
                                    <p className="text-sm text-gray-200 mt-1">
                                        selengkapnya &rarr;
                                    </p>
                                </div>
                                <div className="flex justify-center items-center mt-2 relative gap-2"> {/* Mengatur agar semua item rata tengah */}

                                    <motion.img
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
                                            margin: "-10%", // Menyesuaikan margin viewport
                                        }}
                                        src="/pagetwoasset/grthree/imageb1.png"
                                        alt="Gambar 1"
                                        className="w-46 h-40 z-10 rounded-xl"
                                        style={{ objectFit: "cover" }}
                                    />


                                    <motion.img
                                        initial={{
                                            x: 20, // Memulai sedikit ke kiri
                                            opacity: -50, // Awalnya transparan
                                        }}
                                        whileInView={{
                                            x: 0, // Bergerak kembali ke posisi normal
                                            opacity: 1, // Menjadi tidak transparan
                                        }}
                                        transition={{
                                            x: {
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
                                        src="/pagetwoasset/grthree/imageb2.png"
                                        alt="Gambar 2"
                                        className="w-45 h-60 relative z-30 border border-slate-400 rounded-xl translate-x-3"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <motion.img
                                        initial={{
                                            x: 20, // Memulai sedikit ke kiri
                                            opacity: -50, // Awalnya transparan
                                        }}
                                        whileInView={{
                                            x: 0, // Bergerak kembali ke posisi normal
                                            opacity: 1, // Menjadi tidak transparan
                                        }}
                                        transition={{
                                            x: {
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
                                        src="/pagetwoasset/grthree/imageb3.png"
                                        alt="Gambar 3"
                                        className="w-45 h-60 relative z-20 rounded-xl"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>


                            </div>
                        </div>
                        <div className=" w-1/2"> {/* Kolom 2: 40% */}
                            {/* Konten Kolom 2 */}
                            <div className="page-one-card-two p-4 rounded-xl border border-slate-700 overflow-hidden relative max-h-96">
                                <div>
                                    <p className="text-xl text-slate-200">
                                        optimasi rank google (SEO)
                                    </p>
                                    <p className="text-sm text-gray-400">

                                        Kami menyediakan layanan SEO untuk meningkatkan website Anda di Google
                                        dan mesin pencari lainnya. Dengan strategi SEO yang terfokus pada riset kata
                                        kunci, optimasi konten, kami memastikan visibilitas lebih tinggi, peningkatan
                                        traffic organik yang lebih besar, sehingga bisnis Anda dapat tumbuh secara
                                        berkelanjutan di era digital
                                        <br />

                                    </p>
                                    <p className="text-sm text-gray-200 mt-4">
                                        selengkapnya &rarr;</p>
                                </div>

                                <Percentage />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

