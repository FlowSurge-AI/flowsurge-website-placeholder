"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const screenshots = [
  { src: "/screenshots/Lead and Pipeline.png", alt: "Lead Details and Pipeline View", title: "Lead Details and Pipeline View" },
  { src: "/screenshots/Workflows.png", alt: "Configurable, Automated Workflows", title: "Configurable, Automated Workflows" },
  { src: "/screenshots/Analytics1 - Presentation Effectiveness.png", alt: "Treatment Presentation Effectiveness", title: "Treatment Presentation Effectiveness" },
  { src: "/screenshots/Lead Conversion.png", alt: "Lead Conversion", title: "Lead Conversion" },
  { src: "/screenshots/Partner Network.png", alt: "Partner Network Insights", title: "Partner Network Insights" },
  { src: "/screenshots/Geographical Locations.png", alt: "Geographic Locations", title: "Geographic Locations" },
];

export default function ScreenshotCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="screenshots" className="bg-[#1e1e2e] py-16 md:py-24">
      <div className="mx-auto px-6" style={{ maxWidth: "1230px" }}>
        {/* Title */}
        <AnimatePresence mode="wait">
          <motion.h3
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mb-5 text-center text-3xl font-bold text-white md:text-4xl"
          >
            {screenshots[current].title}
          </motion.h3>
        </AnimatePresence>

        {/* MacBook with real frame PNG */}
        <div className="relative mx-auto">
          {/* Screenshot layer — sits behind the frame */}
          {/* Screen area: x=101..931, y=40..557 in 1024x616 image */}
          <div
            className="absolute overflow-hidden bg-black"
            style={{
              left: "9.86%",
              top: "6.49%",
              width: "81.05%",
              height: "83.92%",
              borderRadius: "4px",
            }}
          >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={current}
                custom={direction}
                initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={screenshots[current].src}
                  alt={screenshots[current].alt}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next arrows */}
            <button
              onClick={() =>
                goTo((current - 1 + screenshots.length) % screenshots.length)
              }
              className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white/80 backdrop-blur-sm transition-colors hover:bg-black/60 hover:text-white"
              aria-label="Previous"
            >
              &#8592;
            </button>
            <button
              onClick={() => goTo((current + 1) % screenshots.length)}
              className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white/80 backdrop-blur-sm transition-colors hover:bg-black/60 hover:text-white"
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>

          {/* MacBook frame overlay */}
          <Image
            src="/macbook-frame.png"
            alt=""
            width={1024}
            height={616}
            className="relative z-10 block w-full pointer-events-none"
            priority
          />
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-teal"
                  : "w-2.5 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
