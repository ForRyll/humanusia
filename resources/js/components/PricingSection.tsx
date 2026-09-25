import React from 'react';

// 1. Interface untuk tipe data Pricing Plan
interface PricingPlan {
    id: string;
    name: string;
    price: string;
    description: string;
    buttonLink: string;
    featureSubTitle: string;
    employeeCount: string;
}

// 2. Data array untuk opsi pilihan paket
const pricingPlans: PricingPlan[] = [
    {
        id: 'starter',
        name: 'Starter',
        price: '599K',
        description: 'The Starter package is ideal for small businesses or individuals with limited resources.',
        buttonLink: '/register',
        featureSubTitle: 'Access to starter Webflow clonables',
        employeeCount: 'For 1-100 employees right now',
    },
    {
        id: 'base',
        name: 'Base',
        price: '999K',
        description: 'The Base package helps build a strong foundation for businesses.',
        buttonLink: '/register',
        featureSubTitle: 'Access to starter Webflow clonables',
        employeeCount: 'For 101-250 employees right now',
    },
    {
        id: 'pro',
        name: 'Pro',
        price: '1.399K',
        description: 'The Pro package is a complete set of tools and resources designed to insert goal.',
        buttonLink: '/register',
        featureSubTitle: 'Access to starter Webflow clonables',
        employeeCount: 'For 101-250 employees right now',
    },
    {
        id: 'custom',
        name: 'Custom Plan',
        price: 'XXX',
        description: 'A package for more than 500 employees can be discussed with the Humanusia team.',
        buttonLink: '/contact',
        featureSubTitle: 'Access to starter Webflow clonables',
        employeeCount: 'Build your custom feature',
    },
];

// 3. Komponen Utama
export const PricingSection: React.FC = () => {
    return (
        <section id="pricing" className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">

                {/* HEADER */}
                <div className="text-center mb-12 md:mb-14">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight font-['Inter_Tight']">
                        Plan & Pricing
                    </h2>
                    <p className="mt-3 text-lg md:text-xl text-gray-700 font-['Inter_Tight']">
                        Select your plan and manage it according to company requirement
                    </p>
                </div>

                {/* PRICING CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.id}
                            className="pricing-card group bg-white rounded-[24px] border border-gray-100 shadow-[0_5px_20px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_18px_40px_rgba(0,0,0,0.13)]"
                        >
                            {/* CARD TOP */}
                            <div className="p-6 md:p-7">
                                {/* PLAN NAME */}
                                <h3 className="text-xl md:text-2xl font-semibold text-[#17135C] font-['Inter_Tight']">
                                    {plan.name}
                                </h3>

                                {/* PRICE */}
                                <div className="flex items-start mt-4">
                                    <span className="text-xs md:text-sm text-gray-400 mt-2 mr-1">
                                        Rp.
                                    </span>
                                    <span className="text-5xl md:text-[52px] leading-none font-semibold text-[#17135C] tracking-tight">
                                        {plan.price}
                                    </span>
                                    <span className="text-xs md:text-sm text-gray-400 ml-2 mt-2 leading-tight">
                                        per<br />
                                        monthly
                                    </span>
                                </div>

                                {/* DESCRIPTION */}
                                <p className="text-sm text-[#66668A] leading-relaxed mt-5 min-h-[72px]">
                                    {plan.description}
                                </p>

                                {/* BUTTON */}
                                <a
                                    href={plan.buttonLink}
                                    className="pricing-button mt-5 flex items-center justify-center w-full h-[40px] rounded-[10px] border border-gray-200 bg-white text-[#17135C] text-sm md:text-base font-medium transition-all duration-300 group-hover:bg-[#C90000] group-hover:text-white group-hover:border-[#C90000] group-hover:shadow-[0_5px_15px_rgba(201,0,0,0.25)]"
                                >
                                    Get started
                                </a>
                            </div>

                            {/* DIVIDER */}
                            <div className="border-t border-gray-200"></div>

                            {/* FEATURES */}
                            <div className="p-6 md:p-7 pt-5">
                                <h4 className="text-sm md:text-base font-semibold text-[#17135C]">
                                    Features:
                                </h4>

                                <p className="text-sm text-[#77779A] leading-relaxed mt-2">
                                    {plan.featureSubTitle}
                                </p>

                                <div className="flex items-start gap-2.5 mt-4">
                                    <span className="w-[14px] h-[14px] mt-[3px] rounded-full bg-[#C90000] flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-[9px] h-[9px] text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 12l4 4L19 6"
                                            />
                                        </svg>
                                    </span>

                                    <span className="text-sm text-[#66668A] leading-relaxed">
                                        {plan.employeeCount}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PricingSection;
