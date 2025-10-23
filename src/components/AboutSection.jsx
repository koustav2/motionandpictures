"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: false });


  const lastY = useRef(0);
  const [direction, setDirection] = useState("down"); 

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setDirection(y > lastY.current ? "down" : "up");
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const makeVariants = (dir) => {
    const offset = dir === "down" ? 40 : -40;
    return {
      hidden: { opacity: 0, y: offset },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.06 },
      },
      leave: {
        opacity: 0,
        y: -offset,
        transition: { duration: 0.45, ease: "easeIn" },
      },
    };
  };

  // Drive animations based on visibility
  useEffect(() => {
    const v = makeVariants(direction);
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("leave");
    }
  }, [inView, direction]);

  const variants = makeVariants(direction);

  return (
    <section ref={ref} className="w-full bg-[#F7F0EF] text-[#2B2A29] overflow-hidden">
      <motion.div
        className="mx-auto max-w-6xl px-4 py-20 sm:py-24 md:py-28"
        variants={variants}
        initial="hidden"
        animate={controls}
      >

        <motion.div variants={variants} className="text-center">
          <p className="mx-auto max-w-4xl text-[10px] sm:text-sm tracking-[0.22em] text-slate-700/90">
            Weddings & Pre-Weddings <span className="mx-2 text-slate-400">|</span> Corporate Events
            <span className="mx-2 text-slate-400">|</span> Social Media Content
          </p>
        </motion.div>


        <motion.h1
          variants={variants}
          className="mt-8 text-center font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] text-slate-700"
        >
          About Motion and Capture Films
        </motion.h1>

        <motion.div variants={variants} className="mt-10 flex justify-center">
          <p className="mx-auto max-w-3xl text-center text-base sm:text-lg md:text-xl leading-8 md:leading-9 text-slate-600">
            At Motion And Capture Films, we don’t just edit videos — we craft visual experiences. From cinematic
            storytelling to crisp corporate films, our passion is bringing your vision to life, frame by frame. With a
            keen eye for detail and a flair for creativity, we partner with brands, creators, and individuals to deliver
            standout content that connects.
          </p>
        </motion.div>

        <motion.p variants={variants} className="mt-8 text-center text-sm font-semibold text-neutral-800">
          <span className="italic">(Tell your story & build trust)</span>
        </motion.p>
      </motion.div>
    </section>
  );
}
