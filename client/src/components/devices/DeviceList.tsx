import { observer } from "mobx-react-lite";
import DropdownSelect from "../ui/DropdownSelect";
import React, { useEffect, useMemo, useState } from "react";
import { StretchHorizontal, LayoutGrid } from "lucide-react";
import { useStore } from "@/utils/context";
import DeviceCardList from "./cards/DeviceCardList";
import DeviceCardGrid from "./cards/DeviceCardGrid";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "@/utils/constants";
import Pagitanion from "../ui/Pagination";

const DeviceList = observer(() => {
  const { device } = useStore();
  const navigate = useNavigate();
  const [selectedSort, setSelectedSort] = useState("no");
  const [viewSwitcher, setViewSwitcher] = useState(() => {
    const savedView = localStorage.getItem("deviceView");
    return savedView || "list";
  });
  
  useEffect(() => {
    localStorage.setItem("deviceView", viewSwitcher);
  }, [viewSwitcher]);

  const handleSortChange = (value: string) => {
    setSelectedSort(value);
  };
  const handleViewSwitch = (event: React.MouseEvent<HTMLButtonElement>) => {
    setViewSwitcher(event.currentTarget.value);
  };

  // сортировка
  const sortDevices = useMemo(() => {
    const devices = [...device.devices];

    switch (selectedSort) {
      case "price-desc":
        return devices.sort((a, b) => b.price - a.price);
      case "price-asc":
        return devices.sort((a, b) => a.price - b.price);
      case "date-newest":
        return devices.sort((a, b) => {
          const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return dateB - dateA;
        });
      case "date-oldest":
        return devices.sort((a, b) => {
          const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return dateA - dateB;
        });
      default:
        return devices;
    }
  }, [device.devices, selectedSort]);
  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-wrapper rounded-[30px] py-4 px-4 sm:px-6 mb-6">
        <DropdownSelect value={selectedSort} onChange={handleSortChange} />
        <div className="flex items-center gap-4 sm:gap-5">
          <button onClick={handleViewSwitch} value="list">
            <StretchHorizontal
              className={`cursor-pointer ${
                viewSwitcher === "list" && "text-custom"
              }`}
              width={32}
              height={32}
            />
          </button>
          <button onClick={handleViewSwitch} value="grid">
            <LayoutGrid
              className={`cursor-pointer ${
                viewSwitcher === "grid" && "text-custom"
              }`}
              width={32}
              height={32}
            />
          </button>
        </div>
      </div>

      <div
        className={`grid gap-4 ${
          viewSwitcher === "grid"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
        }`}
      >
        {sortDevices.map((device) =>
          viewSwitcher === "grid" ? (
            <DeviceCardGrid
              key={device.id}
              id={device.id}
              img={device.img}
              images={device.images}
              name={device.name}
              shortDesc={device.shortDesc}
              rating={device.rating}
              price={device.price}
              brandId={device.brandId}
              typeId={device.typeId}
              onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
            />
          ) : (
            <DeviceCardList
              key={device.id}
              id={device.id}
              img={device.img}
              images={device.images}
              name={device.name}
              shortDesc={device.shortDesc}
              rating={device.rating}
              price={device.price}
              brandId={device.brandId}
              typeId={device.typeId}
              onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
            />
          ),
        )}
      </div>
      <Pagitanion className="justify-center mt-8" />
    </div>
  );
});

export default DeviceList;
