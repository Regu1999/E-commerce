import HomeBanner from "../Component/HomeBanner"
import Designers from "../Component/Designers"
import CostomDesign from "../Component/CostomDesign"
import Promotion from "../Component/Promotion"
import Footer from "../Component/Footer"
export default function Home() {
    return <main className=" max-[639px]:mb-10">
        <HomeBanner />
        <Designers />
        <CostomDesign />
        <Promotion />
        <Footer />
    </main>
}