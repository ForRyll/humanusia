import React, { useState } from 'react';

// Interface tipe data untuk item fitur
interface FeatureItem {
    id: number;
    title: string;
    description: string;
    bullets: string[];
    bulletColor: string; // Tailwind class background bullet point (misal: bg-[#0066CC])
    sectionBg: string;   // Tailwind class background section
    boxBg: string;       // Tailwind class background box gambar
    textColor: string;   // Tailwind class warna teks utama
    descColor: string;   // Tailwind class warna deskripsi
    bulletTextColor: string; // Tailwind class warna teks bullet list
    altText: string;
}

// Data 4 Menu Fitur
const featuresData: FeatureItem[] = [
    {
        id: 1,
        title: "1. Manage attendance with greater flexibility.",
        description: "Humanusia supports different work models, including on-site, remote, and hybrid work.",
        bullets: [
            "Location-based attendance",
            "Office & branch location management",
            "Clock in & clock out",
            "Attendance monitoring",
            "Automated attendance records"
        ],
        bulletColor: "bg-[#0066CC]",
        sectionBg: "bg-white",
        boxBg: "bg-[#B70000]",
        textColor: "text-black",
        descColor: "text-gray-600",
        bulletTextColor: "text-gray-700",
        altText: "Manage Attendance"
    },
    {
        id: 2,
        title: "2. Payroll Management",
        description: "Humanusia supports different work models, including on-site, remote, and hybrid work.",
        bullets: [
            "Location-based attendance",
            "Office & branch location management",
            "Clock in & clock out",
            "Attendance monitoring",
            "Automated attendance records"
        ],
        bulletColor: "bg-[#FFC107]",
        sectionBg: "bg-[#B70000]",
        boxBg: "bg-white",
        textColor: "text-white",
        descColor: "text-white/90",
        bulletTextColor: "text-white/95",
        altText: "Payroll Management"
    },
    {
        id: 3,
        title: "3. Leave & Permission",
        description: "Humanusia supports different work models, including on-site, remote, and hybrid work.",
        bullets: [
            "Location-based attendance",
            "Office & branch location management",
            "Clock in & clock out",
            "Attendance monitoring",
            "Automated attendance records"
        ],
        bulletColor: "bg-[#FF4646]",
        sectionBg: "bg-[#004B8D]",
        boxBg: "bg-white",
        textColor: "text-white",
        descColor: "text-white/90",
        bulletTextColor: "text-white/95",
        altText: "Leave & Permission"
    },
    {
        id: 4,
        title: "4. Employee Management",
        description: "Humanusia supports different work models, including on-site, remote, and hybrid work.",
        bullets: [
            "Location-based attendance",
            "Office & branch location management",
            "Clock in & clock out",
            "Attendance monitoring",
            "Automated attendance records"
        ],
        bulletColor: "bg-[#0066CC]",
        sectionBg: "bg-white",
        boxBg: "bg-[#B70000]",
        textColor: "text-black",
        descColor: "text-gray-600",
        bulletTextColor: "text-gray-700",
        altText: "Employee Management"
    }
];

export default function Features() {
    // State penanganan error gambar per baris fitur
    const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

    const handleImageError = (id: number) => {
        setImageErrors((prev) => ({ ...prev, [id]: true }));
    };

    return (
        /* SECTION: FEATURES */
        <section id="fitur" className="bg-white">
            {/* LABEL HEADER SECTION */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-10 md:pb-14">
                <div className="flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-[#B70000] rounded-full inline-block"></span>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                        Features
                    </h2>
                </div>
            </div>

            {/* LIST 4 FITUR */}
            {featuresData.map((item) => (
                <div key={item.id} className={`w-full ${item.sectionBg} ${item.textColor}`}>
                    <div className="max-w-[1450px] mx-auto px-6 md:px-12 py-14 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                        {/* TEXT CONTENT */}
                        <div className="lg:col-span-6">
                            <h3 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight max-w-2xl ${item.textColor}`}>
                                {item.title}
                            </h3>

                            <p className={`mt-6 text-sm md:text-base leading-relaxed max-w-xl ${item.descColor}`}>
                                {item.description}
                            </p>

                            <ul className={`mt-6 space-y-3 text-sm md:text-base font-medium ${item.bulletTextColor}`}>
                                {item.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <span className={`w-2.5 h-2.5 rounded-full ${item.bulletColor} flex-shrink-0`}></span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* IMAGE BOX */}
                        <div className="lg:col-span-6 w-full">
                            <div className={`w-full aspect-[4/3] md:aspect-[5/4] ${item.boxBg} overflow-hidden flex items-center justify-center p-6 md:p-8`}>
                                {!imageErrors[item.id] ? (
                                    <img
                                        src="/images/humanfix.png"
                                        alt={item.altText}
                                        className="w-full h-full object-contain"
                                        onError={() => handleImageError(item.id)}
                                    />
                                ) : (
                                    <div className="text-gray-400 font-medium text-sm">
                                        [{item.altText}]
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </section>
    );
}
