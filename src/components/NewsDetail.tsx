import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface NewsArticle {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    content: {
        heading?: string;
        paragraphs: string[];
    }[];
}

const newsData: NewsArticle[] = [
    {
        id: 1,
        title: "Memaksimalkan Efisiensi SDM dengan Humanusia yang Unggul",
        description:
            "Humanusia membantu perusahaan mengelola sumber daya manusia secara lebih praktis, terstruktur, dan terintegrasi melalui satu sistem HRIS.",
        image: "/images/news.png",
        date: "12 September 2026",
        content: [
            {
                paragraphs: [
                    "Pengelolaan sumber daya manusia menjadi salah satu bagian penting dalam menjaga keberlangsungan dan perkembangan sebuah organisasi. Seiring dengan semakin kompleksnya kebutuhan perusahaan, proses administrasi HR yang dilakukan secara manual dapat membutuhkan waktu dan tenaga yang tidak sedikit."
                ]
            },
            {
                heading: "Pengelolaan HR dalam Satu Platform",
                paragraphs: [
                    "Humanusia hadir sebagai platform HRIS yang membantu perusahaan mengelola berbagai kebutuhan sumber daya manusia dalam satu sistem.",
                    "Mulai dari pengelolaan kehadiran, payroll, cuti, izin, hingga informasi karyawan dapat dikelola secara lebih terstruktur."
                ]
            },
            {
                heading: "Membantu HR Bekerja Lebih Efisien",
                paragraphs: [
                    "Digitalisasi proses HR memberikan kesempatan bagi tim HR untuk mengurangi pekerjaan administratif yang berulang.",
                    "Dengan informasi yang tersimpan dalam satu sistem, proses pengelolaan data karyawan dapat dilakukan dengan lebih praktis dan terstruktur."
                ]
            },
            {
                heading: "Membangun Sistem HR yang Terhubung",
                paragraphs: [
                    "Ketika kebutuhan organisasi semakin berkembang, perusahaan membutuhkan sistem yang mampu mengikuti perubahan tersebut.",
                    "Pengelolaan HR yang terintegrasi dapat membantu perusahaan menjaga informasi tetap terhubung dan mudah diakses oleh pihak yang membutuhkan."
                ]
            }
        ]
    },

    {
        id: 2,
        title: "Transformasi Digital dalam Manajemen Sumber Daya Manusia",
        description:
            "Teknologi digital memberikan cara baru bagi perusahaan untuk meningkatkan pengelolaan karyawan dan proses HR.",
        image: "/images/news.png",
        date: "10 September 2026",
        content: [
            {
                paragraphs: [
                    "Transformasi digital telah membawa perubahan dalam berbagai aktivitas bisnis, termasuk dalam pengelolaan sumber daya manusia.",
                    "Perusahaan kini membutuhkan sistem yang dapat membantu proses HR berjalan lebih cepat, terstruktur, dan mudah dipantau."
                ]
            },
            {
                heading: "Digitalisasi Proses HR",
                paragraphs: [
                    "Digitalisasi memungkinkan berbagai proses administratif dilakukan melalui satu sistem.",
                    "Data karyawan, kehadiran, cuti, hingga kebutuhan administrasi lainnya dapat dikelola dengan lebih terorganisir."
                ]
            },
            {
                heading: "Mendorong Efisiensi Operasional",
                paragraphs: [
                    "Penggunaan teknologi dapat mengurangi pekerjaan administratif yang dilakukan secara berulang.",
                    "Dengan demikian, tim HR dapat memiliki lebih banyak waktu untuk menjalankan aktivitas yang bersifat strategis."
                ]
            }
        ]
    },

    {
        id: 3,
        title: "Membangun Pengalaman Kerja yang Lebih Baik dengan HRIS",
        description:
            "Sistem HRIS membantu perusahaan menciptakan pengalaman kerja yang lebih praktis bagi HR maupun seluruh karyawan.",
        image: "/images/news.png",
        date: "8 September 2026",
        content: [
            {
                paragraphs: [
                    "Pengalaman kerja tidak hanya dipengaruhi oleh lingkungan kantor, tetapi juga oleh bagaimana karyawan berinteraksi dengan sistem internal perusahaan.",
                    "Proses administratif yang sederhana dan mudah digunakan dapat membantu menciptakan pengalaman kerja yang lebih baik."
                ]
            },
            {
                heading: "Kemudahan bagi Karyawan",
                paragraphs: [
                    "HRIS memungkinkan karyawan mengakses berbagai kebutuhan administratif secara lebih praktis.",
                    "Absensi, pengajuan cuti, dan informasi pekerjaan dapat dilakukan melalui sistem yang terintegrasi."
                ]
            },
            {
                heading: "Mendukung Tim HR",
                paragraphs: [
                    "Selain memberikan kemudahan bagi karyawan, HRIS juga membantu tim HR mengelola data secara lebih terstruktur.",
                    "Informasi yang terpusat dapat mempermudah proses pemantauan dan pengelolaan administrasi."
                ]
            }
        ]
    },

    {
        id: 4,
        title: "Mengelola Karyawan di Berbagai Lokasi dengan Satu Sistem",
        description:
            "Kelola data, kehadiran, dan kebutuhan karyawan dari berbagai lokasi secara terpusat melalui Humanusia.",
        image: "/images/news.png",
        date: "6 September 2026",
        content: [
            {
                paragraphs: [
                    "Perusahaan dengan beberapa cabang atau lokasi kerja membutuhkan sistem pengelolaan karyawan yang mampu menangani kebutuhan secara terpusat.",
                    "Perbedaan lokasi dapat membuat proses administrasi menjadi lebih kompleks apabila tidak didukung sistem yang tepat."
                ]
            },
            {
                heading: "Pengelolaan Multi-Lokasi",
                paragraphs: [
                    "Humanusia membantu perusahaan mengelola informasi karyawan dari berbagai lokasi dalam satu sistem.",
                    "Tim HR dapat memantau kebutuhan administratif tanpa harus menggunakan sistem yang berbeda untuk setiap lokasi."
                ]
            },
            {
                heading: "Data yang Lebih Terpusat",
                paragraphs: [
                    "Pengelolaan data secara terpusat membantu perusahaan menjaga informasi tetap terorganisir.",
                    "Hal ini juga mempermudah proses pemantauan dan pengambilan informasi yang dibutuhkan."
                ]
            }
        ]
    },

    {
        id: 5,
        title: "Meningkatkan Produktivitas Tim HR melalui Teknologi",
        description:
            "Otomatisasi proses administratif memungkinkan tim HR berfokus pada pekerjaan yang lebih strategis.",
        image: "/images/news.png",
        date: "4 September 2026",
        content: [
            {
                paragraphs: [
                    "Tim HR memiliki berbagai tanggung jawab administratif yang harus dilakukan secara rutin.",
                    "Jika sebagian besar waktu digunakan untuk pekerjaan administratif berulang, ruang untuk menjalankan aktivitas strategis dapat menjadi lebih terbatas."
                ]
            },
            {
                heading: "Otomatisasi Administrasi",
                paragraphs: [
                    "Teknologi dapat membantu mengotomatisasi berbagai proses administratif HR.",
                    "Dengan sistem yang terintegrasi, data dapat dikelola dengan lebih cepat dan terstruktur."
                ]
            },
            {
                heading: "Fokus pada Aktivitas Strategis",
                paragraphs: [
                    "Pengurangan pekerjaan administratif yang berulang dapat memberikan kesempatan bagi tim HR untuk lebih fokus pada kebutuhan organisasi dan karyawan."
                ]
            }
        ]
    },

    {
        id: 6,
        title: "Masa Depan Human Resource Management di Era Digital",
        description:
            "Perkembangan teknologi membawa perubahan pada cara organisasi mengelola tenaga kerja dan membangun lingkungan kerja.",
        image: "/images/news.png",
        date: "2 September 2026",
        content: [
            {
                paragraphs: [
                    "Perkembangan teknologi terus memengaruhi cara perusahaan menjalankan aktivitas bisnis, termasuk dalam pengelolaan sumber daya manusia.",
                    "Sistem digital semakin banyak digunakan untuk membantu perusahaan mengelola informasi dan kebutuhan karyawan."
                ]
            },
            {
                heading: "Perubahan Cara Kerja HR",
                paragraphs: [
                    "Teknologi memungkinkan berbagai proses HR dilakukan secara lebih terintegrasi.",
                    "Data yang sebelumnya tersebar dapat dikelola dalam satu sistem sehingga lebih mudah diakses."
                ]
            },
            {
                heading: "Membangun Pengelolaan SDM yang Adaptif",
                paragraphs: [
                    "Perusahaan membutuhkan sistem yang dapat mengikuti perkembangan kebutuhan organisasi.",
                    "Penggunaan teknologi menjadi salah satu bagian dalam membangun proses pengelolaan sumber daya manusia yang lebih adaptif."
                ]
            }
        ]
    }
];

