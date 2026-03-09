import { highlights } from "@/utils/constants";

const Advantages = () => {
  return (
    <section className="border-y border-border bg-wrapper/70 py-12">
      <div className="container">
        <div className="grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-primary/90 px-6 py-6"
            >
              <h3 className="text-lg font-semibold text-def">{item.title}</h3>
              <p className="mt-2 text-sm text-secondary/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
