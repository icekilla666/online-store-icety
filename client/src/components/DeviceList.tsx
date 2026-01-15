import { observer } from "mobx-react-lite";
import DropdownSelect from "./ui/DropdownSelect";
import { useState } from "react";

const DeviceList = observer(() => {
  const [selectedSort, setSelectedSort] = useState("no");

  const handleSortChange = (value: string) => {
    setSelectedSort(value);
    console.log("Sort changed to:", value);
  };
  return (
    <div className="w-full">
      <DropdownSelect value={selectedSort} onChange={handleSortChange} />
    </div>
  );
});

export default DeviceList;
