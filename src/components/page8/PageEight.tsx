/** @format */

"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PageEight() {
  return (
    <div className="bg-transparent text-slate-200 2xl:mt-[150px] xl:mt-[150px] lg:mt-[150px] md:mt-[250px] xs:mt-[250px] sm:mt-[150px]  flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center 2xl:w-5/6 xl:w-5/6 lg:w-5/6 md:w-full xs:w-full sm:w-full">
        <div className="flex 2xl:flex-row xl:flex-row lg:flex-col-reverse md:flex-col-reverse xs:flex-col-reverse sm:flex-col-reverse items-center justify-evenly mb-4 h-full  w-full gap-2">
          <div className="flex   mt-4 relative justify-center">
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#18191b] via-transparent to-[#18191b] z-30 rounded-xl pointer-events-none"
              style={{ backgroundSize: " 99% 100%" }}
            ></div>

            <div className="relative w-full z-20 rounded-xl mt-5  p-1">
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
                  },
                }}
                viewport={{
                  margin: "-30%", // Adjust viewport margin to control when it appears
                }}
                src="/pageeightasset/st.png"
                alt="Gambar 2"
                className="w-full h-auto rounded-xl"
                style={{ objectFit: "cover" }}
              />
            </div>
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
                  stiffness: 100,
                  damping: 10,
                },
                opacity: {
                  duration: 0.3,
                },
              }}
              viewport={{
                margin: "-20%",
              }}
              src="/pageeightasset/vis.png"
              alt="Gambar 2"
              className="absolute w-[280px] xs:w-[180px] sm:w-[200px] ml-[200px] top-[120px] z-20 rounded-xl"
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
              },
            }}
            viewport={{
              margin: "-10%", // Adjust viewport margin to control when it appears
            }}
            className=" 2xl:w-2/5 xl:w-2/5 lg:w-11/12 md:w-11/12 xs:w-11/12 sm:w-11/12"
          >
            {" "}
            {/* Kolom 2: 40% */}
            <p className="2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl xs:text-xl sm:text-2xl  font-semibold inline-block bg-gradient-to-r from-white to-sky-500 bg-clip-text text-transparent whitespace-nowrap mb-2 ">
              search engine optimization (SEO)
            </p>
            <p className="2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl xs:text-lg sm:text-xl text-slate-200">
              Optimalkan Visibilitas Website anda
            </p>
            <p className="2xl:text-base xl:text-base lg:text-base md:text-sm xs:text-xxss sm:text-base text-slate-300 mb-3">
              Dengan teknik optimasi dan analisis mendalam, tim kami siap
              <br />
              meningkatkan traffic organik dan menarik pengunjung yang tepat.
              Kami
              <br />
              fokus pada pengembangan strategi SEO yang efektif, mulai dari
              riset kata
              <br />
              kunci hingga optimasi konten, untuk memastikan bisnis Anda mudah
              <br />
              ditemukan dan tumbuh pesat di era digital
            </p>
            <button className="bg-sky-500 text-white pl-3 rounded-full text-sm font-light flex items-center gap-2 border border-transparent transition duration-300 hover:bg-transparent hover:border-sky-500 z-40 ">
              Konsultasi Sekarang
              <span className="rounded-full bg-[#0B0B0B]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.5em"
                  height="2.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                    d="m14 16l4-4m0 0l-4-4m4 4H6"
                  />
                </svg>
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
