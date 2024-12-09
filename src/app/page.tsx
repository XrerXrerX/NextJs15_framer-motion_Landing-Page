/** @format */

import Header from "@/components/page1/Header";
import Marque from "@/components/page1/Marquee";
import PageTwo from "@/components/page2/PageTwo";
import PageThree from "@/components/page3/PageThree";
import PageFour from "@/components/page4/PageFour";
import PageFive from "@/components/page5/PageFive";
import PageSix from "@/components/page6/PageSix";
import PageSeven from "@/components/page7/PageSeven";
import PageEight from "@/components/page8/PageEight";
import PageNine from "@/components/page9/PageNine";
import PageTen from "@/components/page10/PageTen";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/page1/Navbar";

export default function Page() {
  return (
    <>
      <div className="bg-custom relative min-h-screen">
        <Navbar />
        <Header />
        {/* Marquee dengan posisi absolute di bawah */}
        <div className="absolute bottom-0 w-full mb-2">
          <Marque />
        </div>
      </div>

      <div className="page-frone">
        <PageTwo />
      </div>
      <div className="page-two">
        <PageThree />
      </div>
      <div className="page-two hidden 2xl:block">
        <PageFour />
      </div>

      <div className="">
        <PageFive />
      </div>

      <div className="">
        <PageSix />
      </div>

      <div className="">
        <PageSeven />
      </div>
      <div className="">
        <PageEight />
      </div>
      <div className="hidden">
        <PageNine />
      </div>
      <div className="">
        <PageTen />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
}
