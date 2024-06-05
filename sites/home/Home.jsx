import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import TopPackagesSection from "../../components/TopPackagesSection/TopPackagesSection";
import Footer from "../../components/Footer/Footer";
export function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <TopPackagesSection />
            <Footer />
        </>
    );
}
