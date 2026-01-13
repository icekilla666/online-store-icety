import { useStore } from "@/utils/context";
import { observer } from "mobx-react-lite";

const SideBar = observer(() => {
  const { device } = useStore();
  return (
    <div className="h-full bg-wrapper w-3/12 my-12 rounded-[30px] pt-12 pb-8 pl-8">
      <h2 className="uppercase text-secondary font-light opacity-70 tracking-widest pb-7">
        types
      </h2>
      <ul className="mb-12">
        {device.types.map((type) => (
          <li
            key={type.id}
            onClick={() => {
              device.setSeceltedType(type);
              console.log(type.id, "djn", device.selectedType?.id);
            }}
            className={`cursor-pointer font-light tracking-widest mb-5 ${
              type.id === device.selectedType?.id ? "text-custom" : "text-def "
            }`}
          >
            {type.name}
          </li>
        ))}
      </ul>

      <h2 className="uppercase text-secondary font-light opacity-70 tracking-widest pb-7">
        brands
      </h2>
      <ul>
        {device.brands.map((brand) => (
          <li
            key={brand.id}
            onClick={() => device.setSelectedBrand(brand)}
            className={`cursor-pointer font-light tracking-widest mb-5 ${
              brand.id === device.selectedBrand?.id ? "text-custom" : "text-def"
            }`}
          >
            {brand.name}
          </li>
        ))}
      </ul>
    </div>
  );
});
export default SideBar;
