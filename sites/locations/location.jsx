import PackagesSection from "../../components/location/PackagesCardSection/PackageCardSection";
import Navbar from "../../components/globals/Navbar/Navbar";
import Footer from "../../components/globals/Footer/Footer";
import PackageTitle from "../../components/location/PackagesCardSection/PackageTitle";
export default function Location() {
    return (
        <>
            <Navbar />
            <PackageTitle />
            <main>
                <PackagesSection />
            </main>
            <Footer />
        </>
    );
}
