import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface FeatureItem {
    id: number;
    title: string;
    description: string;
    bullets: string[];
    bulletColor: string;
    sectionBg: string;
    textColor: string;
    descColor: string;
    bulletTextColor: string;
    image: string;
    altText: string;
}

const featuresData: FeatureItem[] = [
    {
        id: 1,
        title: "1. Manage attendance with greater flexibility.",
        description:
            "Humanusia supports different work models, including on-site, remote, and hybrid work.",
        bullets: [
            "Location-based attendance",
            "Office & branch location management",
            "Clock in & clock out",
            "Attendance monitoring",
            "Automated attendance records",
        ],
        bulletColor: "bg-[#0066CC]",
        sectionBg: "bg-white",
        textColor: "text-black",
        descColor: "text-gray-600",
        bulletTextColor: "text-gray-700",
        image: "/images/image31.png",
        altText: "Manage Attendance",
    },

    {
        id: 2,
        title: "2. Payroll Management",
        description:
            "Humanusia supports different work models, including on-site, remote, and hybrid work.",
        bullets: [
            "Location-based attendance",
            "Office & branch location management",
            "Clock in & clock out",
            "Attendance monitoring",
            "Automated attendance records",
        ],
        bulletColor: "bg-[#FFC107]",
        sectionBg: "bg-[#B70000]",
        textColor: "text-white",
        descColor: "text-white/90",
        bulletTextColor: "text-white/95",
        image: "/images/image 32.png",
        altText: "Payroll Management",
    },

    {
        id: 3,
        title: "3. Leave & Permission",
        description:
            "Humanusia supports different work models, including on-site, remote, and hybrid work.",
        bullets: [
            "Location-based attendance",
            "Office & branch location management",
            "Clock in & clock out",
            "Attendance monitoring",
            "Automated attendance records",
        ],
        bulletColor: "bg-[#FF4646]",
        sectionBg: "bg-[#004B8D]",
        textColor: "text-white",
        descColor: "text-white/90",
        bulletTextColor: "text-white/95",
        image: "/images/image 33.png",
        altText: "Leave & Permission",
    },

    {
        id: 4,
        title: "4. Employee Management",
        description:
            "Humanusia supports different work models, including on-site, remote, and hybrid work.",
        bullets: [
            "Location-based attendance",
            "Office & branch location management",
            "Clock in & clock out",
            "Attendance monitoring",
            "Automated attendance records",
        ],
        bulletColor: "bg-[#0066CC]",
        sectionBg: "bg-white",
        textColor: "text-black",
        descColor: "text-gray-600",
        bulletTextColor: "text-gray-700",
        image: "/images/image 34.png",
        altText: "Employee Management",
    },
];

export default function Features() {
    const [imageErrors, setImageErrors] = useState<{
        [key: number]: boolean;
    }>({});

    const handleImageError = (id: number) => {
        setImageErrors((prev) => ({
            ...prev,
            [id]: true,
        }));
    };

    return (
        <section id="fitur" className="relative bg-white">
            
            {/* ==========================================
                HEADER FEATURES
            ========================================== */}
            <div className="max-w-[1350px] mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-12 md:pb-16">
                <div className="flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-[#B70000] rounded-full inline-block" />

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                        Features
                    </h2>
                </div>
            </div>

            {/* ==========================================
                STACKING FEATURES
            ========================================== */}
            <div className="relative">
                {featuresData.map((item, index) => (
                    <FeatureCard
                        key={item.id}
                        item={item}
                        index={index}
                        total={featuresData.length}
                        imageError={imageErrors[item.id]}
                        onImageError={handleImageError}
                    />
                ))}
            </div>
        </section>
    );
}


/* =========================================================
   FEATURE CARD
========================================================= */

interface FeatureCardProps {
    item: FeatureItem;
    index: number;
    total: number;
    imageError?: boolean;
    onImageError: (id: number) => void;
}

function FeatureCard({
    item,
    index,
    total,
    imageError,
    onImageError,
}: FeatureCardProps) {

    const ref = React.useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    /*
     * Saat card berikutnya mulai naik,
     * card yang sedang aktif mengecil sedikit.
     *
     * Semua card sekarang punya progress masing-masing,
     * jadi Feature 1, 2, dan 3 mendapat animasi yang sama.
     */

    const scale = useTransform(
        scrollYProgress,
        [0, 1],
        [1, index === total - 1 ? 1 : 0.94]
    );

    const borderRadius = useTransform(
        scrollYProgress,
        [0, 1],
        ["0px", "24px"]
    );

    return (
        <motion.div
            ref={ref}
            className={`
                sticky top-0
                w-full
                h-screen
                min-h-[700px]
                ${item.sectionBg}
                ${item.textColor}
                overflow-hidden
                flex items-center
            `}
            style={{
                scale,
                borderRadius:
                    index === total - 1
                        ? "0px"
                        : borderRadius,
                zIndex: index + 1,
            }}
        >

            <div className="w-full h-full flex items-center">

                <div
                    className="
                        w-full
                        h-full
                        mx-auto
                        px-6
                        md:px-10
                        lg:px-16
                        xl:px-20
                        py-16
                        grid
                        grid-cols-1
                        lg:grid-cols-12
                        gap-10
                        lg:gap-16
                        items-center
                    "
                >

                    {/* =====================================
                        TEXT
                    ===================================== */}

                    <div className="lg:col-span-5">

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 50,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: false,
                                amount: 0.25,
                            }}
                            transition={{
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >

                            <h3
                                className={`
                                    text-4xl
                                    md:text-5xl
                                    lg:text-6xl
                                    xl:text-7xl
                                    font-extrabold
                                    leading-[1.05]
                                    tracking-tight
                                    max-w-2xl
                                    ${item.textColor}
                                `}
                            >
                                {item.title}
                            </h3>

                            <p
                                className={`
                                    mt-7
                                    text-base
                                    md:text-lg
                                    lg:text-xl
                                    leading-relaxed
                                    max-w-xl
                                    ${item.descColor}
                                `}
                            >
                                {item.description}
                            </p>

                            <ul
                                className={`
                                    mt-8
                                    space-y-4
                                    text-base
                                    md:text-lg
                                    font-medium
                                    ${item.bulletTextColor}
                                `}
                            >
                                {item.bullets.map((bullet, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center gap-4"
                                    >
                                        <span
                                            className={`
                                                w-3
                                                h-3
                                                rounded-full
                                                ${item.bulletColor}
                                                flex-shrink-0
                                            `}
                                        />

                                        <span>
                                            {bullet}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                        </motion.div>

                    </div>


                    {/* =====================================
                        IMAGE
                    ===================================== */}

                    <div className="lg:col-span-7 w-full">

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.88,
                                x: 40,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: false,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                                w-full
                                h-[50vh]
                                min-h-[350px]
                                lg:h-[70vh]
                                flex
                                items-center
                                justify-center
                            "
                        >

                            {!imageError ? (

                                <img
                                    src={item.image}
                                    alt={item.altText}
                                    className="
                                        w-full
                                        h-full
                                        object-contain
                                        scale-105
                                    "
                                    onError={() =>
                                        onImageError(item.id)
                                    }
                                />

                            ) : (

                                <div
                                    className={`
                                        font-medium
                                        text-sm
                                        ${
                                            item.textColor ===
                                            "text-white"
                                                ? "text-white/50"
                                                : "text-gray-400"
                                        }
                                    `}
                                >
                                    [{item.altText}]
                                </div>

                            )}

                        </motion.div>

                    </div>

                </div>

            </div>

        </motion.div>
    );
}