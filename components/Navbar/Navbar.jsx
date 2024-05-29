// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../../public/assets/logo/white-bg.png'; 
import Link from 'next/link'

const Navbar = () => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const navbar = document.querySelector('nav');
  //     if (window.scrollY > 50) {
  //       navbar.classList.add('scrolled');
  //     } else {
  //       navbar.classList.remove('scrolled');
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fa fa-bars"></i>
      </label>

      <ul className="list">
        <li id="active">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/book" id="d">
            About Us
          </Link>
        </li>
        <li id="drop">
          <Link href="/locations" id="d">
            Packages
          </Link>
          <ul>
            <li>
              <Link href="/locations/goa" id="d">
                Assam
              </Link>
            </li>
            <li>
              <Link href="/locations/uttarakhand" id="d">
                Meghalaya
              </Link>
            </li>
            <li>
              <Link href="/locations/kerala" id="d">
                Arunachal Pradesh
              </Link>
            </li>
            
            <li>
              <Link href="/locations" id="d">
                View all..
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/locations" id="d">
            Car Rentals
          </Link>
        </li>
        <li>
          <Link href="/contact" id="d">
            Contact Us 
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
