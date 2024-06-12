import "./Footer.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <Image
          src="/public/assets/logo/white-bg.png"
          alt=""
          width="100"
          height="100"
        />
        <p>Green Horn Travels</p>
      </div>
      <div className="footer-links">
        <section className="quicklinks">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-us">About us</a>
            </li>
            <li>
              <a href="#">Packages</a>
            </li>
            <li>
              <a href="#">Car Rentals</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </section>

        <section className="address">
          <h3>Address</h3>
          <address>
            Lichubagan, Hengrabari Guwahati, Assam <br />
            Pin Code - 781036
          </address>
        </section>
      </div>

      <div className="footer-social">
        <div className="social-icons">
          <h3>Connect with us</h3>
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-whatsapp"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="footer-map">
        <h3>Our Location</h3>
        <iframe
          className="map-iframe"
          title="office-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.3202272193926!2d91.8001233!3d26.153698499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59007cbafba1%3A0x806a75f100c1fe73!2sGreen%20Horn%20Travels%20-%20Travel%20Agency%20in%20Guwahati!5e0!3m2!1sen!2sin!4v1717577556663!5m2!1sen!2sin"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Green Horn Travels Ltd.
          <br /> <span id="rights">All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
