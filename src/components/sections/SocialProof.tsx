"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

function AnimatedCounter({
  value,
  suffix = "",
  duration = 2000,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const metrics = [
  { value: 30, suffix: "%", label: "increase in patients" },
  { value: 25, suffix: "%", label: "increase in production" },
  { value: 0, suffix: "", label: "missed follow-ups" },
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="bg-surface-dark py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 grid gap-12 md:grid-cols-3">
          {metrics.map((metric, i) => (
            <ScrollReveal key={metric.label} delay={i * 0.15}>
              <div className="text-center">
                <div className="mb-3 text-5xl font-bold text-teal md:text-6xl">
                  <AnimatedCounter
                    value={metric.value}
                    suffix={metric.suffix}
                  />
                </div>
                <p className="text-lg text-text-muted">{metric.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="mx-auto max-w-5xl text-center text-lg leading-relaxed text-text-body">
            Trusted by orthodontists, periodontists, endodontists, prosthodontists, and oral surgeons every day.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
