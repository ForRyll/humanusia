import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


export default function Navbar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    /* =====================================================
       HANDLE BERANDA
    ===================================================== */

    const handleHome = () => {
        closeMobileMenu();

        if (location.pathname === "/") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            navigate("/");
        }
    };


    /* =====================================================
       HANDLE SECTION
    ===================================================== */

    const handleSection = (sectionId: string) => {
        closeMobileMenu();

        if (location.pathname !== "/") {
            navigate(`/#${sectionId}`);

            setTimeout(() => {
                document
                    .getElementById(sectionId)
                    ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
            }, 100);

            return;
        }

        document
            .getElementById(sectionId)
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    };


    return (
        <nav
            className="
                fixed
                top-0
                left-0
                right-0
                z-50
                bg-white/70
                backdrop-blur-md
                border-b
                border-gray-100/80
            "
        >

            {/* =================================================
                NAVBAR CONTAINER
            ================================================= */}

            <div className="w-full">

                <div
                    className="
                        max-w-[1350px]
                        mx-auto
                        px-6
                        md:px-10
                        h-20
                        flex
                        items-center
                        justify-between
                    "
                >

                    {/* =================================================
                        LOGO
                    ================================================= */}

                    <button
                        type="button"
                        onClick={handleHome}
                        className="flex items-center group"
                    >
                        <img
                            src="/images/humanrem.png"
                            alt="Humanusia Logo"
                            className="
                                h-8
                                md:h-9
                                w-auto
                                object-contain
                                transition-transform
                                duration-300
                                group-hover:scale-105
                            "
                        />
                    </button>


                    {/* =================================================
                        DESKTOP MENU
                    ================================================= */}

                    <div className="hidden md:flex items-center gap-8">

                        {/* BERANDA */}

                        <button
                            type="button"
                            onClick={handleHome}
                            className="
                                text-sm
                                font-medium
                                text-gray-700
                                hover:text-[#c8232c]
                                transition-colors
                            "
                        >
                            Beranda
                        </button>


                        {/* FITUR */}

                        <button
                            type="button"
                            onClick={() => handleSection("fitur")}
                            className="
                                text-sm
                                font-medium
                                text-gray-700
                                hover:text-[#c8232c]
                                transition-colors
                            "
                        >
                            Fitur
                        </button>


                        {/* HARGA */}

                        <button
                            type="button"
                            onClick={() => handleSection("pricing")}
                            className="
                                text-sm
                                font-medium
                                text-gray-700
                                hover:text-[#c8232c]
                                transition-colors
                            "
                        >
                            Harga
                        </button>


                        {/* BLOG */}

                        <button
                            type="button"
                            onClick={() => handleSection("ready-transform")}
                            className="
                                text-sm
                                font-medium
                                text-gray-700
                                hover:text-[#c8232c]
                                transition-colors
                            "
                        >
                            Blog
                        </button>


                        {/* TENTANG KAMI */}

                        <Link
                            to="/about"
                            onClick={closeMobileMenu}
                            className="
                                text-sm
                                font-medium
                                text-gray-700
                                hover:text-[#c8232c]
                                transition-colors
                            "
                        >
                            Tentang Kami
                        </Link>

                    </div>


                    {/* =================================================
                        RIGHT ACTION
                    ================================================= */}

                    <div className="flex items-center gap-4">

                        {/* LOGIN */}

                        <Link
                            to="/login"
                            onClick={closeMobileMenu}
                            className="
                                text-sm
                                font-semibold
                                text-gray-800
                                hover:text-[#c8232c]
                                transition-colors
                                px-2
                                py-1
                            "
                        >
                            Log in
                        </Link>


                        {/* GET STARTED */}

                        <Link
                            to="/register"
                            onClick={closeMobileMenu}
                            className="
                                hidden
                                sm:inline-flex
                                px-5
                                py-2.5
                                rounded-xl
                                bg-white
                                border
                                border-gray-200
                                text-[#c8232c]
                                text-sm
                                font-bold
                                shadow-sm
                                hover:shadow-md
                                hover:border-[#c8232c]
                                hover:bg-gray-50
                                transition-all
                                duration-300
                            "
                        >
                            Get Started
                        </Link>


                        {/* =================================================
                            MOBILE BUTTON
                        ================================================= */}

                        <button
                            type="button"
                            onClick={toggleMobileMenu}
                            className="
                                md:hidden
                                p-2
                                rounded-lg
                                text-gray-600
                                hover:text-[#c8232c]
                                hover:bg-gray-100
                                transition-colors
                            "
                            aria-label="Toggle Menu"
                        >

                            {!isMobileMenuOpen ? (

                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>

                            ) : (

                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>

                            )}

                        </button>

                    </div>

                </div>


                {/* =================================================
                    MOBILE MENU
                ================================================= */}

                {isMobileMenuOpen && (

                    <div
                        className="
                            md:hidden
                            bg-white/95
                            backdrop-blur-md
                            border-t
                            border-gray-100
                            px-6
                            pt-3
                            pb-6
                            space-y-2
                        "
                    >

                        <button
                            type="button"
                            onClick={handleHome}
                            className="
                                block
                                w-full
                                text-left
                                px-3
                                py-2
                                rounded-lg
                                text-base
                                font-medium
                                text-gray-700
                                hover:text-[#c8232c]
                                hover:bg-gray-50
                            "
                        >
                            Beranda
                        </button>


                        <button
                            type="button"
                            onClick={() => handleSection("fitur")}
                            className="
                                block
                                w-full
                                text-left
                                px-3
                                py-2
                                rounded-lg
                                text-base
                                font-medium
                                text-gray-700
                                hover:text-[#c8232c]
                                hover:bg-gray-50
                            "
                        >
                            Fitur
                        </button>


                        <button
                            type="button"
                            onClick={() => handleSection("pricing")}
                            className="
                                block
                                w-full
                                text-left
                                px-3
                                py-2
                                rounded-lg
                                text-base
                                font-medium
                                text-gray-700
                                hover:text-[#c8232c]
                                hover:bg-gray-50
                            "
                        >
                            Harga
                        </button>


                        <button
                            type="button"
                            onClick={() => handleSection("ready-transform")}
                            className="
                                block
                                w-full
                                text-left
                                px-3
                                py-2
                                rounded-lg
                                text-base
                                font-medium
                                text-gray-700
                                hover:text-[#c8232c]
                                hover:bg-gray-50
                            "
                        >
                            Blog
                        </button>


                        <Link
                            to="/about"
                            onClick={closeMobileMenu}
                            className="
                                block
                                px-3
                                py-2
                                rounded-lg
                                text-base
                                font-medium
                                text-gray-700
                                hover:text-[#c8232c]
                                hover:bg-gray-50
                            "
                        >
                            Tentang Kami
                        </Link>

                    </div>

                )}

            </div>

        </nav>
    );
}