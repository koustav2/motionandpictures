"use client";

import AboutSection from "../AboutSection";
import Services from "../Services";
import TestimonialCarousel from "../TestimonialCarousel";

export default function Home() {
    return (
        <>
            <section className="relative w-full h-screen overflow-hidden">
                {/* Background video */}
                <video
                    className="absolute inset-0 object-cover w-full h-full"
                    src="/MAC_Promo_02_website.mp4"     // put file in /public/videos/
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

                <div className="relative z-10 flex items-center h-full">
                    <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
                        <div className="flex items-start">
                            <span className="mt-2 mr-6 hidden h-64 w-px bg-[#D4AF37]/70 md:block" />

                            <div className="max-w-2xl text-white">
                                <h1 className="font-serif text-5xl leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                                    An Editing<br />Destination
                                </h1>

                                <p className="mt-6 text-base leading-relaxed sm:text-lg md:text-xl text-white/90">
                                    We offer professional video editing services that turn raw footage into
                                    polished, impactful stories. From corporate promos and documentaries to
                                    weddings and social media content, we deliver cinematic edits with expert
                                    color grading, sound design, motion graphics, and more. Our team ensures
                                    every frame supports your vision, creating visually compelling content
                                    that engages and resonates with your audience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AboutSection/>
            <Services />
            <TestimonialCarousel/>
        </>
    );
}
