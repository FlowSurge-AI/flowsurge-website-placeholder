"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const pillars = [
  {
    title: "Follow up - Every Lead",
    description:
      "Engage every lead and referral as soon as it arrives. FlowSurge ensures no patient slips through the cracks — eliminating leakage and maximizing your conversion rate.",
  },
  {
    title: "Focus on What Matters",
    description:
      "Automate scheduling, confirmations, and patient communications. Let your staff focus on patient care while FlowSurge handles the busywork.",
  },
  {
    title: "Grow Your Practice with Data",
    description:
      "AI-powered analytics and provider network reports give you real-time visibility into referral patterns, production trends, and growth opportunities.",
  },
  {
    title: "Codify Your SOPs",
    description:
      "Run all your leads through standardized, automated workflows that are followed every single time without fail.",
  },
  {
    title: "Nurture Partner Provider Network",
    description:
      "Improve the health of your partner provider network, increase referral volumes, and automate engagements.",
  },
  {
    title: "Easily Onboard New Staff",
    description:
      "Convert tribal knowledge into repeatable, trackable processes. Configurable rules that match how your practice actually operates.",
  },
];

export default function SolutionPillars() {
  return (
    <section id="solution" className="bg-surface-dark py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2 className="mb-16 text-center text-3xl font-bold text-text-heading md:text-4xl">
            How FlowSurge Works
          </h2>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.15}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-lg">
                <h3 className="mb-3 text-xl font-bold text-text-heading">
                  {pillar.title}
                </h3>
                <p className="leading-relaxed text-text-muted">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
