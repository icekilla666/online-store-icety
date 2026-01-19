import QuantityCounter from "@/components/devices/QuantityCounter";
import SwiperSlider from "@/components/devices/SwiperSlider";
import MyButton from "@/components/ui/Button";
import { StarIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const DevicePage = () => {
  const device = {
    id: 1,
    name: "Realme 10 Pro",
    shortDesc:
      "Desctiption of Realme 10 Pro. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo quas iure minima eos voluptatem reiciendis perferendis, optio consectetur deleniti aspernatur molestiae dignissimos veritatis aliquid consequatur mollitia vitae esse natus?",
    price: 20000,
    rating: 5,
    img: "/test.png",
    images: ["/1.png", "/2.png", "/3.png"],
  };
  const deviceInfo = [
    {
      id: 1,
      title: "Display",
      description:
        "6.7-inch Super Retina XDR OLED with ProMotion, 120Hz refresh rate, 2796x1290 pixels resolution, HDR10, Dolby Vision, 2000 nits peak brightness",
    },
    {
      id: 2,
      title: "Processor",
      description:
        "Apple A17 Pro chip, 6-core CPU, 6-core GPU, 16-core Neural Engine, 3nm technology",
    },
    {
      id: 3,
      title: "Camera System",
      description:
        "Triple 48MP main + 12MP ultra-wide + 12MP telephoto with 5x optical zoom, Photonic Engine, Night mode, ProRAW, 4K Dolby Vision HDR recording at 60fps",
    },
    {
      id: 4,
      title: "Battery & Charging",
      description:
        "4400mAh lithium-ion battery, up to 29 hours video playback, 20W fast charging, 15W MagSafe wireless charging, 7.5W Qi wireless charging",
    },
    {
      id: 5,
      title: "Storage & Memory",
      description:
        "8GB RAM, options: 128GB / 256GB / 512GB / 1TB NVMe storage, NVMe protocol for faster data transfer",
    },
  ];

  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [tab, setTab] = useState("buy");

  return (
    <section className="container">
      <div className="flex justify-center gap-10 my-14">
        <h3
          onClick={() => setTab("buy")}
          className={`cursor-pointer ${tab === "buy" ? "border-b-2 border-custom transition-all" : "border-b-2 border-transparent"}`}
        >
          Buy now
        </h3>
        <h3
          onClick={() => setTab("specifications")}
          className={`cursor-pointer ${tab === "specifications" ? "border-b-2 border-custom transition-all" : "border-b-2 border-transparent"}`}
        >
          Specifications
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-32">
        {device.images.length > 1 ? (
          <div className="flex items-start justify-end">
            <SwiperSlider
              images={device.images}
              mainImage={device.img}
              productName={device.name}
            />
          </div>
        ) : (
          <div className="flex items-start justify-end">
            <img
              className="p-9 bg-wrapper rounded-2xl border-2 border-custom"
              src={device.img}
              alt={device.name}
            />
          </div>
        )}

        {tab === "buy" ? (
          <div className="flex flex-col gap-4 items-start">
            <h1 className="">{device.name}</h1>
            <div className="flex items-center gap-[2px]">
              <StarIcon color="#D7AB4D" width={22} height={22} />
              <span className="text-[18px]">{device.rating} | 10 отзывов</span>
            </div>
            <div>
              <h2 className="font-bold mb-2">Description</h2>
              <p className="font-light">{device.shortDesc}</p>
            </div>
            <span className="text-[36px] w-full text-custom font-bold pb-2 border-b-2 border-border">
              $
              {new Intl.NumberFormat("en-EN").format(
                device.price * selectedQuantity,
              )}
            </span>

            <div className="w-full">
              <h2 className="mb-5">Unit</h2>
              <QuantityCounter
                onChange={(value) => setSelectedQuantity(value)}
                className="mb-10"
              />
              <div className="flex gap-5">
                <MyButton className="uppercase">add to cart</MyButton>
                <MyButton className="uppercase bg-transparent border border-custom hover:bg-custom">
                  buy now
                </MyButton>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="mb-6 и">Specifications</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              {deviceInfo.map((info) => (
                <div
                  key={info.id}
                  className="bg-wrapper p-5 rounded-xl border border-custom hover:border-custom transition-all hover:shadow-custom shadow-lg"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <h2 className="font-semibold text-lg">{info.title}</h2>
                  </div>
                  <p className="font-light leading-relaxed pl-13">
                    {info.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DevicePage;
