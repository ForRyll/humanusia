import React, { useState } from 'react';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Untuk sementara hanya mencegah reload.
        // Nanti bisa disambungkan ke API / authentication.
        console.log('Login submitted', {
            rememberMe,
        });
    };

    return (
        <div className="min-h-screen bg-white font-['Inter_Tight',sans-serif] overflow-hidden">

            {/* =====================================================
                LOGIN SECTION
            ====================================================== */}
            <main className="relative min-h-screen pt-20">


                   {/* PRODUCT IMAGES */}
<div className="absolute inset-0 z-[9999] pointer-events-none">

    {/* IMAGE 1 — DASHBOARD */}
    <img
        src="/images/ecosystem1.png"
        alt="Humanusia Dashboard"
        className="
            absolute
            w-[330px]
            lg:w-[390px]
            xl:w-[430px]
            top-[12%]
            left-[31%]
            -translate-x-1/2
            rotate-[0deg]
            z-[52]
            drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)]
            transition-transform
            duration-500
            hover:rotate-[-3deg]
        "
    />

    {/* IMAGE 2 — WEBSITE / LANDING PAGE */}
    <img
        src="/images/ecosystem2.png"
        alt="Humanusia Website"
        className="
            absolute
            w-[330px]
            lg:w-[390px]
            xl:w-[430px]
            top-[32%]
            left-[31%]
            -translate-x-1/2
            rotate-[3deg]
            z-[53]
            drop-shadow-[0_18px_30px_rgba(0,0,0,0.3)]
            transition-transform
            duration-500
            hover:rotate-[1deg]
        "
    />

    {/* IMAGE 3 — ANALYTICS */}
    <img
        src="/images/ecosystem3.png"
        alt="Humanusia Analytics"
        className="
            absolute
            w-[330px]
            lg:w-[390px]
            xl:w-[430px]
            top-[55%]
            left-[31%]
            -translate-x-1/2
            rotate-[-1deg]
            z-[52]
            drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)]
            transition-transform
            duration-500
            hover:rotate-[-2deg]
        "
    />

