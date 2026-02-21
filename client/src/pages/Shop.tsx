import DeviceList from "@/components/devices/DeviceList";
import SideBar from "@/components/devices/SideBar";
import { fetchBrand, fetchDevice, fetchType } from "@/http/deviceAPI";
import { deviceStore } from "@/store/DeviceStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const Shop = observer(() => {
  useEffect(() => {
    fetchType().then((data) => deviceStore.setTypes(data));
    fetchBrand().then((data) => deviceStore.setBrands(data));
    fetchDevice().then((data) => {deviceStore.setDevices(data.rows)})
  }, []);
  return (
    <section className="container">
      <div className="my-10 flex flex-col gap-6 lg:my-12 lg:flex-row lg:gap-10">
        <SideBar />
        <DeviceList />
      </div>
    </section>
  );
});

export default Shop;
