import React from 'react';

// Import komponen sesuai struktur folder pada gambar
import Hero from './Hero';
import OurClients from './OurClients';
import ProblemSolution from './ProblemSolution';
import Features from './Features';
import OneSystem from './OneSystem';
import Ecosystem from './Ecosystem';
import AsYourWorkforce from './AsYourWorkforce';
import PeopleStrategy from './PeopleStrategy';
import NewsSection from './NewsSection';
import Testimonials from './Testimonials';
import PricingSection from './PricingSection';
import FAQSection from './FAQSection';
import ReadyTransformSection from './ReadyTransformSection';

export default function ReactApp() {
    return (
        <main className="w-full overflow-hidden">
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Client / Brand Logos */}
            <OurClients />

            {/* 3. Problem Solution */}
            <ProblemSolution />

            {/* 4. Features */}
            <Features />

            {/* 5. One System */}
            <OneSystem />

            {/* 6. Ecosystem */}
            <Ecosystem />

            {/* 7. As Your Workforce (Highlight Red Banner) */}
            <AsYourWorkforce />

            {/* 8. People Strategy */}
            <PeopleStrategy />

            {/* 9. News Section */}
            <NewsSection />

            {/* 10. Testimonials */}
            <Testimonials />

            {/* 11. Plan & Pricing */}
            <PricingSection />

            {/* 12. FAQ Section */}
            <FAQSection />

            {/* 13. Ready to Transform */}
            <ReadyTransformSection />
        </main>
    );
}
