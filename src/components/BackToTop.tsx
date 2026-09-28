import { useEffect, useState } from "react";

export default function BackToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!showButton) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
                fixed
                bottom-6
                right-6
                z-[9999]
                w-12
                h-12
                rounded-full
                bg-[#B70000]
                text-white
                shadow-lg
                flex
                items-center
                justify-center
                text-xl
                font-bold
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#960000]
                hover:shadow-xl
            "
        >
            ↑
        </button>
    );
}