</div>

                {/* =================================================
                    LEFT — PRODUCT SHOWCASE
                ================================================== */}
                <section className="hidden md:block absolute left-0 top-20 bottom-0 w-[28%] bg-[#C90000] overflow-hidden">

                    {/* Soft white fade menuju area login */}
                    <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-r from-transparent to-white/90 z-10 pointer-events-none" />
                </section>


                {/* =================================================
                    RIGHT — LOGIN FORM
                ================================================== */}
                <section className="relative min-h-screen overflow-hidden
                    ml-0 md:ml-[28%]
                    min-h-[calc(100vh-80px)]
                    bg-white
                    flex
                    items-center
                    justify-center
                    px-6
                    sm:px-10
                    lg:px-16
                ">

                    <div className="w-full max-w-[430px]">

                        {/* =================================================
                            HUMANUSIA LOGO
                        ================================================== */}
                        <div className="mb-9">
                            <img
                                src="/images/humanrem.png"
                                alt="Humanusia"
                                className="w-[150px] md:w-[165px] h-auto object-contain"
                            />
                        </div>


                        {/* =================================================
                            GREETING
                        ================================================== */}
                        <div className="mb-7">

                            <h1 className="
                                text-[28px]
                                md:text-[32px]
                                font-bold
                                text-gray-900
                                leading-[1.1]
                                tracking-tight
                            ">
                                Hello👋
                            </h1>

                            <p className="
                                mt-2
                                text-[21px]
                                md:text-[23px]
                                font-semibold
                                text-gray-900
                                leading-tight
                            ">
                                Nice to see you again
                            </p>

                        </div>


                        {/* =================================================
                            LOGIN FORM
                        ================================================== */}
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >

                            {/* LOGIN / EMAIL */}
                            <div>

                                <label
                                    htmlFor="login"
                                    className="
                                        block
                                        mb-2
                                        text-[11px]
                                        font-medium
                                        text-gray-700
                                    "
                                >
                                    Login
                                </label>

                                <input
                                    id="login"
                                    type="text"
                                    placeholder="Email or phone number"
                                    className="
                                        w-full
                                        h-[46px]
                                        px-4
                                        rounded-[6px]
                                        bg-[#F1F1F1]
                                        border
                                        border-transparent
                                        text-[12px]
                                        text-gray-900
                                        placeholder:text-gray-400
                                        outline-none
                                        transition-all
                                        duration-200
                                        focus:bg-white
                                        focus:border-[#C90000]
                                        focus:ring-2
                                        focus:ring-[#C90000]/10
                                    "
                                />

                            </div>


                            {/* PASSWORD */}
                            <div>

                                <label
                                    htmlFor="password"
                                    className="
                                        block
                                        mb-2
                                        text-[11px]
                                        font-medium
                                        text-gray-700
                                    "
                                >
                                    Password
                                </label>

                                <div className="relative">

                                    <input
                                        id="password"
                                        type={
                                            showPassword
                                                ? 'text'
                                                : 'password'
                                        }
                                        placeholder="Enter password"
                                        className="
                                            w-full
                                            h-[46px]
                                            px-4
                                            pr-11
                                            rounded-[6px]
                                            bg-[#F1F1F1]
                                            border
                                            border-transparent
                                            text-[12px]
                                            text-gray-900
                                            placeholder:text-gray-400
                                            outline-none
                                            transition-all
                                            duration-200
                                            focus:bg-white
                                            focus:border-[#C90000]
                                            focus:ring-2
                                            focus:ring-[#C90000]/10
                                        "
                                    />

                                    {/* SHOW PASSWORD */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(
                                                !showPassword
                                            )
                                        }
                                        className="
                                            absolute
                                            right-3
                                            top-1/2
                                            -translate-y-1/2
                                            text-gray-500
                                            hover:text-[#C90000]
                                            transition-colors
                                            cursor-pointer
                                        "
                                        aria-label={
                                            showPassword
                                                ? 'Hide password'
                                                : 'Show password'
                                        }
                                    >
                                        {showPassword ? (
                                            <svg
                                                className="w-[16px] h-[16px]"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.8"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3 3l18 18M10.6 10.6a2 2 0 102.8 2.8M9.9 4.2A10.7 10.7 0 0112 4c5 0 8.7 4 10 8a11.7 11.7 0 01-2.1 3.8M6.6 6.6C4.7 8 3.4 10 2 12c1.3 4 5 8 10 8 1.6 0 3-.4 4.3-1"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                className="w-[16px] h-[16px]"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.8"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"
                                                />
                                                <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="2.5"
                                                />
                                            </svg>
                                        )}
                                    </button>

                                </div>

                            </div>


                            {/* =================================================
                                REMEMBER + FORGOT
                            ================================================== */}
                            <div className="
                                flex
                                items-center
                                justify-between
                                pt-0.5
                            ">

                                {/* REMEMBER ME */}
                                <label className="
                                    flex
                                    items-center
                                    gap-2
                                    cursor-pointer
                                ">

                                    <button
                                        type="button"
                                        role="switch"
                                        aria-checked={rememberMe}
                                        onClick={() =>
                                            setRememberMe(!rememberMe)
                                        }
                                        className={`
                                            relative
                                            w-[29px]
                                            h-[16px]
                                            rounded-full
                                            transition-colors
                                            duration-200
                                            ${
                                                rememberMe
                                                    ? 'bg-[#C90000]'
                                                    : 'bg-[#E5E5E5]'
                                            }
                                        `}
                                    >
                                        <span
                                            className={`
                                                absolute
                                                top-[3px]
                                                w-[10px]
                                                h-[10px]
                                                rounded-full
                                                bg-white
                                                shadow-sm
                                                transition-transform
                                                duration-200
                                                ${
                                                    rememberMe
                                                        ? 'translate-x-[16px]'
                                                        : 'translate-x-[3px]'
                                                }
                                            `}
                                        />
                                    </button>

                                    <span className="
                                        text-[10px]
                                        text-gray-600
                                    ">
                                        Remember me
                                    </span>

                                </label>


                                {/* FORGOT PASSWORD */}
                                <button
                                    type="button"
                                    className="
                                        text-[10px]
                                        text-[#0066CC]
                                        hover:text-[#C90000]
                                        transition-colors
                                    "
                                >
                                    Forgot password?
                                </button>

                            </div>


                            {/* =================================================
                                SIGN IN BUTTON
                            ================================================== */}
                            <button
                                type="submit"
                                className="
                                    w-full
                                    h-[46px]
                                    mt-3
                                    rounded-[6px]
                                    bg-[#C90000]
                                    hover:bg-[#A90000]
                                    text-white
                                    text-[12px]
                                    font-semibold
                                    shadow-sm
                                    hover:shadow-md
                                    transition-all
                                    duration-300
                                    active:scale-[0.99]
                                    cursor-pointer
                                "
                            >
                                Sign in
                            </button>

                        </form>

                    </div>

                </section>

            </main>
        </div>
    );
}
