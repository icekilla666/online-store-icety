import Header from "@/components/basket/Header";
import BasketList from "@/components/basket/BasketList";
import { useStore } from "@/utils/context";
import { useEffect, useMemo, useState } from "react";
import SideBar from "@/components/basket/SideBar";
import Recommend from "@/components/Recommend";
import { observer } from "mobx-react-lite";
import {
  clearBasket,
  deleteBasket,
  fetchBasket,
  fetchDevice,
} from "@/http/deviceAPI";
import type { IDevice } from "@/types/types";

const Basket = observer(() => {
  const { device, basket } = useStore();
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  // запрос на получение всех товаров и товарво корзины
  useEffect(() => {
    fetchBasket().then((data) => {
      const devices = data.basket_devices.map(
        (item: { device: IDevice }) => item.device,
      );
      device.setDevices(devices);

      const initialQuantities: Record<number, number> = {};
      data.basket_devices.forEach((item: any) => {
        if (item.device) {
          initialQuantities[item.device.id] = item.quantity || 1;
        }
      });
      setQuantities(initialQuantities);
    });

    fetchDevice().then((data) => {
      device.setAllDevices(data.rows);
    });
  }, []);

  // фильтрация последних товаров
  const latestDevices = [...(device.allDevices || [])]
    .sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA;
    })
    .slice(0, 3);

  // удаление одного товара
  const deleteBasketHandler = async (deviceId: string) => {
    try {
      await deleteBasket(deviceId);
      await basket.refreshBasket();
      // ТОСТ
      console.log("Товар удален", deviceId);

      device.setDevices(
        device.devices.filter((d) => d.id !== Number(deviceId)),
      );

      setQuantities((prev) => {
        const newQuantities = { ...prev };
        delete newQuantities[Number(deviceId)];
        return newQuantities;
      });
    } catch (error) {
      console.error("Ошибка удаления:", error);
    }
  };

  // укдаление всей корзины
  const clearBasketHandler = async () => {
    try {
      const data = await clearBasket();
      await basket.refreshBasket();
      console.log("Все товары удалены", data);
      device.setDevices([]);
      setQuantities({});
    } catch (error) {
      console.error("Ошибка очистки:", error);
    }
  };

  // добавление кол-ва товара
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

            <Recommend
              title={"New Arrivals"}
              description={"Check out the latest products added to our store"}
              devices={latestDevices}
            />
          </div>

          <SideBar total={totalPrice} />
        </div>
      </div>
    </section>
  );
});

export default Basket;
