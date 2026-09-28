import React from "react";

interface ClientLogo {
    src: string;
    alt: string;
}

const logosRow1: ClientLogo[] = [
    { src: "/images/our1.png", alt: "Our Client 1" },
    { src: "/images/our2.png", alt: "Our Client 2" },
    { src: "/images/our3.png", alt: "Our Client 3" },
    { src: "/images/our4.png", alt: "Our Client 4" },
];

const logosRow2: ClientLogo[] = [
    { src: "/images/our5.png", alt: "Our Client 5" },
    { src: "/images/our6.png", alt: "Our Client 6" },
    { src: "/images/our7.png", alt: "Our Client 7" },
    { src: "/images/our8.png", alt: "Our Client 8" },
];

function MarqueeGroup({ logos }: { logos: ClientLogo[] }) {
    return (
        <div className="marquee-group">
            {logos.map((logo, index) => (
                <img
                    key={`${logo.alt}-${index}`}
                    src={logo.src}
                    alt={logo.alt}
                />
            ))}
        </div>
    );
}

export default function OurClients() {
    return (
        <section className="our-clients-section">

            {/* HEADER */}
            <div className="our-clients-header">
                <h4>
                    Over 10,000+ companies across various industries grow with
                    Humanusia
                </h4>
            </div>

            {/* MARQUEE */}
            <div className="clients-marquee-container">

                {/* ROW 1 — KE KANAN */}
                <div className="marquee-wrapper">
                    <div className="marquee marquee-right">

                        <MarqueeGroup logos={logosRow1} />
                        <MarqueeGroup logos={logosRow1} />
                        <MarqueeGroup logos={logosRow1} />

                    </div>
                </div>

                {/* ROW 2 — KE KIRI */}
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