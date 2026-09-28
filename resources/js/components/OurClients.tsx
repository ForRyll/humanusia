import React from 'react';

interface ClientLogo {
    src: string;
    alt: string;
}

// Menggunakan nama file yang valid dari folder public/images/
const logosRow1: ClientLogo[] = [
    { src: '/images/bimbelio.jpeg', alt: 'Bimbelio' },
    { src: '/images/humanusia.jpeg', alt: 'Humanusia' },
    { src: '/images/soemitro.jpeg', alt: 'Soemitro' },
    { src: '/images/logo3.jpeg', alt: 'Logo 3' },
    { src: '/images/slameticon_navbar.png', alt: 'Slameticon' },
    { src: '/images/logo.png', alt: 'Humanusia Logo' },
];

const logosRow2: ClientLogo[] = [
    { src: '/images/slameticon_navbar.png', alt: 'Slameticon' },
    { src: '/images/logo.png', alt: 'Humanusia Logo' },
    { src: '/images/logo3.jpeg', alt: 'Logo 3' },
    { src: '/images/soemitro.jpeg', alt: 'Soemitro' },
    { src: '/images/humanusia.jpeg', alt: 'Humanusia' },
    { src: '/images/bimbelio.jpeg', alt: 'Bimbelio' },
];

function MarqueeGroup({ logos }: { logos: ClientLogo[] }) {
    return (
        <div className="marquee-group">
            {logos.map((logo, index) => (
                <img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                    }}
                />
            ))}
        </div>
    );
}

export default function OurClients() {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="text-center max-w-7xl mx-auto mb-10 px-6">
                <h4 className="text-2xl md:text-4xl font-semibold text-black font-['Plus_Jakarta_Sans']">
                    Over 10,000+ companies across various industries grow with Humanusia
                </h4>
            </div>

            <div className="space-y-6">
                {/* ROW 1 : KE KANAN */}
                <div className="marquee-wrapper">
                    <div className="marquee marquee-right">
                        <MarqueeGroup logos={logosRow1} />
                        <MarqueeGroup logos={logosRow1} />
                        <MarqueeGroup logos={logosRow1} />
                    </div>
                </div>

                {/* ROW 2 : KE KIRI */}
                <div className="marquee-wrapper">
                    <div className="marquee marquee-left">
                        <MarqueeGroup logos={logosRow2} />
                        <MarqueeGroup logos={logosRow2} />
                        <MarqueeGroup logos={logosRow2} />
                    </div>
                </div>
            </div>
        </section>
    );
}
