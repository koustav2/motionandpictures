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

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("leave");
  }, [inView, direction]);

  const variants = makeVariants(direction);

  return (
    <section ref={ref} className="w-full bg-black text-white overflow-hidden">
      <motion.div
        className="mx-auto max-w-6xl px-4 py-20 sm:py-24 md:py-28"
        variants={variants}
        initial="hidden"
        animate={controls}
      >

        {/* Heading */}
        <motion.h1
          variants={variants}
          className="text-center font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-[#D4AF37]"
        >
          About Motion And Capture Films
        </motion.h1>

        {/* Description */}
        <motion.div variants={variants} className="mt-10 flex justify-center">
          <p className="mx-auto max-w-3xl text-center text-base sm:text-lg md:text-xl leading-8 md:leading-9 text-white">
            At Motion And Capture Films, we don't just edit videos — we craft visual experiences. From cinematic
            storytelling to crisp corporate films, our passion is bringing your vision to life, frame by frame. With a
            keen eye for detail and a flair for creativity, we partner with brands, creators, and individuals to deliver
            standout content that connects.
          </p>
        </motion.div>

        {/* Tagline footer */}
        <motion.p
          variants={variants}
          className="mt-8 text-center text-sm font-semibold italic text-white"
        >
          (Tell your story & build trust)
        </motion.p>

      </motion.div>
    </section>
  );
}
