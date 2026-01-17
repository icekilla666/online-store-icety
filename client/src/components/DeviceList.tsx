import { observer } from "mobx-react-lite";
import DropdownSelect from "./ui/DropdownSelect";
import { useState } from "react";
import { StretchHorizontal, LayoutGrid } from "lucide-react";
import { useStore } from "@/utils/context";
import MyButton from "./ui/Button";
import { StarIcon } from "@heroicons/react/20/solid";

const DeviceList = observer(() => {
  const { device } = useStore();
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
        {device.devices.map((device) => (
          <article className="flex gap-7 h-[300px] py-[15px] px-[30px] bg-wrapper rounded-[30px]" key={device.id}>
            <img src={device.img} alt={device.name} />

            <div className="flex w-full justify-between py-2">
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="mb-2">{device.name}</h2>
                  <p>{device.shortDesc}</p>
                </div>
                <div className="flex items-center gap-[2px]">
                  <StarIcon color="#D7AB4D" width={22} height={22} />
                  <span className="text-[18px]">
                    {device.rating} | 0 отзывов
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[30px]">{device.price}$</span>
                <MyButton className="bg-transparent border-2 rounded-lg border-custom p-2 uppercase hover:bg-custom">
                  buy
                </MyButton>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
});

export default DeviceList;
