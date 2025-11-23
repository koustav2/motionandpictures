"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ContactSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("leave");
  }, [inView, controls]);

  const container = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 },
    },
    leave: { opacity: 0, y: -24, transition: { duration: 0.4, ease: "easeIn" } },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    leave: { opacity: 0, y: -18, transition: { duration: 0.35, ease: "easeIn" } },
  };

  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", purpose: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section ref={ref} className="w-full bg-black text-[#FFD700] min-h-svh md:min-h-screen flex items-center">
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:py-20 md:py-24 md:grid-cols-2 w-full"
        variants={container}
        initial="hidden"
        animate={controls}
      >

        {/* Left Side */}
        <motion.div variants={item} className="flex flex-col justify-center pt-10 md:pt-0">
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight text-white">
            GET IN TOUCH
          </h2>
          <p className="mt-3 text-base sm:text-lg font-medium text-white">
            Let’s Talk About Your Next Project!
          </p>

          <div className="mt-12 space-y-6 text-sm sm:text-base text-white">

            <div>
              <p className="font-semibold tracking-wide">BUSINESS HOURS:</p>
              <p className="mt-2">Mon – Sat: 9:00 am – 7:00 pm</p>
              <p>Sunday: 10:00 am – 4:00 pm</p>
            </div>

            <div>
              <p>Ruiya Purbapara, P.O.- Patulia, Barrackpore, West Bengal, India- 700119</p>
            </div>

            <div className="space-y-1">
              <p>
                <a href="mailto:motionandcapturefilms@gmail.com" className="underline underline-offset-4 text-white hover:no-underline">
                  motionandcapturefilms@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+918420544861" className="text-white hover:underline">+91 84205 44861</a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.form onSubmit={onSubmit} variants={item} className="max-w-2xl md:ml-auto">

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="font-serif italic text-sm text-white">First Name</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={onChange}
                className="mt-2 w-full border-2 border-[#FFD700]/50 bg-black text-[#FFD700] px-4 py-3 outline-none focus:border-[#FFD700]"
              />
            </div>

            <div>
              <label className="font-serif italic text-sm text-white">Last Name</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={onChange}
                className="mt-2 w-full border-2 border-[#FFD700]/50 bg-black text-[#FFD700] px-4 py-3 outline-none focus:border-[#FFD700]"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="font-serif italic text-sm text-white">Phone *</label>
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              className="mt-2 w-full border-2 border-[#FFD700]/50 bg-black text-[#FFD700] px-4 py-3 outline-none focus:border-[#FFD700]"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>

          <div className="mt-6">
            <label className="font-serif italic text-sm text-white">Email Address *</label>
            <input
              name="email"
              value={form.email}
              onChange={onChange}
              className="mt-2 w-full border-2 border-[#FFD700]/50 bg-black text-[#FFD700] px-4 py-3 outline-none focus:border-[#FFD700]"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div className="mt-6">
            <label className="font-serif italic text-sm text-white">Purpose</label>
            <input
              name="purpose"
              value={form.purpose}
              onChange={onChange}
              placeholder="Add answer here"
              className="mt-2 w-full border-2 border-[#FFD700]/50 bg-black text-[#FFD700] px-4 py-3 outline-none focus:border-[#FFD700]"
            />
          </div>

          <motion.button
            type="submit"
            className="mt-8 w-full bg-[#FFD700] px-6 py-5 text-black font-medium tracking-wide"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            {sent ? "Submitted ✓" : "Submit"}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
