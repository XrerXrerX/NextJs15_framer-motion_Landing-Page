/** @format */

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Percentage() {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  const metrics = [
    { percentage: 97, label: "Performance" },
    { percentage: 100, label: "SEO" },
    { percentage: 98, label: "Accessibility" },
  ];

  const getStrokeDashOffset = (percentage: number) => {
    return circumference - (percentage / 100) * circumference;
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (percentage: number) => ({
      pathLength: percentage / 100,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 },
      },
    }),
  };

  // Create refs for each metric
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const inView1 = useInView(ref1, { once: false });
  const inView2 = useInView(ref2, { once: false });
  const inView3 = useInView(ref3, { once: false });

  const refs = [ref1, ref2, ref3];
  const inViewRefs = [inView1, inView2, inView3];

  return (
    <div className="flex justify-around items-center 2xl:h-48 xl:h-48 lg:h-48 md:h-48 xs:h-36 sm:h-48 mt-4 border border-slate-600 rounded-xl 2xl:p-8 xl:p-8 lg:p-8 md:p-8 xs:p-1 sm:p-4 relative">
      <div className="absolute top-1 left-2 h-26 w-26">
        <img src="/pagetwoasset/grthree/glighthouse.png" alt="" />
      </div>
      {metrics.map(({ percentage, label }, index) => {
        const currentPercentage = inViewRefs[index] ? percentage : 0;

        return (
          <div
            key={index}
            ref={refs[index]}
            className="relative flex flex-col items-center mt-6"
          >
            <svg
              className="2xl:w-[110px] xl:w-[110px] lg:w-[110px] md:w-[110px] xs:w-[80px] sm:w-[110px] 2xl:h-[110px] xl:h-[110px] lg:h-[110px] md:h-[110px] xs:h-[60px] sm:h-[110px]"
              // width="110" height="110"
              viewBox="0 0 200 200"
            >
              {/* Background Circle */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                stroke="rgb(150, 150, 150)"
                strokeWidth="20" // Memperlebar garis background circle
                fill="transparent"
              />
              {/* Percentage Circle */}
              <motion.circle
                cx="100"
                cy="100"
                r={radius}
                stroke="rgb(0, 255, 157)"
                strokeWidth="20" // Memperlebar garis percentage circle
                fill="transparent"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={getStrokeDashOffset(currentPercentage)}
                variants={draw}
                initial="hidden"
                animate={inViewRefs[index] ? "visible" : "hidden"}
                custom={currentPercentage}
                transform="rotate(-90 100 100)"
              />
            </svg>
            <div className="absolute flex items-center justify-center inset-0">
              <span className="2xl:text-xl xl:text-xl lg:text-xl md:text-xl xs:text-sm sm:text-xl text-gray-200 pb-8">
                {currentPercentage}
              </span>
            </div>
            <span
              className="
                        2xl:text-xl xl:text-xl lg:text-xl md:text-xl xs:text-xxs sm:text-xl
                        mt-2 text-gray-300"
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
