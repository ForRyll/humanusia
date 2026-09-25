import React from 'react';

// Data kategori badge
const categories = [
    "People Development",
    "Performance",
    "Employee Engagement",
    "Organizational Growth"
];

export default function PeopleStrategy() {
    return (
        /* SECTION: FROM HR ADMINISTRATION TO PEOPLE STRATEGY */
        <section id="people-strategy" className="w-full bg-white">
            {/* BAGIAN ATAS */}
            <div className="max-w-[1100px] mx-auto px-6 md:px-10 pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-10">
                {/* HEADING */}
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-[1.05] tracking-tight text-black">
                        From HR Administration to<br className="hidden sm:block" />
                        People Strategy.
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="max-w-[720px] mx-auto mt-4 md:mt-5 text-sm md:text-base text-gray-600 leading-relaxed">
                        Humanusia helps reduce administrative workload, giving HR more time to focus on
                        strategic priorities.
                    </p>
                </div>

                {/* CATEGORY BUTTONS / BADGES */}
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-6 md:mt-8">
                    {categories.map((category, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center justify-center px-4 md:px-5 py-2 md:py-2.5 rounded-md bg-[#D13D3D] text-white text-xs md:text-sm font-medium leading-none"
                        >
                            {category}
                        </span>
                    ))}
                </div>
            </div>

            {/* QUOTE / BOTTOM BANNER */}
            <div className="w-full bg-[#F8E5E5] px-6 md:px-10 py-7 md:py-9 lg:py-10">
                <div className="max-w-[900px] mx-auto text-center">
                    <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-medium leading-relaxed text-gray-900">
                        “Because HR is not just about managing data. It's about
                        <br className="hidden md:block" />
                        managing and empowering people”
                    </p>
                </div>
            </div>
        </section>
    );
}
