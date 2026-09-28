import React, { useState } from 'react';

export default function OneSystem() {
    const [imageError, setImageError] = useState(false);

    return (
        /* SECTION: ONE SYSTEM */
        <section id="one-system" className="py-20 md:py-28 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* KIRI: IMAGE / CARD */}
                    <div className="w-full">
                        <div className="w-full aspect-[4/3] md:aspect-[1.35/1] rounded-2xl overflow-hidden flex items-center justify-center p-8 md:p-10">
                            {!imageError ? (
                                <img
                                    src="/images/image 35.png"
                                    alt="Humanusia"
                                    className="w-full h-full object-contain"
                                    onError={() => setImageError(true)}
                                />
                            ) : (
                                <div className="text-white/80 font-medium text-sm">
                                    [ Gambar Humanusia ]
                                </div>
                            )}
                        </div>
                    </div>

                    {/* KANAN: CONTENT */}
                    <div className="max-w-xl">
                        {/* Label */}
                        <div className="inline-flex items-center px-3 py-1.5 mb-5 rounded-md bg-[#DCEAF4]">
                            <span className="text-[11px] md:text-xs font-medium text-[#111827]">
                                One System. Multiple Locations.
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-black leading-[1.05] tracking-tight mb-4">
                            Manage Your Workforce
                            <br className="hidden md:block" />
                            Wherever They Work.
                        </h2>

                        {/* Sub Heading */}
                        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
                            Not every employee works from the same office.
                        </p>

                        {/* Description */}
                        <p className="text-sm md:text-[15px] text-gray-600 leading-[1.55] max-w-lg text-justify">
                            Humanusia is designed for organizations with multiple offices,
                            branches, remote teams, and hybrid working environments.
                            HR can create and manage multiple work locations, define
                            attendance points, and monitor employees across different
                            locations — all from one platform.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
