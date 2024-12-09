/** @format */

import { div } from "framer-motion/client";
import Marquee from "react-fast-marquee";

export default function Marque() {
  const logos = [
    "/react.png",
    "/add.png",
    "/edd.png",
    "/udd.png",
    "/figma.png",
    "/css.png",
    "/html5.png",
    "/Vector.png",
    "/tailwind.png",
  ];

  return (
    <div className="flex flex-col ">
      {/* Konten lainnya di atas */}
      <div className="flex-grow">
        {/* Elemen lain di atas */}
        <p className="text-white text-center mb-4">
          Teknologi Yang Kami Gunakan
        </p>
        <div className="w-full bg-dark  mt-6">
          <div className="relative overflow-hidden w-full mx-auto flex flex-col justify-center items-start h-full">
            <Marquee
              speed={30}
              gradient={true}
              gradientColor="rgba(40, 173, 250, 1)"
              autoFill={true}
            >
              <div className="flex justify-between">
                {logos.map((url, index) => (
                  <div
                    className="flex flex-col items-center justify-center h-auto max-w-[150px] mr-28"
                    key={index}
                  >
                    <img src={url} alt={`Skill ${index + 1}`} />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
