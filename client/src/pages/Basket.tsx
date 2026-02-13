import Header from "@/components/basket/Header";
import BasketList from "@/components/basket/BasketList";
import { useStore } from "@/utils/context";
import { useMemo, useState } from "react";
import SideBar from "@/components/basket/SideBar";
import Recommend from "@/components/Recommend";

const Basket = () => {
  const { device } = useStore();
  const [quantities, setQuantities] = useState<Record<number, number>>({});

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

  return (
    <section className="container">
      <div className="py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="flex flex-col gap-8">
            <Header array={device.devices} />

            <BasketList
              devices={device.devices}
              quantities={quantities}
              onQuantityChange={handleQuantityChange}
            />

            <Recommend />
          </div>

          <SideBar total={totalPrice}/>
        </div>
      </div>
    </section>
  );
};

export default Basket;
