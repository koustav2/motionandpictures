"use client";
import React, { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";

const items = [
  {
    title: "Video Editing",
    desc:
      "We offer professional video editing for YouTube creators, short films, brand reels, and social media influencers.",
    Icon: () => (
      <svg viewBox="0 0 120 120" className="h-16 w-16 md:h-20 md:w-20 fill-white">
        <path d="M60 60c0 22.091-17.909 40-40 40V20c22.091 0 40 17.909 40 40Z" />
        <path d="M60 60c0-22.091 17.909-40 40-40v80c-22.091 0-40-17.909-40-40Z" />
      </svg>
    ),
  },
  {
    title: "Video Production",
    desc:
      "From scripting and storyboarding to filming and final cut—complete video production services for businesses and individuals.",
    Icon: () => (
      <svg viewBox="0 0 120 120" className="h-16 w-16 md:h-20 md:w-20 fill-white">
        <circle cx="50" cy="60" r="35" />
        <path d="M50 25a35 35 0 0 1 35 35H50Z" className="fill-white" />
      </svg>
    ),
  },
  {
    title: "Event Coverage",
    desc:
      "Capture your big day in a cinematic style with our premium event video editing and shooting services.",
    Icon: () => <Logo className="w-16 h-16 text-white/80" />,
  },
];

export default function Services() {
  const railRef = useRef(null);

  const scroll = (dir) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector("[data-card]");
    const step = card ? card.offsetWidth + 24 : 320; // ≈ gap
    rail.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" });
  };

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:pb-24 md:pt-10">

        {/* Heading */}
        <h2 className="text-center font-serif text-5xl md:text-7xl tracking-tight text-[#D4AF37]">
          Services
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-base md:text-lg leading-relaxed text-white/90">
          We turn visions into visuals that move hearts and spark action. Whether it's a
          brand story, a music video, a wedding, or a reel that needs to pop — we capture
          more than just motion. Let's create something unforgettable.
        </p>

        {/* Desktop grid */}
        <div className="mt-16 hidden md:grid grid-cols-3 gap-12 services">
          {items.map(({ title, desc, Icon }) => (
            <article key={title} className="flex flex-col items-center text-center">
              <Icon />
              <h3 className="mt-6 font-serif text-2xl md:text-3xl tracking-tight text-[#D4AF37]">
                {title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/80 max-w-xs">
                {desc}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
