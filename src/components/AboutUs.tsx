import React, { useEffect, useState } from "react";
import ReadyTransformSection from "../components/ReadyTransformSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Puspa Wahyuningtias",
    role: "Front-End Dev",
    image: "/images/puspa.png",
  },
  {
    id: 2,
    name: "Alif",
    role: "Front-End Dev",
    image: "/images/alif.png",
  },
  {
    id: 3,
    name: "Habib",
    role: "Back-End Dev",
    image: "/images/habib.png",
  },
  {
    id: 4,
    name: "Ivan",
    role: "Back-End Dev",
    image: "/images/ivan.png",
  },
  {
    id: 5,
    name: "Windi",
    role: "UI/UX Designer",
    image: "/images/windi.png",
  },
  {
    id: 6,
    name: "Laeli",
    role: "HR Specialist",
    image: "/images/laeli.png",
  },
  {
    id: 7,
    name: "Meta",
    role: "Product Specialist",
    image: "/images/meta.png",
  },
  {
    id: 8,
    name: "Yusuf",
    role: "Full-Stack Dev",
    image: "/images/yusuf.png",
  },
];

export default function AboutUs() {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-white">

            {/* NAVBAR */}
        <Navbar />

      <main>
        {/* =====================================================
                    HERO ABOUT US
                ====================================================== */}
        <section className="pt-20 bg-[#F5F5F8]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="min-h-[430px] md:min-h-[500px] grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20">
              {/* LEFT — LOGO */}
              <div className="flex items-center justify-center lg:justify-start">
                <img
                  src="/images/humanrem.png"
                  alt="Humanusia"
                  className="w-[240px] sm:w-[300px] md:w-[360px] lg:w-[390px] h-auto object-contain"
                />
              </div>

              {/* RIGHT — TEXT */}
              <div className="max-w-[600px]">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold leading-[1.05] tracking-tight text-black">
                  Simplify HR.
                  <br />
                  Empower Your People.
                </h1>

                <p className="mt-6 text-[11px] sm:text-xs md:text-sm text-gray-500 leading-[1.7] max-w-[540px] text-justify">
                  Humanusia is an integrated HRIS platform designed to help
                  businesses manage their people more efficiently, effectively,
                  and systematically — from attendance, payroll, leave and
                  permissions to employee management, all in one platform.
                </p>

                <p className="mt-4 text-[11px] sm:text-xs md:text-sm text-gray-500 leading-relaxed">
                  One system for HR. One experience for every employee.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
                    TEAM SECTION
                ====================================================== */}
        <section className="relative bg-[#C90000] rounded-t-[22px] md:rounded-t-[28px] -mt-1">
          <div className="max-w-[1250px] mx-auto px-6 md:px-10 py-14 md:py-20 lg:py-24">
            {/* SECTION HEADER */}
            <div className="text-center text-white mb-10 md:mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight">
                Humanusia’s
                <br />
                Team Member
              </h2>

              <p className="mt-4 text-[10px] md:text-xs text-white/80">
                Brief introduction from our humanusia team
              </p>
            </div>

            {/* TEAM GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[8px] md:gap-[10px]">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="group relative overflow-hidden rounded-[14px] md:rounded-[16px] bg-[#E8E8E8] aspect-[0.82/1]"
                >
                  {/* MEMBER IMAGE */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  {/* BOTTOM RED INFO */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#B70000] via-[#B70000]/95 to-[#B70000]/80 px-3 md:px-4 py-3 md:py-4 text-white">
                    <h3 className="text-[10px] sm:text-[11px] md:text-[13px] lg:text-[14px] font-bold leading-tight">
                      {member.name}
                    </h3>

                    <p className="mt-1 text-[8px] sm:text-[9px] md:text-[10px] text-white/90">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ReadyTransformSection />
      {/* =====================================================
                BACK TO TOP
            ====================================================== */}
      {/* =====================================================
    BACK TO TOP
====================================================== */}

                {/* FOOTER */}
        <Footer />
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`
        fixed
        right-5 md:right-7
        bottom-5 md:bottom-7
        z-[100]
        w-12 h-12
        rounded-full
        bg-[#B70000]
        text-white
        shadow-[0_8px_25px_rgba(183,0,0,0.25)]
        flex
        items-center
        justify-center
        cursor-pointer
        transition-[opacity,transform,box-shadow]
        duration-300
        ease-out
        hover:-translate-y-1
        hover:shadow-[0_12px_30px_rgba(183,0,0,0.35)]
        active:scale-95
        ${
          showBackTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        }
    `}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
}
