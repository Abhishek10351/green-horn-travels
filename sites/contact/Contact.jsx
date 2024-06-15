import SocialMedia from "../../components/contact/SocialMedia/SocialMedia";
import ContactImage from "../../components/contact/ContactImage/ContactImage";
import Footer from "../../components/globals/Footer/Footer";
import "./Contact.css";
export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <SocialMedia />
        <ContactImage />
      </div>
      <Footer />
    </>
  );
}
