"use client";

import AboutSection from "../AboutSection";
import Services from "../Services";
import TestimonialCarousel from "../TestimonialCarousel";

export default function Home() {
    return (
        <>
            <section className="relative w-full h-screen flex flex-col overflow-hidden">

                {/* VIDEO SECTION — FULL HEIGHT */}
                <div className="relative w-full flex-1 overflow-hidden">

                    {/* Background Video */}
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/MAC_Promo_02_website.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />

                    {/* Subtle 20% Black Overlay */}
                    <div className="absolute inset-0 pointer-events-none bg-black/20" />

                    {/* Gradient overlay for cinematic effect */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

                    {/* Center Text */}
                    <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
                        <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight whitespace-nowrap">
                            An Editing Destination...
                        </h1>
                    </div>

                </div>

                {/* BLACK BAR WITH TEXT */}
                <div className="w-full h-[10vh] bg-black flex items-center justify-center">
                    <p className="text-white text-lg sm:text-xl tracking-wide">
                        Weddings & Pre-Weddings | Corporate Events | Social Media Content
                    </p>
                </div>

            </section>

            <AboutSection />
            <Services />
            <TestimonialCarousel />
        </>
    );
}
