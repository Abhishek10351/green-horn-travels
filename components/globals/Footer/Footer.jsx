import "./Footer.css";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <Image
                    className="footer-logo-img"
                    src="/assets/logo/logo2.png"
                    alt=""
                    width="100"
                    height="100"
                />
                <p>Green Horn Travels</p>
            </div>
            <div className="footer-links">
                <h3>Quick Links</h3>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About us</a>
                    </li>
                    <li>
                        <a href="/locations">Packages</a>
                    </li>
                    <li>
                        <a href="/rentals">Car Rentals</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className="footer-address">
                <h3>Address</h3>
                <address>
                    Lichubagan, Hengrabari Guwahati, Assam <br />
                    Pin Code - 781036
                </address>
            </div>
            <div className="footer-contact">
                <h3 className="contact-details">Contact Details</h3>
                <p>
                    Phone No: <a href="tel:+91-7002822793">+91-7002822793</a>{" "}
                    <br />
                    Mail:{" "}
                    <a href="mailto:greenhorntravelsguwahati@gmail.com">
                        greenhorntravelsguwahati@gmail.com
                    </a>
                </p>
            </div>

            <div className="footer-social">
                <div className="social-icons">
                    <h3>Connect with us</h3>
                    <div className="footer-icons">
                        <a href="tel:+917002822793">
                            <i className="fa fa-phone"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="https://wa.me/7002822793">
                            <i className="fa fa-whatsapp"></i>
                        </a>
                        <a href="https://www.instagram.com/green_horn_travels">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="mailto:greenhorntravelsguwahati@gmail.com">
                            <i className="fa fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-map">
                <h3>Our Location</h3>
                <iframe
                    className="map-iframe"
                    title="office-location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.3202272193926!2d91.8001233!3d26.153698499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59007cbafba1%3A0x806a75f100c1fe73!2sGreen%20Horn%20Travels%20-%20Travel%20Agency%20in%20Guwahati!5e0!3m2!1sen!2sin!4v1717577556663!5m2!1sen!2sin"
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
}
