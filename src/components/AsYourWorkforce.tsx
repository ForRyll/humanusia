import React from "react";

// Data item benefit
const benefitsData = [
    "One centralized source of truth for your workforce.",
    "Built for different work models and locations.",
    "Reduce repetitive administrative work.",
    "Scale alongside your organization.",
];

export default function AsYourWorkforce() {
    return (
        /* =====================================================
           SECTION: AS YOUR WORKFORCE
        ====================================================== */
        <section className="w-full bg-[#C90000] py-20 md:py-28 lg:py-32 px-6 md:px-10 overflow-hidden">
            <div className="max-w-[1200px] mx-auto">
                {/* =================================================
                    MAIN HEADING
                ================================================== */}
                <div className="max-w-[1100px] mx-auto text-center mb-10 md:mb-14 lg:mb-16">
                    <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.08] tracking-tight">
                        As your workforce and locations grow,
                        <br className="hidden md:block" />
                        Humanusia helps your organization maintain
                        <br className="hidden md:block" />a structured and
                        connected HR system.
                    </h2>
                </div>

                {/* =================================================
                    BENEFIT MENU
                ================================================== */}
                <div className="max-w-[1000px] mx-auto space-y-3 md:space-y-4">
                    {benefitsData.map((text, index) => (
                        <div
                            key={index}
                            className="
            benefit-card
            w-full
            min-h-[72px]
            md:min-h-[82px]
            lg:min-h-[90px]
            bg-white
            rounded-2xl
            md:rounded-[18px]
            flex
            items-center
            justify-center
            px-6
            md:px-10
            shadow-sm
            transition-all
            duration-300
            ease-out
        "
                        >
                            <p
                                className="
                text-black
                text-base
                md:text-lg
                lg:text-[21px]
                font-medium
                text-center
                leading-tight
            "
                            >
                                {text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
