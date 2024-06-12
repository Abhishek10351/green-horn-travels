export default function SliderButtons({ images}) {
    return (
        <div
            className="slider__bullets glide__bullets"
            data-glide-el="controls[nav]"
        >
            {images.map((image, index) => (
                <button
                    key={index}
                    className="slider__bullet glide__bullet"
                    data-glide-dir={`=${index}`}
                ></button>
            ))}
        </div>
    );
}
