"use client";

import AboutSection from "../AboutSection";
import Services from "../Services";
import TestimonialCarousel from "../TestimonialCarousel";

export default function Home() {
    return (
        <>
            <section className="relative h-screen w-full overflow-hidden">
                {/* Background video */}
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://video.wixstatic.com/video/27bb82_a6c2fff7a3ba42c5849fb33ab01d3489/1080p/mp4/file.mp4"     // put file in /public/videos/
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

                <div className="relative z-10 h-full flex items-center">
                    <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
                        <div className="flex items-start">
                            <span className="mt-2 mr-6 hidden h-64 w-px bg-[#D4AF37]/70 md:block" />

                            <div className="text-white max-w-2xl">
                                <h1 className="font-serif leading-tight tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                                    An Editing<br />Destination
                                </h1>

                                <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-white/90">
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
