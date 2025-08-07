/** @format */

"use client";
import Percentage from "@/components/page2/progressbar/Percentage";

import React from "react";
import { motion } from "framer-motion";

export default function PageTwo() {
  return (
    <div>
      <div className="bg-transparent text-slate-200 rounded-lg mt-12 flex flex-col items-center h-full">
        <motion.p
          className="text-3xl text-slate-200 text-center"
          initial={{
            y: -70, // Memulai sedikit ke kiri
            opacity: 0, // Awalnya transparan
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
            },
          }}
          viewport={{
            margin: "-5%", // Menyesuaikan margin viewport
          }}
        >
          Layanan Penuh Kami <br />
          Untuk Perkembangan Bisnis Anda
        </motion.p>

        {/* Grid di bawah h2 */}
        <div className="flex flex-col w-3/4 mt-8">
          {/* Baris Pertama */}
          <div className="flex w-full mb-4 gap-2 md:flex-col xs:flex-col sm:flex-col 2xl:flex-row xl:flex-row lg:flex-row ">
            <div
              className="
                        w-3/5 
                        flex 
                        xs:w-full
                        sm:w-full
                        md:w-full
                        2xl:w-3/5  
                        xl:w-3/5 
                        lg:w-3/5 
                        "
            >
              {/* Kolom 1: 60% */}
              {/* Konten Kolom 1 */}
              <div className="bg-gray-700/20 p-4 rounded-xl border border-slate-700 overflow-hidden relative h-96  ">
                <div>
                  <p className="text-xl text-slate-200">Website Development</p>
                  <p className="2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-sm xs:text-xxs text-gray-400">
                    Kami mengembangkan website profesional dan responsif yang
                    dirancang khusus untuk mengakselerasi bisnis anda secara
                    digital. Dengan desain modern, penggunaan teknologi terkini,
                    serta optimasi SEO dan performa terbaik, kami memastikan
                    website yang user-friendly, cepat, dan siap bersaing di era
                    digital
                    <br />
                  </p>
                  <p className="text-sm text-gray-200 mt-1">
                    selengkapnya &rarr;
                  </p>
                </div>

                {/* Tumpukan Gambar ease in */}
                <div
                  className="flex 
                                2xl:space-x-[-80px] 
                                xl:space-x-[-60px]
                                lg:space-x-[-90px]
                                md:space-x-[-50px]
                                sm:space-x-[-110px]
                                xs:space-x-[-100px]
                                 mt-4 relative ml-12 "
                >
                  {" "}
                  {/* Mengatur jarak antar gambar */}
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
                      },
                    }}
                    viewport={{
                      margin: "-20%", // Menyesuaikan margin viewport
                    }}
                    src="/pagetwoasset/grone/imagea1.png"
                    alt="Gambar 1"
                    className="
                                        xl:h-60  
                                        2xl:h-80
                                        lg:h-64
                                        md:h-62
                                        sm:h-60
                                        xs:h-44
                                        z-10 border border-slate-400 rounded-xl"
                    style={{ objectFit: "cover" }}
                  />
                  <img
                    src="/pagetwoasset/grone/imagea2.png"
                    alt="Gambar 2"
                    className="
                                        xl:h-56 
                                        2xl:h-60 
                                        lg:h-56
                                        md:h-62
                                        sm:h-56
                                        xs:h-40
                                        z-20 mt-6 border border-slate-400 rounded-xl"
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
                      },
                    }}
                    viewport={{
                      margin: "-20%", // Menyesuaikan margin viewport
                    }}
                    src="/pagetwoasset/grone/imagea3.png"
                    alt="Gambar 3"
                    className="w- h-60 xl:h-52  
                                        2xl:h-52 z-30 
                                        lg:h-48
                                        md:h-62
                                        sm:h-52
                                        xs:h-36
                                        mt-12 border border-slate-400 rounded-xl"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>

            <div
              className=" w-2/5
                        flex 
                        md:w-full
                        2xl:w-3/5  
                        xl:w-3/5 
                        lg:w-3/5 
                        sm:w-full
                        xs:w-full

                        "
            >
              {" "}
              {/* Kolom 2: 40% */}
              {/* Konten Kolom 2 */}
              <div className="bg-gray-700/20 page-one-card-one p-4 rounded-xl border border-slate-700 overflow-hidden relative max-h-96">
                <div className="">
                  <p className="text-xl text-slate-200">mobile apps</p>
                  <p className="2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-sm xs:text-xxss text-gray-400">
                    Kami siap mengembangkan aplikasi mobile intuitif untuk
                    Android, dengan fokus pada user experience dan user
                    interface yang unggul. Aplikasi yang kami buat tidak hanya
                    fungsional, tetapi juga menarik, dirancang khusus untuk
                    mendukung kebutuhan bisnis Anda secara maksimal
                    <br />
                  </p>
                  <p className="text-sm text-gray-200 mt-1">
                    selengkapnya &rarr;
                  </p>
                </div>
                <div className="mt-4 lg:mt-1 space-y-4 flex flex-col items-center ">
                  <div
                    className="absolute bottom-24 
                                    2xl:left-20  
                                    md:left-16 
                                    sm:left-16 
                                    xs:left-2 
                                    lg:left-14 
                                    z-10 animate-bounce-slow delay-1"
                  >
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
                        },
                      }}
                      viewport={{
                        margin: "-20%", // Menyesuaikan margin viewport
                      }}
                      src="/pagetwoasset/grtwo/kotlin.png"
                      alt="Icon 2"
                      className="w-24 h-15 blur-[1px]"
                    />
                  </div>

                  <div
                    className="absolute bottom-28 
                                    2xl:right-24 
                                    lg:right-14
                                    md:right-16
                                    sm:right-16
                                    xs:right-2
                                    z-10 animate-bounce-slow delay-2"
                  >
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
                        },
                      }}
                      viewport={{
                        margin: "-20%", // Menyesuaikan margin viewport
                      }}
                      src="/pagetwoasset/grtwo/dart.png"
                      alt="Icon 1"
                      className="w-24 h-15 blur-[1px]"
                    />
                  </div>

                  <div
                    className="absolute bottom-8 2xl:right-24 
                                    md:right-24
                                    sm:right-24
                                    xs:right-1
                                    lg:right-2 z-10 animate-bounce-slow delay-3"
                  >
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
                        },
                      }}
                      viewport={{
                        margin: "-20%", // Menyesuaikan margin viewport
                      }}
                      src="/pagetwoasset/grtwo/reactnative.png"
                      alt="Icon 3"
                      className="w-35 h-15"
                    />
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
          <div className="flex w-full mb-4 gap-2 md:flex-col xs:flex-col sm:flex-col 2xl:flex-row xl:flex-row lg:flex-row ">
            <div
              className="
                        w-3/5 
                        flex 
                        xs:w-full
                        sm:w-full
                        md:w-full
                        2xl:w-3/5  
                        xl:w-3/5 
                        lg:w-3/5 
                        "
            >
              {/* Konten Kolom 1 */}
              <div className="bg-gray-700/20 p-4 rounded-xl border border-slate-700 overflow-hidden  relative h-96  ">
                <div>
                  <p className="text-xl text-slate-200">
                    visual design & branding
                  </p>
                  <p className="2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-sm xs:text-xxss text-gray-400">
                    Kami menawarkan solusi visual design dan branding yang
                    kreatif untuk memperkuat identitas bisnis Anda. Mulai dari
                    logo, desain kemasan, hingga materi promosi, kami
                    menciptakan elemen visual yang menarik dan kami membantu
                    bisnis Anda tampil menonjol dan relevan di pasar, membangun
                    koneksi emosional dengan audiens serta meningkatkan daya
                    saing
                    <br />
                  </p>
                  <p className="text-sm text-gray-200 mt-1">
                    selengkapnya &rarr;
                  </p>
                </div>
                <div className="flex justify-center items-center mt-2 relative gap-2">
                  {" "}
                  {/* Mengatur agar semua item rata tengah */}
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
                      },
                    }}
                    viewport={{
                      margin: "-10%", // Menyesuaikan margin viewport
                    }}
                    src="/pagetwoasset/grthree/imageb1.png"
                    alt="Gambar 1"
                    className="w-46 h-40 lg:h-28 z-10 sm:h-20 xs:h-20 rounded-xl"
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
                      },
                    }}
                    viewport={{
                      margin: "-20%", // Menyesuaikan margin viewport
                    }}
                    src="/pagetwoasset/grthree/imageb2.png"
                    alt="Gambar 2"
                    className="w-45 h-60  relative z-30 border border-slate-400 rounded-xl translate-x-3 hidden 2xl:block xl:block md:block sm:block"
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
                      },
                    }}
                    viewport={{
                      margin: "-20%", // Menyesuaikan margin viewport
                    }}
                    src="/pagetwoasset/grthree/imageb3.png"
                    alt="Gambar 3"
                    className="w-45 h-60 lg:h-52 xs:h-52 relative z-20 rounded-xl"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
            <div
              className=" w-1/2
                         flex 
                        md:w-full
                        2xl:w-3/5  
                        xl:w-3/5 
                        lg:w-3/5 
                        sm:w-full
                        xs:w-full"
            >
              {" "}
              {/* Kolom 2: 40% */}
              {/* Konten Kolom 2 */}
              <div className="page-one-card-two p-4 rounded-xl border border-slate-700 overflow-hidden relative max-h-96">
                <div>
                  <p className="text-xl text-slate-200">
                    optimasi rank google (SEO)
                  </p>
                  <p className="2xl:text-sm xl:text-sm text-gray-400 xl:text-xxs lg:text-xxss text-xxss">
                    Kami menyediakan layanan SEO untuk meningkatkan website Anda
                    di Google dan mesin pencari lainnya. Dengan strategi SEO
                    yang terfokus pada riset kata kunci, optimasi konten, kami
                    memastikan visibilitas lebih tinggi, peningkatan traffic
                    organik yang lebih besar, sehingga bisnis Anda dapat tumbuh
                    secara berkelanjutan di era digital
                    <br />
                  </p>
                  <p className="text-sm text-gray-200 mt-4">
                    selengkapnya &rarr;
                  </p>
                </div>

                <Percentage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
