import { observer } from "mobx-react-lite";
import DropdownSelect from "../ui/DropdownSelect";
import React, { useState } from "react";
import { StretchHorizontal, LayoutGrid } from "lucide-react";
import { useStore } from "@/utils/context";
import DeviceCardList from "./cards/DeviceCardList";
import DeviceCardGrid from "./cards/DeviceCardGrid";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "@/utils/constants";

const DeviceList = observer(() => {
  const { device } = useStore();
  const navigate = useNavigate();
  const [selectedSort, setSelectedSort] = useState("no");
  const [viewSwitcher, setViewSwitcher] = useState("list");
  const handleSortChange = (value: string) => {
    setSelectedSort(value);
  };
  const handleViewSwitch = (event: React.MouseEvent<HTMLButtonElement>) => {
    setViewSwitcher(event.currentTarget.value);
  };
  return (
    <div className="w-full">
      <div className="flex items-center justify-between bg-wrapper rounded-[30px] py-4 px-6 mb-6">
        <DropdownSelect value={selectedSort} onChange={handleSortChange} />
        <div className="flex items-center gap-5">
          <button onClick={handleViewSwitch} value="list">
            <StretchHorizontal
              className={`cursor-pointer ${
                viewSwitcher === "list" && "text-custom"
              }`}
              width={43}
              height={43}
            />
          </button>
          <button onClick={handleViewSwitch} value="grid">
            <LayoutGrid
              className={`cursor-pointer ${
                viewSwitcher === "grid" && "text-custom"
              }`}
              width={43}
              height={43}
            />
          </button>
        </div>
      </div>

      <div className={`grid gap-4 ${viewSwitcher === "grid" && "grid-cols-3"}`}>
        {device.devices.map((device) =>
          viewSwitcher === "grid" ? (
            <DeviceCardGrid
              key={device.id}
              id={device.id}
              img={device.img}
              name={device.name}
              shortDesc={device.shortDesc}
              rating={device.rating}
              price={device.price}
              onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
            />
          ) : (
            <DeviceCardList
              key={device.id}
              id={device.id}
              img={device.img}
              name={device.name}
              shortDesc={device.shortDesc}
              rating={device.rating}
              price={device.price}
              onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
            />
          ),
        )}
      </div>
    </div>
  );
});

export default DeviceList;
