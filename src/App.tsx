import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

import Hero from "./components/Hero";
import OurClients from "./components/OurClients";
import ProblemSolution from "./components/ProblemSolution";
import Features from "./components/Features";
import OneSystem from "./components/OneSystem";
import Ecosystem from "./components/Ecosystem";
import AsYourWorkforce from "./components/AsYourWorkforce";
import PeopleStrategy from "./components/PeopleStrategy";
import NewsSection from "./components/NewsSection";
import Testimonials from "./components/Testimonials";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import ReadyTransformSection from "./components/ReadyTransformSection";

import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import NewsDetail from "./components/NewsDetail";

function Home() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <OurClients />
                <ProblemSolution />

                {/* FEATURES HANYA SEKALI */}
                <Features />

                <OneSystem />
                <Ecosystem />
                <AsYourWorkforce />
                <PeopleStrategy />
                <NewsSection />
                <Testimonials />
                <PricingSection />
                <FAQSection />
                <ReadyTransformSection />
            </main>

            <Footer />
        </>
    );
}

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<AboutUs />} />

                <Route path="/login" element={<Login />} />

                <Route path="/news/:id" element={<NewsDetail />} />
            </Routes>

            <BackToTop />
        </>
    );
}