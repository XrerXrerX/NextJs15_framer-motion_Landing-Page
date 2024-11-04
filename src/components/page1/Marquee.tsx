import Marquee from "react-fast-marquee";

export default function Marque() {
    const logos = [
        '/react.png',
        '/add.png',
        '/edd.png',
        '/udd.png',
        '/figma.png',
        '/css.png',
        '/html5.png',
        '/vector.png',
        '/tailwind.png',
    ];

    return (
        <>
            <div className="flex-grow p-12"></div>
            <div className="flex-grow p-12"></div>
            <p className="text-white text-center mb-4">
                Teknologi Yang Kami Gunakan
            </p>
            <div className="w-full bg-dark dark:bg-[#1a1a1a]  mt-6">
                <div className="relative overflow-hidden  max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-start h-full">
                    <Marquee speed={30} gradient={true} gradientColor='rgba(41, 169, 290, 1)' autoFill={true}>
                        <div className="flex justify-between">
                            {logos.map((url, index) => (
                                <div className="flex flex-col items-center justify-center h-full max-w-[150px] mr-32" key={index}>
                                    <img src={url} alt={`Skill ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>
        </>
    );
}
