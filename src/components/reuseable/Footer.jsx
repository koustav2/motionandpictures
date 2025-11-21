// components/Footer.tsx
import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const hours = [
  { day: "Mon - Sat", time: "9:00 am – 7:00 pm" },
  { day: "Sunday", time: "10:00 am – 4:00 pm" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="px-4 md:px-8">
        <div className="mx-auto max-w-7xl py-14 md:py-20">
          <h2 className="text-center font-serif text-4xl md:text-5xl tracking-tight text-yellow-300">
            Contact Us
          </h2>
        </div>
      </div>

      <div className="px-4 md:px-8 pb-14 md:pb-20">
        <div className="mx-auto max-w-7xl items-start gap-12 flex flex-wrap md:grid md:grid-cols-3">

          {/* Address */}
          <div className="w-1/2 md:w-auto">
            <h3 className="font-serif text-3xl md:text-4xl mb-6 flex items-center gap-3 text-yellow-300">
              <MapPinIcon className="h-7 w-7 text-yellow-300" />
              Address
            </h3>
            <p className="text-lg leading-relaxed text-white/90">
              Ruiya Purbapara, P.O.- Patulia,<br />
              Barrackpore, Kolkata, West<br />
              Bengal, India – 700 119
            </p>
          </div>

          {/* Contact */}
          <div className="w-1/2 md:w-auto">
            <h3 className="font-serif text-3xl md:text-4xl mb-6 flex items-center gap-3 text-yellow-300">
              <PhoneIcon className="h-7 w-7 text-yellow-300" />
              Contact
            </h3>

            <a
              href="tel:+918420544861"
              className="block text-xl font-semibold tracking-wide text-white hover:text-white/80 transition"
            >
              (+91) 84205 44861
            </a>

            <div className="mt-3 flex flex-col gap-2">
              <a
                href="mailto:motionandcapturefilms@gmail.com"
                className="inline-flex items-center gap-2 text-lg text-white/90 hover:text-white hover:opacity-80 transition"
              >
                <EnvelopeIcon className="h-5 w-5 text-white" />
                motionandcapturefilms@gmail.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-4">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/motionandcapture"
                target="_blank"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:opacity-90 transition"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/motion_and_capture_films/"
                target="_blank"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:opacity-90 transition"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.4A2.9 2.9 0 1 1 14.9 12 2.9 2.9 0 0 1 12 14.9zm4.6-8.8a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@MotionAndCapture"
                target="_blank"
                aria-label="YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:opacity-90 transition"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.6 4 12 4 12 4h-.1s-3.6 0-6.7.2c-.4 0-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2 8.9 2 10.6v1.6c0 1.7.2 3.4.2 3.4s.2 1.5.8 2.1c.8.8 1.8.8 2.2.9 1.6.2 6.6.2 6.6.2s3.6 0 6.7-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.4v-1.6c0-1.7-.2-3.4-.2-3.4zM10 14.8V9.3l4.7 2.7L10 14.8z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* Opening Hours */}
          <div className="w-full md:w-auto">
            <h3 className="font-serif text-3xl md:text-4xl mb-6 flex items-center gap-3 text-yellow-300">
              <ClockIcon className="h-7 w-7 text-yellow-300" />
              Opening Hours
            </h3>
            <dl className="space-y-4 text-lg">
              {hours.map((h) => (
                <div key={h.day} className="grid grid-cols-2">
                  <dt className="font-semibold text-white">{h.day}</dt>
                  <dd className="text-right text-white/90">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-6 text-sm text-white/60 text-center">
          © {new Date().getFullYear()} Motion And Capture Films. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
