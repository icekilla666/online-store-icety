import { faq } from "@/utils/constants";

const Faq = () => {
  return (
    <section className="container py-16 lg:py-20">
      <div className="rounded-[32px] border border-border bg-wrapper px-8 py-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary/60">
              FAQ
            </p>
            <h2 className="text-3xl font-semibold text-def lg:text-4xl">
              Answers to the most common questions
            </h2>
            <p className="text-sm text-secondary/70">
              Everything you need to know about delivery, warranty, and in-store
              experience
            </p>
          </div>
          <div className="space-y-4">
            {faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-border bg-primary px-6 py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-def">
                  {item.q}
                  <span className="ml-4 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-secondary/70 transition group-open:border-custom group-open:text-custom">
                    Toggle
                  </span>
                </summary>
                <p className="mt-3 text-sm text-secondary/70">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
