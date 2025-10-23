"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "I love how they brought our story alive with perfect editing and sound",
    author: "Pritha Bandhopadhyay",
  },
  {
    quote: "Working with Motion And Capture Films was an absolute pleasure. Their creativity and professionalism took our project to the next level!”",
    author: "Amit Kumar Mali",
  },
  {
    quote: "I just love how they had put efforts in their work and made our story this so memorable.",
    author: "Kartick Halder",
  },
];

function Dot({ active, onClick, label }) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className={`h-2.5 w-2.5 rounded-full transition-opacity ${
        active ? "opacity-100" : "opacity-40 hover:opacity-70"
      }`}
      style={{ backgroundColor: "currentColor" }}
    />
  );
}

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const intervalRef = useRef(null);

  const items = useMemo(() => TESTIMONIALS, []);
  const total = items.length;

  const goTo = (next, direction) => {
    setDir(direction);
    setIndex((next + total) % total);
  };

  const prev = () => goTo(index - 1, -1);
  const next = () => goTo(index + 1, 1);

  useEffect(() => {
    start();
    return stop;
  }, [index]);

  const start = () => {
    stop();
    intervalRef.current = setTimeout(() => goTo(index + 1, 1), 6000);
  };

  const stop = () => {
    if (intervalRef.current) clearTimeout(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <section
      className="relative isolate w-full bg-[#F7F0EF] text-[#2B2A29]"
      onMouseEnter={stop}
      onMouseLeave={start}
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
    >
      <div className="mx-auto max-w-5xl px-4 py-24 sm:py-28 md:py-32">
        <div className="pointer-events-none absolute inset-y-0 left-2 right-2 flex items-center justify-between">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-400/70 bg-white/70 backdrop-blur transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-400/70 bg-white/70 backdrop-blur transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid place-items-center text-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: dir === 1 ? 24 : -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir === 1 ? -24 : 24 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="w-full"
            >
              <h3 className="mx-auto max-w-[30ch]  font-semibold tracking-wide text-slate-700 text-base md:text-lg">
                {items[index].author}
              </h3>
              <div className="mx-auto mt-3 h-px w-8 bg-amber-600/60" aria-hidden />

              <blockquote className="mx-auto mt-8 max-w-4xl px-2 font-serif text-2xl leading-relaxed text-neutral-900 sm:text-3xl md:text-4xl">
                “{items[index].quote}”
              </blockquote>
            </motion.div>
          </AnimatePresence>

          <div className="mt-14 flex items-center gap-3 text-neutral-900">
            {items.map((_, i) => (
              <Dot
                key={i}
                active={i === index}
                onClick={() => goTo(i, i > index ? 1 : -1)}
                label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
