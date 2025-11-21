"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// About Us page using content from motionandcapturefilms.in/about-us
// Plain JavaScript (React JSX) + Tailwind + Framer Motion

const TEAM = [
  {
    name: "Suvamay Bera",
    role: "Founder & Senior Video Editor",
    image:
      "https://static.wixstatic.com/media/27bb82_1484cf72a0f1482d8f2dc8b06ac6300d~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01/WhatsApp%20Image%202025-06-08%20at%2016_29_48_506bec6a.jpg",
  },
  {
    name: "Sourav Biswas",
    role: "Junior Video Editor",
    image:
      "https://static.wixstatic.com/media/27bb82_d8d365113f644f6394c3df7fa0686f91~mv2.jpg/v1/crop/x_0,y_160,w_640,h_640/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01/480287090_4517988245094331_4227444870540609244_n.jpg",
  },
  {
    name: "Raja Kundu",
    role: "Graphic/Album Designer",
    image:
      "https://static.wixstatic.com/media/27bb82_4d0f7d56eaa54d7f9d23a0856b56f7ae~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01/448353111_2220351531644711_3893254553371675755_n.jpg",
  },
  {
    name: "Sayan Das",
    role: "Photographer",
    image:
      "https://static.wixstatic.com/media/27bb82_30a53595b8414e7992cfa2e564067449~mv2.png/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01/491544235_2201158460315131_5625146677533.png",
  },
  {
    name: "Kamalesh Majumdar",
    role: "Drone Operator",
    image: "/images/Kamalesh.jpeg",
  },
];

function useReveal(threshold = 0.2) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: false });
  useEffect(() => {
    controls.start(inView ? "visible" : "leave");
  }, [inView, controls]);
  return { ref, controls };
}

export default function AboutUsPage() {
  const hero = useReveal(0.3);
  const grid = useReveal(0.15);

  const container = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.06 } },
    leave: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
  };
  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
    leave: { opacity: 0, y: -12, transition: { duration: 0.35, ease: "easeIn" } },
  };

  return (
    <div className="w-full bg-black text-white">
      {/* HERO */}
      <section ref={hero.ref} className="relative mx-auto max-w-6xl px-4 py-20 sm:py-24 md:py-28">
        <motion.div variants={container} initial="hidden" animate={hero.controls}>
          <motion.p variants={item} className="text-sm font-medium tracking-widest text-white/80">
            The Team Behind the Magic
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-3 font-serif text-4xl leading-[1.15] text-white sm:text-5xl md:text-6xl"
          >
            Dedication. Expertise. Passion.
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl leading-8 text-white/90">
            We're not just a team—creative nerds who live and breathe visuals. From capturing cinematic shots to editing
            every frame to perfection, each member of Motion And Capture Films brings something special to the table.
            Together, we turn stories into unforgettable screen moments.
          </motion.p>
        </motion.div>
      </section>

      {/* TEAM GRID */}
      <section ref={grid.ref} className="mx-auto max-w-6xl px-4 pb-20 sm:pb-24 md:pb-28">
        <motion.ul
          variants={container}
          initial="hidden"
          animate={grid.controls}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TEAM.map((m) => (
            <motion.li key={m.name} variants={item} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-yellow-100 shadow-sm ring-1 ring-black/100">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-xl text-black">{m.name}</h3>
                  <p className="mt-1 text-sm text-black/70">{m.role}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </div>
  );
}
