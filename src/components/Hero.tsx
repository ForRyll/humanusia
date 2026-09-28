import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#f4f4f8] overflow-hidden">
      {/* =====================================================
                BACKGROUND MERAH AREA KANAN — DESKTOP
            ===================================================== */}
      <div className="absolute z-0 top-0 right-0 w-[39%] h-full bg-[#B70000] rounded-bl-[45px] hidden lg:block" />

      {/* =====================================================
                MAIN CONTAINER
            ===================================================== */}
      <div className="relative z-10 max-w-[1400px] min-h-screen mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center">
        {/* =================================================
                    TEXT CONTENT
                    Desktop  : kiri
                    Mobile   : bawah visual
                ================================================= */}
        <div
          className="
                    relative
                    z-30
                    w-full
                    lg:w-[55%]
                    pt-16
                    sm:pt-20
                    lg:pt-20
                    pb-20
                    lg:pb-20
                    order-2
                    lg:order-1
                    flex
                    flex-col
                    justify-center
                "
        >
          {/* MAIN HEADING */}
          <h1
            className="
                            text-[48px]
                            sm:text-[56px]
                            md:text-[64px]
                            lg:text-[68px]
                            font-extrabold
                            text-black
                            leading-[1.03]
                            tracking-[-2.5px]
                            mb-7
                            max-w-[560px]
                        "
          >
            Simplify HR.
            <br />
            Empower
            <br />
            Your People.
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
        text-gray-500
        text-[15px]
        sm:text-[16px]
        md:text-base
        leading-[1.6]
        mb-5
        max-w-[540px]
        text-justify
    "
          >
            Humanusia is an integrated HRIS platform designed to help businesses
            manage their people more efficiently, effectively, and
            systematically — from attendance, payroll, leave and permissions to
            employee management, all in one platform.
          </p>

          {/* SUB DESCRIPTION */}
          <p
            className="
        text-gray-500
        text-[13px]
        sm:text-[14px]
        md:text-sm
        font-medium
        mb-7
    "
          >
            One system for HR. One experience for every employee.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-3">
            {/* GET STARTED */}
            <a
              href="/register"
              className="
                                inline-flex
                                items-center
                                justify-center
                                px-5
                                py-3
                                min-w-[105px]
                                rounded-[5px]
                                bg-[#FF4646]
                                hover:bg-[#B70000]
                                text-white
                                text-[11px]
                                font-semibold
                                transition-all
                                duration-300
                                shadow-sm
                                hover:shadow-md
                            "
            >
              Get Started
            </a>

            {/* SCHEDULE DEMO */}
            <a
              href="/contact"
              className="
                                inline-flex
                                items-center
                                justify-center
                                px-5
                                py-3
                                min-w-[105px]
                                rounded-[5px]
                                bg-white
                                hover:bg-gray-50
                                text-gray-900
                                text-[11px]
                                font-semibold
                                transition-all
                                duration-300
                                shadow-sm
                            "
            >
              Schedule a Demo
            </a>
          </div>
        </div>

        {/* =================================================
                    DESKTOP VISUAL AREA
                    TIDAK DIUBAH
                ================================================= */}
        <div
          className="
                        absolute
                        z-20
                        hidden
                        lg:block
                        top-0
                        right-0
                        w-[50%]
                        h-full
                    "
        >
          <div className="relative w-full h-full">
            {/* =========================================
                            DESKTOP CARD 1
                        ========================================= */}
            <div
              className="
                                absolute
                                top-[18%]
                                left-[8%]
                                w-[42%]
                                h-[40%]
                                rounded-[24px]
                                bg-gradient-to-br
                                from-white
                                via-white
                                to-[#b13b49]
                                shadow-lg
                                z-20
                                overflow-visible
                            "
            >
              <img
                src="/images/welcome2.png"
                alt="Humanusia Workforce"
                className="
                                    absolute
                                    w-[125%]
                                    max-w-none
                                    h-auto
                                    left-[-5%]
                                    top-[-8%]
                                    object-contain
                                    opacity-[0.92]
                                    drop-shadow-[0_12px_20px_rgba(0,0,0,0.08)]
                                    pointer-events-none
                                    select-none
                                    z-30
                                "
              />
            </div>

            {/* =========================================
                            DESKTOP CARD 2
                        ========================================= */}
            <div
              className="
                                absolute
                                top-[60%]
                                left-[1%]
                                w-[50%]
                                h-[21%]
                                rounded-[24px]
                                bg-[#FF4646]
                                shadow-lg
                                overflow-hidden
                                z-20
                            "
            >
              <img
                src="/images/welcome3.png"
                alt="Humanusia Analytics"
                className="
                                    absolute
                                    inset-0
                                    w-full
                                    h-full
                                    object-cover
                                    object-center
                                    pointer-events-none
                                    select-none
                                "
              />
            </div>

            {/* =========================================
                            DESKTOP CARD 3
                        ========================================= */}
            <div
              className="
                                absolute
                                top-[24%]
                                left-[53%]
                                w-[43%]
                                h-[40%]
                                rounded-[24px]
                                bg-gradient-to-br
                                from-white
                                via-white
                                to-[#b13b49]
                                shadow-lg
                                z-20
                                overflow-visible
                            "
            >
              <img
                src="/images/welcome1.png"
                alt="Humanusia Employee"
                className="
                                    absolute
                                    w-[94%]
                                    max-w-none
                                    h-auto
                                    right-[6.2%]
                                    top-[-12.2%]
                                    object-contain
                                    drop-shadow-[0_12px_20px_rgba(0,0,0,0.08)]
                                    pointer-events-none
                                    select-none
                                    z-30
                                "
              />
            </div>

            {/* =========================================
                            DESKTOP CARD 4
                        ========================================= */}
            <div
              className="
                                absolute
                                top-[66%]
                                left-[53%]
                                w-[48%]
                                h-[23%]
                                rounded-[24px]
                                bg-white
                                shadow-lg
                                overflow-hidden
                                z-20
                            "
            >
              <img
                src="/images/welcome4.png"
                alt="Humanusia Workforce"
                className="
                                    absolute
                                    inset-0
                                    w-full
                                    h-full
                                    object-cover
                                    object-center
                                    pointer-events-none
                                    select-none
                                "
              />
            </div>
          </div>
        </div>

        {/* =================================================
                    MOBILE VISUAL AREA

                    URUTAN MOBILE:
                    1. Gambar/card
                    2. Text Hero

                    Desktop tidak terpengaruh karena lg:hidden.
                ================================================= */}
        <div
          className="
                        lg:hidden
                        relative
                        order-1
                        w-screen
                        h-[630px]
                        mt-20
                        overflow-hidden
                        bg-[#B70000]
                    "
        >
          {/* =============================================
                        MOBILE CARD 1
                    ============================================= */}
          <div
            className="
                            absolute
                            top-6
                            left-[6%]
                            w-[44%]
                            h-[335px]
                            rounded-[18px]
                            bg-gradient-to-br
                            from-white
                            via-white
                            to-[#ffdfe3]
                            shadow-lg
                            overflow-visible
                            z-20
                        "
          >
            <img
              src="/images/welcome2.png"
              alt="Humanusia Workforce"
              className="
                                absolute
                                w-full
                                h-[400px]
                                left-0
                                top-[-8%]
                                object-contain
                                opacity-90
                                pointer-events-none
                                select-none
                                z-30
                            "
            />
          </div>

          {/* =============================================
                        MOBILE CARD 2
                    ============================================= */}
          <div
            className="
                            absolute
                            top-[380px]
                            left-[6%]
                            w-[45%]
                            h-[170px]
                            rounded-[18px]
                            bg-[#FF4646]
                            shadow-lg
                            overflow-hidden
                            z-20
                        "
          >
            <img
              src="/images/welcome3.png"
              alt="Humanusia Analytics"
              className="
                                absolute
                                inset-0
                                w-full
                                h-full
                                object-cover
                                object-center
                                pointer-events-none
                                select-none
                            "
            />
          </div>

          {/* =============================================
                        MOBILE CARD 3
                    ============================================= */}
          <div
            className="
                            absolute
                            top-10
                            right-[6%]
                            w-[40%]
                            h-[373px]
                            rounded-[18px]
                            bg-gradient-to-br
                            from-white
                            via-white
                            to-[#ffdfe3]
                            shadow-lg
                            overflow-visible
                            z-20
                        "
          >
            <img
              src="/images/welcome1.png"
              alt="Humanusia Employee"
              className="
                                absolute
                                w-full
                                h-auto
                                right-0
                                top-[-5%]
                                object-contain
                                pointer-events-none
                                select-none
                                z-30
                            "
            />
          </div>

          {/* =============================================
                        MOBILE CARD 4
                    ============================================= */}
          <div
            className="
                            absolute
                            top-[435px]
                            right-[6%]
                            w-[40%]
                            h-[155px]
                            rounded-[18px]
                            bg-white
                            shadow-lg
                            overflow-hidden
                            z-20
                        "
          >
            <img
              src="/images/welcome4.png"
              alt="Humanusia Workforce"
              className="
                                absolute
                                inset-0
                                w-full
                                h-full
                                object-cover
                                object-center
                                pointer-events-none
                                select-none
                            "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
