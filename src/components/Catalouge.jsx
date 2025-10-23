"use client";
import { useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animated showcase grid with staggered cards and hover zoom
// Pure JavaScript (JSX) + Tailwind + Framer Motion

const ITEMS = [
  {
    id: "k-purbasa",
    title: "Love in the City of Joy | Kartick x Purbasa",
    subtitle: "Pre‑Wedding Cinematic Video 2025",
    excerpt:
      "A love story captured in the heart of Kolkata — vibrant streets, quiet glances, timeless frames.",
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    badge: "Pre‑Wedding",
  },
  {
    id: "sourav-swarnali",
    title: "Mandarmani Pre‑Wedding | Sourav × Swarnali",
    subtitle: "Cinematic | Khoobsurat",
    excerpt: "Sunset silhouettes, sea breeze, and a promise — moments you can almost feel.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    badge: "Story",
  },
  {
    id: "saiyaara",
    title: "Saiyaara (1980) — A Vintage Love Story in Kolkata",
    subtitle: "Ft. Kishore Kumar 🎙️✨",
    excerpt:
      "What if Saiyaara released in the golden era? A nostalgic re‑imagining set against the Ganges.",
    image:
      "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    badge: "Concept",
  },
  {
    id: "amit-vaishnavi",
    title: "Kolkata Police Pre‑Wedding | Amit × Vaishnavi",
    subtitle: "Cinematic | Rang Lageya",
    excerpt:
      "Uniforms and vows — hearts of professionals, eyes full of joy.",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    badge: "Pre‑Wedding",
  },
  {
    id: "firelight",
    title: "Firelight Sessions",
    subtitle: "Behind the Scenes",
    excerpt: "The magic before the take — color, sound, breath.",
    image:
      "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    badge: "BTS",
  },
  {
    id: "toast",
    title: "A Warm Toast by the Sea",
    subtitle: "Pre‑Wedding Moments",
    excerpt: "Two glasses, one fire, many memories.",
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    badge: "Moment",
  },
  {
    id: "patrol",
    title: "Stroll on the Promenade",
    subtitle: "Kolkata Police Love Story",
    excerpt: "Duty meets destiny.",
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    badge: "Portrait",
  },
  {
    id: "waves",
    title: "Running with the Waves",
    subtitle: "Mandarmani",
    excerpt: "Feet in the foam, wind in the hair.",
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    badge: "Lifestyle",
  },
];

export default function ShowcaseGrid() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: false });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(inView ? "visible" : "leave");
  }, [inView, controls]);

  const container = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
      leave: { opacity: 1 },
    }),
    []
  );

  const card = useMemo(
    () => ({
      hidden: { opacity: 0, y: 22 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
      leave: { opacity: 0.4, y: -10, transition: { duration: 0.3, ease: "easeIn" } },
    }),
    []
  );

  return (
    <section ref={ref} className="w-full bg-rose-50 text-neutral-800">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:py-20">
        <header className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-700">Featured Films</h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">Stories crafted with color, sound, and soul.</p>
          </div>
          <a href="#" className="hidden sm:inline-block border border-slate-700 px-4 py-2 text-sm hover:-translate-y-0.5 transition">View All</a>
        </header>

        <motion.ul
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-4"
        >
          {ITEMS.map((it, idx) => (
            <motion.li key={it.id} variants={card}>
              <a href={it.href} className="group block">
                <div className="relative overflow-hidden rounded-xl bg-slate-200">
                  <img
                    src={it.image}
                    alt={it.title}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.06]"
                    loading={idx < 4 ? "eager" : "lazy"}
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
                  <div className="absolute left-3 top-3 rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-slate-700 shadow-sm">
                    {it.badge}
                  </div>
                </div>

                <h3 className="mt-4 font-serif text-xl/7 md:text-2xl/8 text-slate-700">{it.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{it.subtitle}</p>
                <p className="mt-4 text-[15px] leading-7 text-slate-600 line-clamp-3">{it.excerpt}</p>

                <div className="mt-4 inline-flex items-center gap-2 text-slate-800">
                  <span className="text-sm font-medium">Watch</span>
                  <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}