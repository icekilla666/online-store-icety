import DeviceList from "@/components/devices/DeviceList";
import SideBar from "@/components/devices/SideBar";
import Empty from "@/components/Empty";
import { fetchBrand, fetchDevice, fetchType } from "@/http/deviceAPI";
import { useStore } from "@/utils/context";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const Shop = observer(() => {
  const { device } = useStore();
  useEffect(() => {
    fetchType().then((data) => device.setTypes(data));
    fetchBrand().then((data) => device.setBrands(data));
    fetchDevice({
      typeId: device.selectedType?.id,
      brandId: device.selectedBrand?.id,
      page: device.page,
      limit: device.limit,
    }).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [device.page, device.selectedType, device.selectedBrand]);
  return (
    <section className="container">
      <div className="my-10 flex flex-col gap-6 lg:my-12 lg:flex-row lg:gap-10">
        <SideBar />
        {device.devices.length === 0 ? (
          <Empty
            icon={<MagnifyingGlassIcon className="w-24 h-24" />}
            title="No products found"
            description="We couldn't find any products matching your selected filters. 
              Try adjusting your filters or browse all products."
          />
        ) : (
          <DeviceList />
        )}
      </div>
    </section>
  );
});

export default Shop;
