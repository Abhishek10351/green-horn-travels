import "./Navbar.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image
                    src="/assets/logo/logo2.png"
                    alt="Logo"
                    width={300}
                    height={300}
                />
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
                    <Link href="/about-us">About Us</Link>
                </li>
                <li id="drop">
                    <Link href="/tour-packages">Packages</Link>
                    <ul>
                        <li>
                            <Link href="/tour-packages/Assam">Assam</Link>
                        </li>
                        <li>
                            <Link href="/tour-packages/Meghalaya">
                                Meghalaya
                            </Link>
                        </li>
                        <li>
                            <Link href="/tour-packages/Arunachal-Pradesh">
                                Arunachal Pradesh
                            </Link>
                        </li>

                        <li>
                            <Link href="/tour-packages">View all..</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="/car-rentals">Car Rentals</Link>
                </li>
                <li>
                    <Link href="/contact-us">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
