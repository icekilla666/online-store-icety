import DeviceList from "@/components/DeviceList";
import SideBar from "@/components/SideBar";

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
