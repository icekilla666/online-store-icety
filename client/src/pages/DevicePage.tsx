import BuyNow from "@/components/devices/BuyNow";
import Specifications from "@/components/devices/Specifications";
import SwiperSlider from "@/components/devices/SwiperSlider";
import Tabs from "@/components/ui/Tabs";
import { fetchOneDevice } from "@/http/deviceAPI";
import type { DeviceInfoArray, IDevice } from "@/types/types";
import { DEVICE_PAGE_TABS } from "@/utils/constants";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DevicePage = () => {
  const [tab, setTab] = useState("buy");
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfoArray[]>([]);
  const [devices, setDevices] = useState<IDevice>();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOneDevice(id)
      .then((data) => {
        setDevices(data);
        setDeviceInfo(data.info || []);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleTabs = (value: string) => {
    setTab(value);
  };

  if (loading) {
    return (
      <section className="container">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="loader">Loading...</div>
        </div>
      </section>
    );
  }

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

      {devices ? (
        <div
          key={devices.id}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32 mb-12 lg:mb-16"
        >
          {devices.images.length > 1 ? (
            <div className="flex items-start justify-center lg:justify-end">
              <SwiperSlider
                images={devices.images}
                mainImage={devices.img}
                productName={devices.name}
              />
            </div>
          ) : (
            <div className="flex items-start justify-center lg:justify-end">
              <img
                className="p-6 sm:p-9 bg-wrapper rounded-2xl border-2 border-custom max-w-full"
                src={import.meta.env.VITE_API_URL + devices.img}
                alt={devices.name}
              />
            </div>
          )}

          {tab === "buy" ? (
            <BuyNow
              name={devices?.name}
              shortDesc={devices.shortDesc}
              rating={devices.rating}
              price={devices.price}
            />
          ) : (
            <Specifications deviceInfo={deviceInfo} />
          )}
        </div>
      ) : (
        <div>Device not found</div>
      )}
    </section>
  );
};

export default DevicePage;
