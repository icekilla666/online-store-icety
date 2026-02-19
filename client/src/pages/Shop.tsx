import DeviceList from "@/components/devices/DeviceList";
import SideBar from "@/components/devices/SideBar";

const Shop = () => {
  return (
    <section className="container">
      <div className="my-10 flex flex-col gap-6 lg:my-12 lg:flex-row lg:gap-10">
        <SideBar />
        <DeviceList />
      </div>
    </section>
  );
};

export default Shop;
