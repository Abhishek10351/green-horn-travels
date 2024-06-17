// import { useEffect } from "react";
import "./Navbar.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo/logo1.png";

const Navbar = () => {
    const handleScroll = () => {
        const navbar = document.querySelector("nav");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    };
    // useEffect(() => {
    //   window.addEventListener('scroll', handleScroll);
    // }, []);

    return (
        <nav>
            <div className="logo">
                <Link href="/">
                    <Image
                        src="/assets/logo/logo1.png"
                        alt="Logo"
                        width={300}
                        height={300}
                    />
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
                    <Link href="/about" id="d">
                        About Us
                    </Link>
                </li>
                <li id="drop">
                    <Link href="/locations" id="d">
                        Packages
                    </Link>
                    <ul>
                        <li>
                            <Link href="/location/Assam" id="d">
                                Assam
                            </Link>
                        </li>
                        <li>
                            <Link href="/location/Meghalaya" id="d">
                                Meghalaya
                            </Link>
                        </li>
                        <li>
                            <Link href="/location/Arunachal Pradesh" id="d">
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
                    <Link href="/rentals" id="d">
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
