import BuyNow from "@/components/devices/BuyNow";
import Specifications from "@/components/devices/Specifications";
import SwiperSlider from "@/components/devices/SwiperSlider";
import Tabs from "@/components/ui/Tabs";
import { device, DEVICE_PAGE_TABS, deviceInfo } from "@/utils/constants";
import { useState } from "react";

const DevicePage = () => {
  const [tab, setTab] = useState("buy");

  const handleTabs = (value: string) => {
    setTab(value);
  };

  return (
    <section className="container">
      <div className="flex justify-center gap-10 my-14">
        <Tabs
          tabs={DEVICE_PAGE_TABS}
          isActive={tab}
          onChange={handleTabs}
          className={`cursor-pointer device-tabs`}
        />
      </div>

      <div className="grid grid-cols-2 gap-32 mb-16">
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
          <BuyNow
            name={device.name}
            shortDesc={device.shortDesc}
            rating={device.rating}
            price={device.price}
          />
        ) : (
          <Specifications deviceArray={deviceInfo} />
        )}
      </div>
    </section>
  );
};

export default DevicePage;
