// components/Footer.tsx
import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  EnvelopeIcon,
  AtSymbolIcon,
  GlobeAltIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

const hours = [
  { day: "Mon - Fri", time: "8:00 am – 8:00 pm" },
  { day: "Saturday", time: "9:00 am – 7:00 pm" },
  { day: "Sunday", time: "9:00 am – 9:00 pm" },
];

export default function Footer() {
  return (
    <footer className="bg-[#F7F0EF] text-[#2B2A29]">
      <div className="px-4 md:px-8">
        <div className="mx-auto max-w-7xl py-14 md:py-20">
          <h2 className="text-center font-serif text-4xl md:text-5xl tracking-tight">
            Contact Us
          </h2>
        </div>
      </div>

      <div className="px-4 md:px-8 pb-14 md:pb-20">
        <div className="mx-auto max-w-7xl items-start gap-12 flex flex-wrap md:grid md:grid-cols-3">

          <div className="w-1/2 md:w-auto">
            <h3 className="font-serif text-3xl md:text-4xl mb-6 flex items-center gap-3">
              <MapPinIcon className="h-7 w-7" />
              Address
            </h3>
            <p className="text-lg leading-relaxed">
              Ruiya Purbapara, P.O.- Patulia,<br />
              Barrackpore, Kolkata, West<br />
              Bengal, India – 700 119
            </p>
          </div>

          <div className="w-1/2 md:w-auto">
            <h3 className="font-serif text-3xl md:text-4xl mb-6 flex items-center gap-3">
              <PhoneIcon className="h-7 w-7" />
              Contact
            </h3>

            <a
              href="tel:+918420544861"
              className="block text-xl font-semibold tracking-wide"
            >
              (+91) 84205 44861
            </a>

            <div className="mt-3 flex flex-col gap-2">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 text-lg hover:opacity-80 transition"
              >
                <EnvelopeIcon className="h-5 w-5" />
                hello@example.com
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Social 1"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white hover:opacity-90 transition"
              >
                <AtSymbolIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Social 2"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white hover:opacity-90 transition"
              >
                <GlobeAltIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Social 3"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white hover:opacity-90 transition"
              >
                <ShareIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <h3 className="font-serif text-3xl md:text-4xl mb-6 flex items-center gap-3">
              <ClockIcon className="h-7 w-7" />
              Opening Hours
            </h3>
            <dl className="space-y-4 text-lg">
              {hours.map((h) => (
                <div key={h.day} className="grid grid-cols-2">
                  <dt className="font-semibold">{h.day}</dt>
                  <dd className="text-right">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-6 text-sm text-black/60">
          © {new Date().getFullYear()} Motion And Capture Films. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
