const DevicePage = () => {
  const device = {
    id: 1,
    name: "Realme 10 Pro",
    shortDesc: "Desctiption of Realme 10 Pro",
    price: 20000,
    rating: 5,
    img: "/test.png",
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
  return (
    <section className="container">
      <div className="flex justify-center gap-10 mt-14">
        <h3>Buy now</h3>
        <h3>Specifications</h3>
      </div>
      <div className="grid grid-cols-2 gap-32">
        <img src={device.img} alt={device.name} />

        <div>
          <h1>{device.name}</h1>
          <span className="text-[36px] font-bold">{device.price}$</span>

          <div>
            <h2 className="font-bold">Description</h2>
            <p>{device.shortDesc}</p>
          </div>

          <div>
            <h1>Characters</h1>
            {deviceInfo.map((info) => (
              <div>
                <h2>{info.title}</h2>
                <p className="font-light">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevicePage;
