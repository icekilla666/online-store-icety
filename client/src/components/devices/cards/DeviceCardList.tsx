import MyButton from "@/components/ui/Button";
import type { DeviceCardProps } from "@/types/types";
import { StarIcon } from "@heroicons/react/20/solid";

const DeviceCardList = ({
  id,
  img,
  name,
  shortDesc,
  rating,
  price,
  onClick,
}: DeviceCardProps) => {
  return (
    <article
      key={id}
      onClick={onClick}
      className="flex flex-col sm:flex-row cursor-pointer gap-6 sm:gap-7 py-4 px-4 sm:py-[15px] sm:px-[30px] bg-wrapper rounded-[30px]"
    >
      <div className="overflow-hidden flex items-center w-full sm:max-w-[250px] h-[200px] sm:h-[300px]">
        <img className=" h-full object-contain" src={img} alt={name} />
      </div>
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-between py-2">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="mb-2">{name}</h2>
            <p className="font-extralight">{shortDesc}</p>
          </div>
          <div className="flex items-center gap-[2px]">
            <StarIcon color="#D7AB4D" width={22} height={22} />
            <span className="text-[18px]">{rating} | 0 отзывов</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:items-end">
          <span className="text-[30px]">
            ${new Intl.NumberFormat("en-EN").format(price)}
          </span>
          <MyButton className="bg-transparent border-2 rounded-lg border-custom p-2 uppercase hover:bg-custom w-full sm:w-auto">
            buy
          </MyButton>
        </div>
      </div>
    </article>
  );
};

export default DeviceCardList;
