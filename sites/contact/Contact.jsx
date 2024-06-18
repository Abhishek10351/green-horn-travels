import SocialMedia from "../../components/contact/SocialMedia/SocialMedia";
import ContactImage from "../../components/contact/ContactImage/ContactImage";
import Navbar from "../../components/globals/Navbar/Navbar";
import Footer from "../../components/globals/Footer/Footer";
import "./Contact.css";
export default function Contact() {
  return (
    <> <Navbar />
      <main className="contact-container">
        <SocialMedia />
        <ContactImage />
      </main>
      <Footer />
    </>
  );
}
