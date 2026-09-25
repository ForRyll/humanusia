import React, { useState } from 'react';

// 1. Interface Tipe Data FAQ Item
interface FAQItem {
    id: number;
    question: string;
    answer: React.ReactNode; // Menggunakan ReactNode agar jawaban bisa berupa paragraf/HTML
}

// 2. Data FAQ
const faqList: FAQItem[] = [
    {
        id: 1,
        question: "What is Humanusia?",
        answer: (
            <>
                <p>
                    HUMANUSIA is an indispensable personnel information system that plays a vital role in ensuring the smooth operation of a company. By integrating personnel, management, and administrative data, HUMANUSIA is designed to facilitate efficient management and easy access to employee information.
                </p>
                <p>
                    With HUMANUSIA, companies can organize employee information quickly and easily. From managing personal data to employment history, this app streamlines the search for the information needed for smarter decision-making.
                </p>
                <p>
                    Increase your HR team's productivity and effectiveness with HUMANUSIA. Get instant access to powerful features, including automated attendance management and faster processing of leave, business travel, and overtime application forms.
                </p>
            </>
        ),
    },
    {
        id: 2,
        question: "Who should see Humanusia?",
        answer: (
            <p>
                Humanusia is designed for business owners, HR managers, department heads, and employees. Anyone looking to simplify HR administration, streamline attendance tracking, and manage payroll effortlessly can benefit from Humanusia.
            </p>
        ),
    },
    {
        id: 3,
        question: "How does Humanusia's presence help the company's development?",
        answer: (
            <p>
                By automating repetitive administrative tasks like attendance, leave approvals, and payroll calculation, Humanusia reduces human error and frees up valuable time for HR teams to focus on strategic employee growth and company culture.
            </p>
        ),
    },
    {
        id: 4,
        question: "What if my company wants to subscribe to Humanusia?",
        answer: (
            <p>
                You can easily sign up through our 14-day free trial button or reach out directly to our sales team via the Schedule a Demo form to get a personalized onboarding experience tailored to your company's scale.
            </p>
        ),
    },
    {
        id: 5,
        question: "What are the best feature recommendations from Humanusia?",
        answer: (
            <p>
                Our top-rated features include Real-Time Location Attendance, Automated Payroll Processing with tax and BPJS calculation, and Instant Leave & Permission Management system.
            </p>
        ),
    },
];

// 3. Komponen Utama FAQ
export const FAQSection: React.FC = () => {
    // State untuk menyimpan ID item yang terbuka.
    // Default = 1 (Item pertama terbuka secara default)
    const [openId, setOpenId] = useState<number | null>(1);

    // Handler Toggle Buka/Tutup
    const toggleFAQ = (id: number) => {
        setOpenId((prevId) => (prevId === id ? null : id));
    };

    return (
        <section className="py-16 md:py-24 bg-[#F9EBEB]">
            <div className="max-w-[1000px] mx-auto px-6 md:px-12">

                {/* JUDUL SECTION */}
                <h2 className="text-3xl md:text-5xl font-extrabold text-black text-center tracking-tight mb-12 md:mb-16">
                    FAQ
                </h2>

                {/* CONTAINER LIST FAQ */}
                <div className="space-y-4">
                    {faqList.map((item) => {
                        const isOpen = openId === item.id;

                        return (
                            <div
                                key={item.id}
                                className={`faq-item bg-white rounded-2xl md:rounded-3xl shadow-sm border border-gray-100/80 overflow-hidden transition-all duration-300 ${
                                    isOpen ? 'active' : ''
                                }`}
                            >
                                {/* TOMBOL FAQ */}
                                <button
                                    type="button"
                                    onClick={() => toggleFAQ(item.id)}
                                    className="faq-button w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4 text-left font-bold text-gray-900 text-base md:text-lg focus:outline-none cursor-pointer"
                                >
                                    <span>{item.question}</span>
                                    <span className="faq-icon text-xl md:text-2xl font-normal text-gray-500 flex-shrink-0 transition-transform duration-300">
                                        {isOpen ? '—' : '+'}
                                    </span>
                                </button>

                                {/* WRAPPER JAWABAN DENGAN ANIMASI SMOOTH */}
                                <div
                                    className={`faq-answer grid transition-all duration-500 ease-in-out ${
                                        isOpen
                                            ? 'grid-rows-[1fr] opacity-100'
                                            : 'grid-rows-[0fr] opacity-0'
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-6 md:px-8 pb-6 text-gray-500 text-xs md:text-sm leading-relaxed space-y-3">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default FAQSection;
