"use client";
import "./home.css";
import { useEffect } from "react";
import Navbar from "../../components/globals/Navbar/Navbar";
import Hero from "../../components/home/Hero/Hero";
import AboutUs from "../../components/home/About us/AboutUs";
import TopPackagesSection from "../../components/home/TopPackagesSection/TopPackagesSection";
import Carousel from "../../components/home/carousel/Carousel";
import Footer from "../../components/globals/Footer/Footer";
export function Home() {
    // if scrolled change navbar colour
    function scrollFunction() {
        // Get the navbar
        var navbar = document.querySelector("nav");
        if (
            document.body.scrollTop > 100 ||
            document.documentElement.scrollTop > 100
        ) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    useEffect(() => {
        // When the user scrolls the page, execute scrollFunction
        window.onscroll = function () {
            scrollFunction();
        };
    });

    return (
        <>
            <Navbar className="home-nav" />
            <Hero />
            <AboutUs />
            <TopPackagesSection />
            <Carousel />
            <Footer />
        </>
    );
}
