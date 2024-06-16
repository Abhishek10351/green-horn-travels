"use client";
import "./Carousel.css";
import Glide from "@glidejs/glide";
import { useEffect } from "react";
import { Buttons } from "./Buttons";
import SliderButtons from "./SliderButtons";
import Image from "next/image";
export default function Carousel() {
    const image_route = "/assets/clients/";
    const images = [];
    for (let i = 1; i <= 13; i++) {
        images.push(`${image_route}image-${i}.jpg`);
    }
    const carousel_settings = {
        type: "carousel",
        // startAt: 0,
        perView: 6,
        // focusAt: "center",
        gap: 100,
        autoplay: 500,
        animationDuration: 800,

        breakpoints: {
            1024: {
                perView: 5,
            },
            600: {
                perView: 3,
            },
            400: {
                perView: 2,
            },
            300: {
                perView: 1,
            },
        },
    };
    useEffect(() => {
        const c = new Glide(".glide", carousel_settings);
        c.mount();
        // when window loses focus, pause the carousel
        window.addEventListener("blur", () => {
            c.pause();
        });
        // when window gains focus, play the carousel
        window.addEventListener("focus", () => {
            c.play();
        });
    });

    return (
        <>
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {images.map((image, index) => (
                            <li key={index} className="glide__slide">
                                <Image
                                    src={image}
                                    alt=""
                                    width={300}
                                    height={300}
                                    className="glide__image"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <Buttons />
                <SliderButtons images={images} />
            </div>
        </>
    );
}
