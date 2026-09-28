import React from 'react';

export const ReadyTransformSection: React.FC = () => {
    return (
        <section id="ready-transform" className="relative bg-white py-20 md:py-28 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">

                {/* IMAGE AREA */}
                <div className="relative mx-auto w-full max-w-[1250px]">
                    {/* IMAGE FRAME */}
                    <div className="relative overflow-hidden rounded-[22px] md:rounded-[28px]">
                        {/* OUTER SOFT SHADOW / BORDER */}
                        <div className="absolute inset-0 rounded-[22px] md:rounded-[28px] border-[10px] md:border-[12px] border-[#f4f4f4] pointer-events-none z-20"></div>

                        {/* WEBSITE IMAGE */}
                        <img
                            src="/images/ready.png"
                            alt="Humanusia HR Platform"
                            className="relative z-0 block w-full h-auto object-cover rounded-[16px] md:rounded-[18px]"
                        />

                        {/* WHITE BLUR / FADE EFFECT */}
                        <div
                            className="absolute z-10 left-0 right-0 bottom-0 h-[150px] md:h-[190px] pointer-events-none"
                            style={{
                                background:
                                    'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.10) 20%, rgba(255,255,255,0.55) 55%, rgba(255,255,255,0.92) 82%, rgba(255,255,255,1) 100%)',
                                backdropFilter: 'blur(1px)',
                                WebkitBackdropFilter: 'blur(1px)',
                            }}
                        ></div>
                    </div>

                    {/* HUMANUSIA LOGO */}
                    <div className="absolute z-30 left-1/2 -translate-x-1/2 bottom-[-30px] md:bottom-[-42px]">
                        <img
                            src="/images/humanrem.png"
                            alt="Humanusia"
                            className="w-[150px] md:w-[190px] lg:w-[220px] h-auto object-contain drop-shadow-[0_3px_5px_rgba(0,0,0,0.08)]"
                        />
                    </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="relative z-20 text-center mt-[70px] md:mt-[85px]">
                    {/* MAIN HEADING */}
                    <h2 className="max-w-[760px] mx-auto text-4xl md:text-5xl lg:text-[56px] font-extrabold text-black leading-[1.05] tracking-tight font-['Inter_Tight']">
                        Ready to Transform HR
                        <br className="hidden md:block" />
                        Management in Your Company?
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="max-w-[650px] mx-auto mt-5 md:mt-6 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-['Inter_Tight']">
                        Join other companies that have switched to a more practical
                        <br className="hidden md:block" />
                        and structured approach.
                    </p>

                    {/* CTA BUTTON */}
                    <div className="mt-8 md:mt-9 flex justify-center">
                        <a
                            href="/register"
                            className="inline-flex items-center justify-center min-w-[130px] md:min-w-[145px] h-[48px] md:h-[52px] px-7 md:px-9 rounded-full bg-[#C90000] hover:bg-[#A80000] text-[#FFFFFF] text-sm md:text-base font-semibold shadow-[0_8px_18px_rgba(201,0,0,0.25)] hover:shadow-[0_10px_25px_rgba(201,0,0,0.35)] hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Get Started
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ReadyTransformSection;
