import { SHOP_ROUTE } from "@/utils/constants";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      title: "Smartphones",
      desc: "Shoot, play, work — all at full speed.",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Laptops & PCs",
      desc: "Slim, powerful setups for work and gaming.",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Audio",
      desc: "Clean sound you want to keep on.",
      img: "https://images.unsplash.com/photo-1518449018150-2d8f8f3f6d3a?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Smart Home",
      desc: "Light, climate, and sound tuned to your mood.",
      img: "https://images.unsplash.com/photo-1558002038-1055f2f6b778?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "TV & Monitors",
      desc: "Cinematic visuals with precise color.",
      img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Accessories",
      desc: "Small details that make devices better.",
      img: "https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?auto=format&fit=crop&w=900&q=80",
    },
  ];
  const navigate = useNavigate()
  return (
    <section className="container py-14 lg:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-secondary/60">
            Categories
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-def">
            Choose your tech
          </h2>
        </div>
        <span className="text-sm text-secondary/70">
          From smartphones to smart home — everything in one place.
        </span>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((item) => (
          <article
            key={item.title}
            onClick={() => navigate(SHOP_ROUTE)}
            className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-wrapper transition hover:border-custom"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-48 w-full object-cover"
            />
            <div className="space-y-3 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-def">{item.title}</h3>
                <span className="rounded-xl bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-custom">
                  Popular
                </span>
              </div>
              <p className="text-sm text-secondary/70">{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Categories;
