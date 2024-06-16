import './ContactImage.css';
import Image from "next/image";
// import ContactImage from "../../../public/assets/illustrations/contact3.png"; 

export default function ContactImage() {
  return (
      <div className="contact-image">
          <Image
              className="intro-carrentals-image"
              src="/assets/illustrations/contact3.png"
              alt="Car Rental"
              width={300}
              height={300}
          />
      </div>
  );
}
