
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
                <div className="flex mb-4 gap-2 ">
                    <div className="w-1/2 p-8" > {/* Kolom 1: 60% */}
                        <p
                            className=" inline-block text-xl bg-gradient-to-r from-white to-sky-500 bg-clip-text text-transparent whitespace-nowrap">Portofoio</p>
                        <p className="text-xl text-slate-200">Proyek Yang Mendorong Bisnis Anda Maju</p>
                        <p
                            className="text-slate-400">Telusuri portofolio kami untuk melihat bagaimana kami membantu
                            <br />
                            klien dari berbagai industri mencapai tujuan bisnis mereka melalui
                            <br />
                            solusi digital yang inovatif dan tepat sasaran. Temukan inspirasi
                            <br />
                            untuk proyek Anda berikutnya!</p>


                        <div className="space-y-3 mt-3 mr-8">
                            {/* First Row */}
                            <div className="flex justify-start gap-2">
                                {rowOneWords.map((word, index) => (
                                    <div
                                        key={index}
                                        className="border border-slate-300 bg-transparent text-slate-200 text-center px-4 py-2 rounded-xl text-sm"

                                    >
                                        {word}
                                    </div>
                                ))}
                            </div>

                            {/* Second Row */}
                            <div
                                className="flex justify-start gap-2">
                                {rowTwoWords.map((word, index) => (
                                    <div
                                        key={index}
                                        className="border border-slate-300 bg-transparent text-slate-200 text-center px-4 py-2 rounded-xl text-sm"
                                    >
                                        {word}
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>
                    <div className=" w-1/2"> {/* Kolom 2: 40% */}
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