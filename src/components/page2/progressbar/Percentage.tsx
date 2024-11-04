"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    motion,
    useInView,
    useMotionValueEvent,
    useScroll,
    useTransform
} from "framer-motion"


export default function Percentage() {

    const radius = 80;
    const circumference = 2 * Math.PI * radius;

    // Array with percentages and their corresponding labels
    const metrics = [
        { percentage: 97, label: "Performance" },
        { percentage: 100, label: "SEO" },
        { percentage: 98, label: "Accessibility" }
    ];

    const getStrokeDashOffset = (percentage) => {
        return circumference - (percentage / 100) * circumference;
    };

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (percentage) => {
            return {
                pathLength: percentage / 100, // Dynamically set path length
                opacity: 1,
                transition: {
                    pathLength: { type: "spring", duration: 1.5, bounce: 0 },
                    opacity: { duration: 0.01 },
                },
            };
        },
    };

    return (
        <div className="flex justify-around items-center h-48 mt-4 border border-slate-600 rounded-xl p-8 relative">
            <div className="absolute top-1 left-2 h-26 w-26">
                <img src="/pagetwoasset/grthree/glighthouse.png" alt="" />
            </div>
            {metrics.map(({ percentage, label }, index) => {
                const strokeDashoffset = getStrokeDashOffset(percentage);
                const [inView, setInView] = useState(false);
                const ref = useRef(null);

                // Use useInView to detect if the element is in the viewport
                const inViewRef = useInView(ref, { once: false });

                useEffect(() => {
                    if (inViewRef) {
                        setInView(true);
                    } else {
                        setInView(false);
                    }
                }, [inViewRef]);

                // Determine current percentage based on inView state
                const currentPercentage = inView ? percentage : 0;

                return (
                    <div key={index} ref={ref} className="relative flex flex-col items-center mt-6">
                        <svg width="110" height="110" viewBox="0 0 200 200">
                            {/* Background Circle */}
                            <circle
                                cx="100"
                                cy="100"
                                r={radius}
                                stroke="rgb(200, 200, 200)"
                                strokeWidth="10"
                                fill="transparent"
                            />
                            {/* Percentage Circle */}
                            <motion.circle
                                cx="100"
                                cy="100"
                                r={radius}
                                stroke="rgb(0, 255, 157)"
                                strokeWidth="10"
                                fill="transparent"
                                strokeLinecap="round"
                                strokeDasharray={circumference}
                                strokeDashoffset={getStrokeDashOffset(currentPercentage)}
                                variants={draw}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                custom={currentPercentage} // Pass current percentage to animation
                                transform="rotate(-90 100 100)" // Start from the top
                            />
                        </svg>
                        <div className="absolute flex items-center justify-center inset-0">
                            <span className="text-xl text-gray-200 pb-8">
                                {currentPercentage}
                            </span>
                        </div>
                        {/* Label below each circle */}
                        <span className="mt-2 text-gray-300">{label}</span>
                    </div>
                );
            })}
        </div>

    )
}