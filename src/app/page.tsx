
import Header from "@/components/page1/Header"
import Marque from "@/components/page1/Marquee"
import PageTwo from "@/components/page2/PageTwo"
import PageThree from "@/components/page3/PageThree"
import PageFour from "@/components/page4/PageFour"
import PageFive from "@/components/page5/PageFive"
import PageSix from "@/components/page6/PageSix"

export default function Page() {
    return (
        <>
            <Header />
            <Marque />
            <div className='page-one'>
                <PageTwo />
            </div>
            <div className='page-two'>
                <PageThree />
            </div>
            <div className='page-two'>
                <PageFour />
            </div>

            <div className='page-two'>
                <PageFive />
            </div>

            <div className='page-two'>
                <PageSix />
            </div>
        </>
    );
}
