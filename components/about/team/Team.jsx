import "./team.css";
import Image from "next/image";

export default function Team() {
    return (
        <section className="team">
            <p>
                Our team of experienced travel experts is dedicated to crafting
                personalized travel experiences tailored to your interests,
                preferences, and budget. From arranging accommodations and
                transportation to organizing guided tours and activities, we
                take care of every detail so you can focus on enjoying your
                journey to the fullest.
            </p>
            <Image
                src="/assets/illustrations/travelboy.png"
                alt="travelboy"
                width={500}
                height={500}
            />
        </section>
    );
}
