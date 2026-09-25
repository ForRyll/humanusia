import React, { useState } from 'react';

// Interface tipe data testimonial
interface TestimonialItem {
    id: number;
    text: string;
    name: string;
    role: string;
    avatar: string;
}

// Data Testimonial
const testimonialsData: TestimonialItem[] = [
    {
        id: 1,
        text: "“Sebelumnya kami cukup banyak mengandalkan proses manual untuk absensi, cuti, dan pengelolaan data karyawan. Dengan Humanusia, semuanya jadi lebih terstruktur dalam satu sistem. Tim HR juga lebih mudah memantau kehadiran karyawan, terutama karena kami memiliki beberapa lokasi kerja.”",
        name: "Via",
        role: "HR Manager PT Survego",
        avatar: "/images/harryadin.png"
    },
    {
        id: 2,
        text: "“Yang paling membantu bagi kami adalah fleksibilitas pengaturan lokasi dan pengelolaan karyawan dari beberapa cabang sekaligus. Kami tidak perlu lagi menggunakan sistem yang berbeda-beda untuk setiap lokasi, sehingga pekerjaan administratif HR jauh lebih efisien.”",
        name: "Zahra",
        role: "HR & People Operations Filasio",
        avatar: "/images/harryadin.png"
    },
    {
        id: 3,
        text: "“Sekarang saya bisa melakukan absensi, mengajukan cuti, dan melihat informasi terkait pekerjaan langsung dari aplikasi. Prosesnya lebih praktis karena tidak perlu lagi menghubungi HR untuk hal-hal administratif yang sederhana.”",
        name: "Angel",
        role: "Employee PT Jalu",
        avatar: "/images/harryadin.png"
    }
];

// Sub-komponen 1 Group Testimonial Cards
function TestimonialGroup({ testimonials }: { testimonials: TestimonialItem[] }) {
    const [avatarErrors, setAvatarErrors] = useState<{ [key: number]: boolean }>({});

    const handleAvatarError = (id: number) => {
        setAvatarErrors((prev) => ({ ...prev, [id]: true }));
    };

    return (
        <div className="testimonial-group">
            {testimonials.map((item, index) => (
                <div key={`${item.id}-${index}`} className="testimonial-card">
                    <p className="testimonial-text">{item.text}</p>
                    <div className="testimonial-user">
                        {!avatarErrors[item.id] ? (
                            <img
                                src={item.avatar}
                                alt={item.name}
                                className="testimonial-avatar"
                                onError={() => handleAvatarError(item.id)}
                            />
                        ) : (
                            <div className="testimonial-avatar bg-white/20 flex items-center justify-center text-[10px] font-bold">
                                {item.name.charAt(0)}
                            </div>
                        )}
                        <div>
                            <h4 className="testimonial-name">{item.name}</h4>
                            <p className="testimonial-role">{item.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function Testimonials() {
    return (
        /* SECTION: WHAT OUR USERS SAY */
        <section id="testimonials" className="w-full bg-white py-16 md:py-24 overflow-hidden">
            {/* HEADER */}
            <div className="max-w-[1200px] mx-auto px-6 md:px-10 mb-10 md:mb-14">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-tight tracking-tight text-black">
                        What Our Users Say
                    </h2>
                </div>
            </div>

            {/* TESTIMONIAL MARQUEES */}
            <div className="testimonial-marquee-area space-y-4 md:space-y-6">

                {/* ROW 1 — BERGERAK KE KIRI */}
                <div className="testimonial-marquee-wrapper">
                    <div className="testimonial-marquee testimonial-left">
                        <TestimonialGroup testimonials={testimonialsData} />
                        <TestimonialGroup testimonials={testimonialsData} />
                    </div>
                </div>

                {/* ROW 2 — BERGERAK KE KANAN */}
                <div className="testimonial-marquee-wrapper">
                    <div className="testimonial-marquee testimonial-right">
                        <TestimonialGroup testimonials={testimonialsData} />
                        <TestimonialGroup testimonials={testimonialsData} />
                    </div>
                </div>

            </div>
        </section>
    );
}
