import BuyNow from "@/components/devices/BuyNow";
import Specifications from "@/components/devices/Specifications";
import SwiperSlider from "@/components/devices/SwiperSlider";
import Recommend from "@/components/Recommend";
import Tabs from "@/components/ui/Tabs";
import { useTitle } from "@/hooks/useTitle";
import {
  addBasket,
  addWishlist,
  fetchDevice,
  fetchOneDevice,
} from "@/http/deviceAPI";
import type { DeviceInfoArray, IDevice } from "@/types/types";
import { useAlert } from "@/utils/alertContext";
import { DEVICE_PAGE_TABS } from "@/utils/constants";
import { useStore } from "@/utils/context";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DevicePage = observer(() => {
  const [devices, setDevices] = useState<IDevice>();
  useTitle(devices?.name);
  const [tab, setTab] = useState("buy");
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfoArray[]>([]);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const { basket, device } = useStore();
  const { showAlert } = useAlert();
  useEffect(() => {
    if (!id) return;
    fetchOneDevice(id)
      .then((data) => {
        setDevices(data);
        setDeviceInfo(data.info || []);
      })
      .finally(() => setLoading(false));
    fetchDevice().then((data) => {
      device.setAllDevices(data.rows);
    });
  }, [id]);

  // сопутствующие товары
  const relatedProducts = [...device.allDevices]
    .filter(
      (device) =>
        device.brandId === devices?.brandId && device.id !== devices?.id,
    )
    .slice(0, 3);
  // добавить в корзину
  const addToBasket = async (id: string) => {
    try {
      await addBasket(id, selectedQuantity);
      await basket.refreshBasket();
      showAlert("success", "Added to Cart", "Item added successfully");
    } catch (error: any) {
      showAlert("error", "Error!", error.response?.data?.message);
    }
  };

  // добавть в избранное
  const addToWishlist = async (id: string) => {
    try {
      await addWishlist(id);
      showAlert("success", "Saved", "Added to wishlist");
    } catch (error: any) {
      showAlert("error", "Error!", error.response?.data?.message);
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
      <Recommend
        title="You might also like"
        description="Other great options from the same brand"
        devices={relatedProducts}
      />
    </section>
  );
});

export default DevicePage;
