import React, { useState } from 'react';

// Interface tipe data berita
interface NewsItem {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
}

// Data 6 Artikel Berita
const newsArticles: NewsItem[] = [
    {
        id: 1,
        title: "Memaksimalkan Efisiensi SDM dengan Humanusia yang Unggul dengan Fi...",
        description: "Humanusia membantu organisasi mengelola sumber daya manusia secara lebih terstruktur, efisien, dan terintegrasi dalam satu sistem.",
        image: "/images/news.png",
        link: "/news"
    },
    {
        id: 2,
        title: "Transformasi Digital dalam Manajemen Sumber Daya Manusia",
        description: "Teknologi digital memberikan cara baru bagi perusahaan untuk meningkatkan pengelolaan karyawan dan proses HR.",
        image: "/images/news.png",
        link: "/news"
    },
    {
        id: 3,
        title: "Membangun Pengalaman Kerja yang Lebih Baik dengan HRIS",
        description: "Sistem HRIS membantu perusahaan menciptakan pengalaman kerja yang lebih praktis bagi HR maupun seluruh karyawan.",
        image: "/images/news.png",
        link: "/news"
    },
    {
        id: 4,
        title: "Mengelola Karyawan di Berbagai Lokasi dengan Satu Sistem",
        description: "Kelola data, kehadiran, dan kebutuhan karyawan dari berbagai lokasi secara terpusat melalui Humanusia.",
        image: "/images/news.png",
        link: "/news"
    },
    {
        id: 5,
        title: "Meningkatkan Produktivitas Tim HR melalui Teknologi",
        description: "Otomatisasi proses administratif memungkinkan tim HR berfokus pada pekerjaan yang lebih strategis.",
        image: "/images/news.png",
        link: "/news"
    },
    {
        id: 6,
        title: "Masa Depan Human Resource Management di Era Digital",
        description: "Perkembangan teknologi membawa perubahan pada cara organisasi mengelola tenaga kerja dan membangun lingkungan kerja.",
        image: "/images/news.png",
        link: "/news"
    }
];

export default function NewsSection() {
    // State error muat gambar per kartu berita
    const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

    const handleImageError = (id: number) => {
        setImageErrors((prev) => ({ ...prev, [id]: true }));
    };

    return (
        /* NEWS SECTION */
        <section className="py-20 md:py-24 bg-white px-6 md:px-10 lg:px-16 overflow-hidden">
            <div className="max-w-[1380px] mx-auto">

                {/* HEADER */}
                <div className="mb-7 md:mb-8">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-3 mb-10 md:mb-14">
                            <span className="w-1.5 h-6 bg-[#B70000] rounded-full inline-block"></span>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                                News
                            </h2>
                        </div>
                    </div>
                </div>

                {/* NEWS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[6px] md:gap-[6px]">
                    {newsArticles.map((article) => (
                        <a
                            key={article.id}
                            href={article.link}
                            className="news-card group relative block h-[220px] md:h-[230px] rounded-[5px] overflow-hidden bg-gray-100"
                        >
                            {/* IMAGE */}
                            {!imageErrors[article.id] ? (
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    onError={() => handleImageError(article.id)}
                                />
                            ) : (
                                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-xs text-gray-500">
                                    [ Gambar Berita ]
                                </div>
                            )}

                            {/* DARK / RED OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#B70000] via-[#B70000]/70 to-transparent opacity-[0.92]"></div>

                            {/* ARROW ICON */}
                            <span className="absolute top-2 right-2 w-[18px] h-[18px] rounded-full bg-[#B70000] text-white flex items-center justify-center text-[10px] z-20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                ↗
                            </span>

                            {/* CONTENT */}
                            <div className="absolute left-3 right-3 bottom-3 text-white z-10">
                                <h3 className="text-[11px] md:text-[12px] font-semibold leading-[1.15] line-clamp-2 mb-1">
                                    {article.title}
                                </h3>
                                <p className="text-[7px] md:text-[8px] leading-[1.35] text-white/85 line-clamp-3">
                                    {article.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}
