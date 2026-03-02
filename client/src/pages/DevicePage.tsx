import BuyNow from "@/components/devices/BuyNow";
import Specifications from "@/components/devices/Specifications";
import SwiperSlider from "@/components/devices/SwiperSlider";
import Tabs from "@/components/ui/Tabs";
import { addBasket, addWishlist, fetchOneDevice } from "@/http/deviceAPI";
import type { DeviceInfoArray, IDevice } from "@/types/types";
import { DEVICE_PAGE_TABS } from "@/utils/constants";
import { useStore } from "@/utils/context";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DevicePage = observer(() => {
  const [tab, setTab] = useState("buy");
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfoArray[]>([]);
  const [devices, setDevices] = useState<IDevice>();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const { basket } = useStore();

  useEffect(() => {
    if (!id) return;
    fetchOneDevice(id)
      .then((data) => {
        setDevices(data);
        setDeviceInfo(data.info || []);
      })
      .finally(() => setLoading(false));
  }, [id]);

  // добавить в корзину
  const addToBasket = async (id: string) => {
    try {
      const data = await addBasket(id, selectedQuantity);
      await basket.refreshBasket();
      console.log("товар добавлен", data);
      // ТОСТ
    } catch (error) {
      console.error("❌ Ошибка добавления в корзину:", error);
    }
  };

  // добавть в избранное
  const addToWishlist = async (id: string) => {
    try {
      const data = await addWishlist(id);
      // ТОСТ
      console.log("товар долавблен в избранное", data);
    } catch (error: any) {
      console.log("error | ", error.response.data);
    }
  };

  // изменение кол-ва
  const handleQuantityChange = (value: number) => {
    setSelectedQuantity(value);
  };

  // смена табов
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
              name={devices.name}
              shortDesc={devices.shortDesc}
              rating={devices.rating}
              price={devices.price}
              deviceId={devices.id.toString()}
              selectedQuantity={selectedQuantity}
              onQuantityChange={handleQuantityChange}
              addToBasketHandler={addToBasket}
              addToWishlistHandler={addToWishlist}
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
});

export default DevicePage;
