export function Buttons() {
    return (
        <div className="glide__arrows" data-glide-el="controls">
            <button
                className="glide__arrow glide__arrow--left"
                data-glide-dir="<"
            >
                <i className="fa fa-chevron-left"></i>
            </button>
            <button
                className="glide__arrow glide__arrow--right"
                data-glide-dir=">"
            >
                <i className="fa fa-chevron-right"></i>
            </button>
        </div>
    );
}
