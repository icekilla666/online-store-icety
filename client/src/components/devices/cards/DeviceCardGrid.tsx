import MyButton from "@/components/ui/Button";
import type { DeviceCardProps } from "@/utils/types";
import { StarIcon } from "@heroicons/react/20/solid";

const DeviceCardGrid = ({
  id,
  img,
  name,
  shortDesc,
  rating,
  price,
  onClick
}: DeviceCardProps) => {
  return (
    <article
      onClick={onClick}
      key={id}
      className="flex cursor-pointer flex-col items-center gap-8 pt-5 pb-7 px-4 bg-wrapper rounded-[30px]"
    >
      <div className="h-[250px] flex justify-center items-center w-full">
        <img src={img} alt={name} />
      </div>

      <div className="flex w-full flex-col justify-between pt-4 border-t-2 border-border gap-8">
        <div className="flex flex-col justify-between">
          <div className="flex justify-between items-baseline">
            <h2 className="mb-1">{name}</h2>
            <div className="flex items-center gap-[2px]">
              <StarIcon color="#D7AB4D" width={22} height={22} />
              <span className="text-[18px]">{rating}</span>
            </div>
          </div>
          <p className="font-extralight">{shortDesc}</p>
        </div>

        <div className="flex gap-3">
          <span className="text-[30px]">{price}$</span>
          <MyButton className="bg-transparent border-2 rounded-lg border-custom p-2 uppercase w-full hover:bg-custom">
            buy
          </MyButton>
        </div>
      </div>
    </article>
  );
};

export default DeviceCardGrid;
