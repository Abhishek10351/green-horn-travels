import "./Footer.css";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <div className="logo">
                        <Image
                            src="/public/assets/logo/white-bg.png"
                            alt=""
                            width="100"
                            height="100"
                        />
                        <p>Green Horn Travels</p>
                    </div>
                </div>
                <div className="footer-links">
                    <h3 className="footer-heading">Quick Links</h3>
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
                </div>
                <div className="footer-map">
                    <h3 className="footer-heading">Our Location</h3>
                    <iframe
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
                <div className="footer-social">
                    <h3 className="footer-heading">Connect with Us</h3>
                    <div className="social-icons">
                        <a href="#">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                    <div className="address">
                        <h3>Address</h3>
                        <address>
                            Lichubagan, Hengrabari, Guwahati, Assam <br />
                            Pin Code - 781036
                        </address>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    &copy; {new Date().getFullYear()} Green Horn Travels Ltd.
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
