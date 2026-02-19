import BuyNow from "@/components/devices/BuyNow";
import Specifications from "@/components/devices/Specifications";
import SwiperSlider from "@/components/devices/SwiperSlider";
import Tabs from "@/components/ui/Tabs";
import { DEVICE_PAGE_TABS, deviceInfo } from "@/utils/constants";
import { useStore } from "@/utils/context";
import { useState } from "react";
import { useParams } from "react-router-dom";

const DevicePage = () => {
  const [tab, setTab] = useState("buy");
  const { device } = useStore();
  const { id } = useParams();

  const handleTabs = (value: string) => {
    setTab(value);
  };

  const currentDevice = device.devices.find(
    (device) => device.id === Number(id),
  );

  return (
    <section className="container">
      <div className="flex flex-wrap justify-center gap-4 my-8 lg:my-14">
        <Tabs
          tabs={DEVICE_PAGE_TABS}
          isActive={tab}
          onChange={handleTabs}
          className={`cursor-pointer device-tabs`}
        />
      </div>
      {currentDevice ? (
        <div
          key={currentDevice?.id}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32 mb-12 lg:mb-16"
        >
          {currentDevice.images.length > 1 ? (
            <div className="flex items-start justify-center lg:justify-end">
              <SwiperSlider
                images={currentDevice.images}
                mainImage={currentDevice.img}
                productName={currentDevice.name}
              />
            </div>
          ) : (
            <div className="flex items-start justify-center lg:justify-end">
              <img
                className="p-6 sm:p-9 bg-wrapper rounded-2xl border-2 border-custom max-w-full"
                src={currentDevice.img}
                alt={currentDevice.name}
              />
            </div>
          )}

          {tab === "buy" ? (
            <BuyNow
              name={currentDevice.name}
              shortDesc={currentDevice.shortDesc}
              rating={currentDevice.rating}
              price={currentDevice.price}
            />
          ) : (
            <Specifications deviceInfo={deviceInfo} />
          )}
        </div>
      ) : (
        <h1>Данные не найдены!</h1>
      )}
    </section>
  );
};

export default DevicePage;
