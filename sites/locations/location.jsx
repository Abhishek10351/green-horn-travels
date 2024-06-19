import PackagesSection from "../../components/location/PackagesCardSection/PackageCardSection";
import Navbar from "../../components/globals/Navbar/Navbar";
import Footer from "../../components/globals/Footer/Footer";
export default function Location() {
    return (
        <>
            <Navbar />
            <main>
                <PackagesSection />
            </main>
            <Footer />
        </>
    );
}
