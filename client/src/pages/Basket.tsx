import Header from "@/components/basket/Header";
import BasketList from "@/components/basket/BasketList";
import { useStore } from "@/utils/context";
import { useEffect, useMemo, useState } from "react";
import SideBar from "@/components/basket/SideBar";
import Recommend from "@/components/Recommend";
import { observer } from "mobx-react-lite";
import { clearBasket, deleteBasket, fetchBasket } from "@/http/deviceAPI";
import type { IDevice } from "@/types/types";

const Basket = observer(() => {
  const { device } = useStore();
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  useEffect(() => {
    fetchBasket().then((data) => {
      const devices = data.basket_devices.map(
        (item: { device: IDevice }) => item.device,
      );
      device.setDevices(devices);
    });
  }, []);

  const deleteBasketHandler = async (deviceId: string) => {
    deleteBasket(deviceId).then(() => {
      // ТОСТ
      console.log("Товар удален", deviceId);
    });
    device.setDevices(device.devices.filter((d) => d.id !== Number(deviceId)));
  };

  const clearBasketHandler = async () => {
    const data = await clearBasket();
    // ТОСТ
    console.log("Все товары удалены", data);
    device.setDevices([]);
  };

  const handleQuantityChange = (deviceId: number, newQuantity: number) => {
    setQuantities((prev) => ({
      ...prev,
      [deviceId]: newQuantity,
    }));
  };

  const totalPrice = useMemo(() => {
    return device.devices.reduce((sum, device) => {
      const qty = quantities[device.id] ?? 1;
      return sum + device.price * qty;
    }, 0);
  }, [device.devices, quantities]);

  const totalQuantities = useMemo(() => {
    return device.devices.reduce((sum, device) => {
      const qty = quantities[device.id] ?? 1;
      return sum + qty;
    }, 0);
  }, [device.devices, quantities]);

  return (
    <section className="container">
      <div className="py-10 lg:py-14">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="flex flex-col gap-8">
            <Header
              totalQuantities={totalQuantities}
              clearBasket={clearBasketHandler}
            />

            <BasketList
              devices={device.devices}
              quantities={quantities}
              onQuantityChange={handleQuantityChange}
              deleteItem={deleteBasketHandler}
            />

            <Recommend />
          </div>

          <SideBar total={totalPrice} />
        </div>
      </div>
    </section>
  );
});

export default Basket;
