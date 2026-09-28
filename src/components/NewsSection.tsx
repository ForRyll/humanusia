import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NewsItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

const newsArticles: NewsItem[] = [
    {
        id: 1,
        title: "Memaksimalkan Efisiensi SDM dengan Humanusia yang Unggul",
        description:
            "Humanusia membantu organisasi mengelola sumber daya manusia secara lebih terstruktur, efisien, dan terintegrasi dalam satu sistem.",
        image: "/images/news.png"
    },
    {
        id: 2,
        title: "Transformasi Digital dalam Manajemen Sumber Daya Manusia",
        description:
            "Teknologi digital memberikan cara baru bagi perusahaan untuk meningkatkan pengelolaan karyawan dan proses HR.",
        image: "/images/news.png"
    },
    {
        id: 3,
        title: "Membangun Pengalaman Kerja yang Lebih Baik dengan HRIS",
        description:
            "Sistem HRIS membantu perusahaan menciptakan pengalaman kerja yang lebih praktis bagi HR maupun seluruh karyawan.",
        image: "/images/news.png"
    },
    {
        id: 4,
        title: "Mengelola Karyawan di Berbagai Lokasi dengan Satu Sistem",
        description:
            "Kelola data, kehadiran, dan kebutuhan karyawan dari berbagai lokasi secara terpusat melalui Humanusia.",
        image: "/images/news.png"
    },
    {
        id: 5,
        title: "Meningkatkan Produktivitas Tim HR melalui Teknologi",
        description:
            "Otomatisasi proses administratif memungkinkan tim HR berfokus pada pekerjaan yang lebih strategis.",
        image: "/images/news.png"
    },
    {
        id: 6,
        title: "Masa Depan Human Resource Management di Era Digital",
        description:
            "Perkembangan teknologi membawa perubahan pada cara organisasi mengelola tenaga kerja dan membangun lingkungan kerja.",
        image: "/images/news.png"
    }
];

export default function NewsSection() {

    const [imageErrors, setImageErrors] = useState<{
        [key: number]: boolean;
    }>({});

    const handleImageError = (id: number) => {
        setImageErrors((prev) => ({
            ...prev,
            [id]: true
        }));
    };

    return (
        <section
            id="news"
            className="py-20 md:py-24 bg-white px-6 md:px-10 lg:px-16 overflow-hidden"
        >
            <div className="max-w-[1480px] mx-auto">

                {/* HEADER */}
                <div className="mb-7 md:mb-8">
                    <div className="flex items-center gap-3 mb-10 md:mb-14">
                        <span className="w-1.5 h-6 bg-[#B70000] rounded-full inline-block"></span>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                            News
                        </h2>
                    </div>
                </div>

                {/* NEWS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[6px]">

                    {newsArticles.map((article) => (

                        <Link
                            key={article.id}
                            to={`/news/${article.id}`}
                            className="news-card group relative block h-[260px] md:h-[280px] rounded-[5px] overflow-hidden bg-gray-100"
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

                            {/* RED OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#B70000] via-[#B70000]/70 to-transparent opacity-[0.92]">
                            </div>

                            {/* ARROW */}
                            <span className="absolute top-3 right-3 w-[24px] h-[24px] rounded-full bg-[#B70000] text-white flex items-center justify-center text-[12px] z-20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                ↗
                            </span>

                            {/* CONTENT */}
                            <div className="absolute left-5 right-5 bottom-5 text-white z-10">

                                <h3 className="text-[15px] md:text-[17px] font-semibold leading-[1.2] line-clamp-2 mb-2">
                                    {article.title}
                                </h3>

                                <p className="text-[10px] md:text-[11px] leading-[1.45] text-white/85 line-clamp-3">
                                    {article.description}
                                </p>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>
        </section>
    );
}