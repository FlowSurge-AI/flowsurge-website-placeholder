import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CtaForm() {
  return (
    <section id="demo-form" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <h2 className="mb-4 text-3xl font-bold text-text-heading md:text-4xl">
            Ready to stop losing patients?
          </h2>
          <p className="mb-12 text-lg text-text-muted">
            Book a quick demo and see how FlowSurge can transform your practice.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <a
            href="https://calendar.app.google/9f7TBnj7odBxppdw7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-teal px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-teal-light hover:shadow-lg hover:shadow-teal/20"
          >
            Book a Demo
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
