import DeviceList from "@/components/devices/DeviceList";
import SideBar from "@/components/devices/SideBar";

const Shop = () => {
  return (
    <section className="container">
      <div className="my-12 flex gap-10">
        <SideBar />
        <DeviceList />
      </div>
    </section>
  );
};

export default Shop;
