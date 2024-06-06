import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import AboutUs from "../../components/About us/AboutUs";
import TopPackagesSection from "../../components/TopPackagesSection/TopPackagesSection";
import Footer from "../../components/Footer/Footer";
export function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutUs />
            <TopPackagesSection />
            <Footer />
        </>
    );
}
