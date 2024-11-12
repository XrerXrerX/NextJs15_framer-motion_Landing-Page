"use client";
import Marquee from "react-fast-marquee";

const tof = [
    '/pagethreeasset/marqa1.png',
    '/pagethreeasset/marqa2.png',
];

const tof2 = [
    '/pagethreeasset/marqb1.png',
    '/pagethreeasset/marqb2.png',
];

const tof3 = [
    '/pagethreeasset/marqc1.png',
    '/pagethreeasset/marqc2.png',
    '/pagethreeasset/marqc3.png',
    '/pagethreeasset/marqc4.png',
];

const tof4 = [
    '/pagethreeasset/marqd1.png',
    '/pagethreeasset/marqd2.png',
    '/pagethreeasset/marqd3.png',
    '/pagethreeasset/marqd4.png',
];


export default function PageThree() {
    const rowOneWords = ["Portofolio", "Personal", "Agency", "Startup", "Landing Page"];
    const rowTwoWords = ["Blog", "UMKM", "Sekolah", "Aplikasi Mobile", "Lihat Semua"];
    return (
        <div className="bg-transparent text-slate-200  rounded-lg mt-12 pt-10 flex flex-col items-center h-full">
            <div className="flex flex-col w-full mt-8 ">
                <div className="flex  mb-4 gap-2  items-center ">
                    <div className="justify-center items-center 2xl:w-3/4 xl:w-3/4 p-8 lg:w-full w-full" > {/* Kolom 1: 60% */}
                        <p
                            className=" inline-block text-xl lg:text-5xl bg-gradient-to-r from-white to-sky-500 bg-clip-text text-transparent whitespace-nowrap">Portofolio</p>
                        <p className="text-3xl lg:text-3xl sm:text-2xl xs:text-xl lg:font-bold text-slate-200 ">Proyek Yang Mendorong Bisnis Anda Maju</p>
                        <p className="text-md xl:text-base text-slate-200 lg:text-xl lg:mt-2 sm:text-xs xs:text-xxs ">
                            Telusuri portofolio kami untuk melihat bagaimana kami membantu klien dari berbagai
                            <br />   industri mencapai tujuan bisnis mereka melalui solusi digital yang inovatif
                            <br />  dan tepat sasaran. Temukan inspirasi untuk proyek Anda berikutnya!
                        </p>


                        <div className="space-y-3 mt-4 mr-8 hidden 2xl:block xl:block lg:block md:block sm:block">
                            {/* First Row */}
                            <div className="flex justify-start 2xl:gap-4 xs:gap-2">
                                {rowOneWords.map((word, index) => (
                                    <div
                                        key={index}
                                        className="border border-slate-300 2xl:text-lg xl:text-lg lg:text-lg md:text-base  xs:text-xxss bg-transparent text-slate-200 text-center 2xl:px-4 xl:px-4 lg:px-4 md:px-2 xs:px-2 2xl:py-2 xl:py-2 lg:py-2 md:py-1 xs:py-1 rounded-xl font-bold "
                                    >
                                        {word}
                                    </div>
                                ))}
                            </div>

                            {/* Second Row */}
                            <div className="flex justify-start gap-4">
                                {rowTwoWords.map((word, index) => (
                                    <button
                                        key={index}
                                        className={`border border-slate-300  text-center 2xl:text-lg xl:text-lg lg:text-lg md:text-base  xs:text-xxss  2xl:py-2 xl:py-2 lg:py-2 md:py-1 xs:py-1 2xl:px-4 xl:px-4 lg:px-4 md:px-2 xs:px-2 rounded-xl font-bold cursor-pointer transition-colors duration-200 ${index === rowOneWords.length - 1
                                            ? "bg-white text-black" // Background putih dan teks hitam untuk item terakhir
                                            : "bg-transparent text-slate-200 hover:bg-slate-700 hover:text-white" // Style default dengan hover effect
                                            }`}
                                        onClick={() => console.log(`Clicked on ${word}`)} // Tambahkan aksi klik di sini
                                    >
                                        {word}
                                    </button>
                                ))}
                            </div>
                        </div>



                    </div>
                    <div className=" w-3/4 hidden 2xl:block xl:block"> {/* Kolom 2: 40% */}
                        <div className="w-full bg-dark dark:bg-[#1a1a1a] ">
                            <div className="relative overflow-hidden  max-w-[1000px] mx-auto flex flex-col justify-center items-start h-full">
                                <Marquee speed={60} gradient={true} gradientColor='#0B0B0B' autoFill={true}>
                                    <div className="flex justify-between">
                                        {tof.map((url, index) => (
                                            <div className="flex flex-col items-center justify-center h-full max-w-[450px] w-full" key={index}>
                                                <img src={url} alt={`Skill ${index + 1}`} />
                                            </div>
                                        ))}
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                        <div className="w-full bg-dark dark:bg-[#1a1a1a] ">
                            <div className="relative overflow-hidden  max-w-[1000px] mx-auto flex flex-col justify-center items-start h-full">
                                <Marquee speed={60} gradient={true} gradientColor='#0B0B0B' autoFill={true} direction="right">
                                    <div className="flex justify-between">
                                        {tof2.map((url, index) => (
                                            <div className="flex flex-col items-center justify-center h-full max-w-[450px] w-full" key={index}>
                                                <img src={url} alt={`Skill ${index + 1}`} />
                                            </div>
                                        ))}
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full mb-4 gap-2">
                    <div className=" w-full"> {/* Kolom 2: 40% */}
                        <div className="w-full bg-dark dark:bg-[#1a1a1a] ">
                            <div className="relative overflow-hidden  w-full mx-auto flex flex-col justify-center items-start h-full">
                                <Marquee speed={60} gradient={false} gradientColor='#0B0B0B' autoFill={true}>
                                    <div className="flex justify-between gap-2">
                                        {tof3.map((url, index) => (
                                            <div className="flex flex-col items-center justify-center h-full max-w-[450px] w-full" key={index}>
                                                <img src={url} alt={`Skill ${index + 1}`} />
                                            </div>
                                        ))}
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>                </div>
                <div className="flex w-full mb-4 gap-2">
                    <div className=" w-full"> {/* Kolom 2: 40% */}
                        <div className="w-full bg-dark dark:bg-[#1a1a1a] ">
                            <div className="relative overflow-hidden  w-full mx-auto flex flex-col justify-center items-start h-full">
                                <Marquee speed={60} gradient={false} gradientColor='#0B0B0B' autoFill={true} direction="right">
                                    <div className="flex justify-between gap-2">
                                        {tof4.map((url, index) => (
                                            <div className="flex flex-col items-center justify-center h-full max-w-[450px] w-full" key={index}>
                                                <img src={url} alt={`Skill ${index + 1}`} />
                                            </div>
                                        ))}
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}