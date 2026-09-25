import React, { useState } from 'react';

export default function Ecosystem() {
    // State penanganan error muat gambar
    const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

    const handleImageError = (key: string) => {
        setImageErrors((prev) => ({ ...prev, [key]: true }));
    };

    return (
        /* SECTION: ECOSYSTEM */
        <section id="ecosystem" className="py-20 md:py-28 bg-white">
            <div className="max-w-[1480px] mx-auto px-6 md:px-12">

                {/* HEADER */}
                <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
                    {/* Label */}
                    <div className="inline-flex items-center px-4 py-1.5 mb-5 rounded-md bg-[#DCEAF4]">
                        <span className="text-[11px] md:text-xs font-medium text-gray-800">
                            Ecosystem
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-black leading-tight tracking-tight mb-4">
                        Web for HR. Mobile for Employees
                    </h2>

                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Humanusia is available through a Web Platform and mobile applications
                        for iOS and Android, providing an integrated experience for HR,
                        management, and employees.
                    </p>
                </div>


                {/* ECOSYSTEM CARDS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

                    {/* 1. HUMANUSIA WEB */}
                    <div className="relative min-h-[430px] md:min-h-[470px] bg-[#C90000] rounded-2xl overflow-hidden text-white">
                        {/* CONTENT */}
                        <div className="relative z-20 w-full h-full p-8 md:p-10 lg:p-11">
                            {/* Text */}
                            <div className="relative z-30 w-[52%] md:w-[50%]">
                                <h3 className="text-2xl md:text-3xl lg:text-[27px] font-bold leading-tight mb-4">
                                    Humanusia Web
                                </h3>

                                <p className="text-sm md:text-[14px] leading-relaxed text-white/95 mb-4 max-w-[250px]">
                                    Manage essential HR operations through one centralized dashboard
                                </p>

                                {/* Features */}
                                <ul className="space-y-1.5 text-sm md:text-[13px] text-white/95">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#FFD21F] flex-shrink-0"></span>
                                        <span>Attendance</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#FFD21F] flex-shrink-0"></span>
                                        <span>Leave & permissions</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#FFD21F] flex-shrink-0"></span>
                                        <span>Office & branch locations</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#FFD21F] flex-shrink-0"></span>
                                        <span>HR administration & monitoring</span>
                                    </li>
                                </ul>
                            </div>

                            {/* WEB IMAGES (3 IMAGE OVERLAP) */}
                            <div className="absolute right-[-10px] md:right-[0px] bottom-[-5px] md:bottom-[-15px] w-[55%] md:w-[53%] h-[90%]">
                                {/* Image 1 - belakang */}
                                {!imageErrors['eco1'] && (
                                    <img
                                        src="/images/ecosystem1.png"
                                        alt="Humanusia Web Preview 1"
                                        className="absolute w-[72%] h-auto object-contain right-[5%] top-[-10%] rotate-[-8deg] z-10"
                                        onError={() => handleImageError('eco1')}
                                    />
                                )}

                                {/* Image 2 - tengah */}
                                {!imageErrors['eco2'] && (
                                    <img
                                        src="/images/ecosystem2.png"
                                        alt="Humanusia Web Preview 2"
                                        className="absolute w-[68%] h-auto object-contain right-[12%] top-[14%] rotate-[6deg] z-20"
                                        onError={() => handleImageError('eco2')}
                                    />
                                )}

                                {/* Image 3 - depan */}
                                {!imageErrors['eco3'] && (
                                    <img
                                        src="/images/ecosystem3.png"
                                        alt="Humanusia Web Preview 3"
                                        className="absolute w-[70%] h-auto object-contain right-[0%] top-[36%] rotate-[1deg] z-30"
                                        onError={() => handleImageError('eco3')}
                                    />
                                )}
                            </div>
                        </div>
                    </div>


                    {/* 2. HUMANUSIA MOBILE */}
                    <div className="relative min-h-[430px] md:min-h-[470px] bg-[#C90000] rounded-2xl overflow-hidden text-white">
                        {/* CONTENT */}
                        <div className="relative z-20 w-full h-full p-8 md:p-10 lg:p-11">
                            {/* Text */}
                            <div className="relative z-30 w-[52%] md:w-[50%]">
                                <h3 className="text-2xl md:text-3xl lg:text-[27px] font-bold leading-tight mb-4">
                                    Humanusia<br className="hidden md:block" />
                                    Mobile
                                </h3>

                                <p className="text-sm md:text-[14px] leading-relaxed text-white/95 mb-4 max-w-[220px]">
                                    Employees can access essential HR services directly from their smartphones.
                                </p>

                                {/* Features */}
                                <ul className="space-y-1.5 text-sm md:text-[13px] text-white/95">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#FFD21F] flex-shrink-0"></span>
                                        <span>Clock in / Clock out</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#FFD21F] flex-shrink-0"></span>
                                        <span>Submit leave requests</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#FFD21F] flex-shrink-0"></span>
                                        <span>Submit permission requests</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#FFD21F] flex-shrink-0"></span>
                                        <span>Check attendance</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#FFD21F] flex-shrink-0"></span>
                                        <span>Access employee information</span>
                                    </li>
                                </ul>
                            </div>

                            {/* MOBILE IMAGES (2 IMAGE OVERLAP) */}
                            <div className="absolute right-[-5px] md:right-[0px] bottom-0 w-[52%] md:w-[50%] h-[90%]">
                                {/* Background Accent Box */}
                                <div className="absolute right-[16%] top-[1%] w-[65%] h-[90%] bg-[#FF4646] rounded-lg opacity-80 z-10"></div>

                                {/* Mobile Image 4 */}
                                {!imageErrors['eco4'] && (
                                    <img
                                        src="/images/ecosystem4.png"
                                        alt="Humanusia Mobile Preview 1"
                                        className="absolute w-[58%] h-auto object-contain right-[25%] top-[-5%] rotate-[-4deg] z-20"
                                        onError={() => handleImageError('eco4')}
                                    />
                                )}

                                {/* Mobile Image 5 */}
                                {!imageErrors['eco5'] && (
                                    <img
                                        src="/images/ecosystem5.png"
                                        alt="Humanusia Mobile Preview 2"
                                        className="absolute w-[55%] h-auto object-contain right-[10%] bottom-[3%] rotate-[3deg] z-30"
                                        onError={() => handleImageError('eco5')}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                </div>


                {/* BOTTOM TEXT */}
                <div className="text-center mt-10 md:mt-12">
                    <p className="text-base md:text-lg lg:text-xl text-gray-900 font-medium">
                        HR manages. Employees engage. Everything stays connected.
                    </p>
                </div>

            </div>
        </section>
    );
}