export default function NewsDetail() {

    const navigate = useNavigate();
    const { id } = useParams();

    const article = newsData.find(
        (item) => item.id === Number(id)
    );

    // Jika ID berita tidak ditemukan
    if (!article) {
        return (
            <>
                <Navbar />

                <main className="min-h-screen bg-white pt-32 px-6">
                    <div className="max-w-[1100px] mx-auto text-center py-20">

                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                            Berita Tidak Ditemukan
                        </h1>

                        <p className="mt-4 text-gray-500">
                            Artikel yang kamu cari tidak tersedia.
                        </p>

                        <button
                            onClick={() => navigate('/')}
                            className="mt-8 px-6 py-3 rounded-xl bg-[#B70000] text-white font-semibold hover:bg-[#970000] transition-colors"
                        >
                            Kembali ke Beranda
                        </button>

                    </div>
                </main>

                <Footer />
            </>
        );
    }

    return (
        <div className="bg-white text-gray-900 font-['Inter_Tight',sans-serif]">

            {/* NAVBAR */}
            <Navbar />

            <main>

                {/* TOP SPACING */}
                <div className="pt-20"></div>

                {/* NEWS DETAIL */}
                <section className="bg-white px-6 md:px-10 lg:px-16 py-12 md:py-20">

                    <div className="max-w-[1100px] mx-auto">

                        {/* BACK BUTTON */}
                        <div className="mb-10 md:mb-14">

                            <button
                                onClick={() => navigate('/')}
                                className="inline-flex items-center gap-2 text-[12px] md:text-[13px] font-medium text-gray-500 hover:text-[#B70000] transition-colors duration-300 cursor-pointer"
                            >
                                <span className="text-lg leading-none">
                                    ←
                                </span>

                                <span>
                                    Back to Home
                                </span>
                            </button>

                        </div>

                        {/* HEADER */}
                        <div className="max-w-[900px] mx-auto mb-12 md:mb-16">

                            {/* LABEL */}
                            <div className="mb-5">
                                <span className="text-[13px] md:text-[14px] font-semibold text-[#B70000] tracking-wide">
                                    Humanusia News
                                </span>
                            </div>

                            {/* TITLE */}
                            <h1 className="text-[30px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-semibold text-gray-900 leading-[1.08] tracking-tight">
                                {article.title}
                            </h1>

                            {/* DESCRIPTION */}
                            <p className="mt-7 text-[14px] md:text-[16px] text-gray-500 leading-relaxed max-w-[850px]">
                                {article.description}
                            </p>

                            {/* META */}
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-7 text-[11px] md:text-[12px] text-gray-400">

                                <span>
                                    {article.date}
                                </span>

                                <span className="hidden sm:inline">
                                    •
                                </span>

                                <span>
                                    Humanusia
                                </span>

                            </div>

                        </div>

                        {/* HERO IMAGE */}
                        <div className="w-full aspect-[16/7] md:aspect-[16/6] overflow-hidden bg-gray-100 mb-12 md:mb-16 rounded-[8px]">

                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover"
                            />

                        </div>

                        {/* ARTICLE CONTENT */}
                        <article className="max-w-[900px] mx-auto">

                            {article.content.map((section, index) => (

                                <section
                                    key={index}
                                    className="mb-10"
                                >

                                    {section.heading && (
                                        <h2 className="text-[22px] md:text-[28px] font-semibold text-gray-900 leading-tight mt-12 mb-6">
                                            {section.heading}
                                        </h2>
                                    )}

                                    {section.paragraphs.map((paragraph, paragraphIndex) => (

                                        <p
                                            key={paragraphIndex}
                                            className="text-[14px] md:text-[16px] text-gray-600 leading-[1.9] mb-7 text-justify"
                                        >
                                            {paragraph}
                                        </p>

                                    ))}

                                </section>

                            ))}

                            {/* CLOSING */}
                            <div className="border-t border-gray-200 mt-12 md:mt-16 pt-8">

                                <p className="text-[13px] md:text-[14px] text-gray-500 leading-relaxed text-justify">
                                    Humanusia dirancang untuk membantu perusahaan membangun pengelolaan sumber daya manusia yang lebih praktis, terstruktur, dan terhubung. Dengan satu sistem, kebutuhan HR dapat dikelola secara lebih sederhana sehingga perusahaan dapat lebih fokus pada perkembangan organisasi dan orang-orang di dalamnya.
                                </p>

                            </div>

                        </article>

                    </div>

                </section>

            </main>

            {/* FOOTER */}
            <Footer />

        </div>
    );
}