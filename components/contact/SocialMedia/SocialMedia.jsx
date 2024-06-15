import "./SocialMedia.css";

export default function WhatsAppLink() {
  return (
    <>
      <div className="whatsapp-link">
        <p>For bookings you can contact us via WhatsApp:</p>
        <button>
          <a
            href="https://wa.me/7002822793"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <i className="fa fa-whatsapp"></i> WhatsApp Us
          </a>
        </button>
        <div className="socialhandles">
          <p>or by using our socials</p>
          <icons>
            <a
              href="https://wa.me/8638481688"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/green_horn_travels"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="mailto:greenhorntravelsguwahati@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <i className="fa fa-envelope"></i>
            </a>
          </icons>
          <phone>
            <a target="_blank" className="phone">
              <i className="fa fa-phone"></i>+91-7002822793
            </a>
          </phone>
        </div>
      </div>
    </>
  );
}
