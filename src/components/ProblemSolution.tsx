import React, { useState } from 'react';

export default function ProblemSolution() {
    const [imageError, setImageError] = useState(false);

    return (
        /* SECTION: PROBLEM & SOLUTION */
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1350px] mx-auto px-6 md:px-12">

                {/* Label Kategori Atas */}
                <div className="flex items-center gap-3 mb-10 md:mb-14">
                    <span className="w-1.5 h-6 bg-[#B70000] rounded-full inline-block"></span>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                        Problem & Solution
                    </h2>
                </div>

                {/* Grid 2 Kolom (Gambar & Konten) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* KIRI: BOX GAMBAR/ILLUSTRATION */}
                    <div className="lg:col-span-6 w-full">
                        <div className="w-full aspect-[4/3] md:aspect-[1/1] max-h-[500px] rounded-3xl overflow-hidden flex items-center justify-center p-6">
                            {!imageError ? (
                                <img
                                    src="/images/image 30.png"
                                    alt="Problem and Solution Illustration"
                                    className="w-full h-full object-contain"
                                    onError={() => setImageError(true)}
                                />
                            ) : (
                                <div className="text-gray-400 font-medium text-sm">
                                    [ Gambar Problem & Solution ]
                                </div>
                            )}
                        </div>
                    </div>

                    {/* KANAN: PROBLEM & SOLUTION TEXT */}
                    <div className="lg:col-span-6 space-y-10">

                        {/* PROBLEM BLOCK */}
                        <div className="space-y-4">
                            {/* Badge Problem */}
                            <span className="inline-block px-4 py-1.5 rounded-md bg-[#DCE6ED] text-[#2C3E50] text-xs font-semibold tracking-wide">
                                Problem
                            </span>

                            {/* Judul Problem */}
                            <h3 className="text-3xl md:text-4xl font-extrabold text-black leading-snug tracking-tight">
                                HR Should Focus on<br className="hidden sm:inline" />
                                People, Not Paperwork.
                            </h3>

                            {/* Poin Problem */}
                            <ul className="space-y-3 pt-1 text-gray-600 text-sm md:text-base leading-relaxed">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[#1A365D] mt-2 flex-shrink-0"></span>
                                    <span className="text-justify">
                                        As businesses grow, managing people becomes increasingly complex. Humanusia helps HR simplify administrative processes and manage essential HR operations through one integrated system.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[#1A365D] mt-2 flex-shrink-0"></span>
                                    <span>Less manual work. More time to focus on people.</span>
                                </li>
                            </ul>
                        </div>

                        {/* SOLUTION BLOCK */}
                        <div className="space-y-3 pt-2">
                            {/* Badge Solution */}
                            <span className="inline-block px-4 py-1.5 rounded-md bg-[#DCE6ED] text-[#2C3E50] text-xs font-semibold tracking-wide">
                                Solution
                            </span>

                            {/* Judul Solution */}
                            <h3 className="text-3xl md:text-4xl font-extrabold text-black leading-snug tracking-tight">
                                Everything HR Needs.<br className="hidden sm:inline" />
                                One Platform.
                            </h3>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
