// src/pages/About/About.jsx
"use client";
import "./discovery.css";
// image observer
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import Image from "next/image";

export default function LocationDiscoveryCard({ ...obj }) {
    const [ref, isIntersecting] = useIntersectionObserver({
        threshold: 0.1,
    });
    const img_dir = "/public/assets/about-page-images/";

    return (
        <div
            ref={ref}
            className={`about-place ${isIntersecting ? "visible" : ""}`}
        >
            <p>{obj.text}</p>
            <Image
                src={img_dir + obj.img}
                alt={obj.location}
                width={500}
                height={500}
            />
        </div>
    );
}
