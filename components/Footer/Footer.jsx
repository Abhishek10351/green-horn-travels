import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="logo"><img src="src/assets/logo/white-bg.png" alt="" /><p>Green Horn Travels</p></div>
          
          {/* <p>Henge</p> */}
        </div>
        <div className="footer-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Packages</a></li>
            <li><a href="#">Car Rentals</a></li>
            <li><a href="#">Contact Us</a></li>
            
          </ul>
        </div>
        <div className="footer-map">
          <h3 className="footer-heading">Our Location</h3>
          <iframe
            title="office-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0192790737484!2d144.95373621532737!3d-37.81627977975133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43d7e0d7e7%3A0xb0c8c7d9f5a7b0c1!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1614310845930!5m2!1sen!2sau"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="footer-social">
          <h3 className="footer-heading">Connect with Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            
          </div>
          <div className="address">
          <h3>Address</h3>
          <p>Lichubagan, Hengrabari, Guwahati, Assam <br />
            Pin Code - 781036</p>
        </div>
      </div>
        </div>
        
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Green Horn Travels Ltd. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
