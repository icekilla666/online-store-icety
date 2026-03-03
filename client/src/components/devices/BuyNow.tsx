import type { BuyNowProps } from "@/types/types";
import MyButton from "../ui/Button";
import QuantityCounter from "../ui/QuantityCounter";
import { StarIcon } from "@heroicons/react/20/solid";
import { Heart } from "lucide-react";

const BuyNow = ({
  name,
  rating,
  shortDesc,
  price,
  deviceId,
  selectedQuantity, 
  onQuantityChange, 
  addToBasketHandler,
  addToWishlistHandler
}: BuyNowProps) => {
  return (
    <div className="flex flex-col gap-4 items-start">
      <h1 className="">{name}</h1>
      <div className="flex items-center gap-[2px]">
        <StarIcon color="#D7AB4D" width={22} height={22} />
        <span className="text-[18px]">{rating} | 10 отзывов</span>
      </div>
      <div>
        <h2 className="font-bold mb-2">Description</h2>
        <p className="font-light">{shortDesc}</p>
      </div>
      <span className="text-[36px] w-full text-custom font-bold pb-2 border-b-2 border-border">
        ${new Intl.NumberFormat("en-EN").format(price * selectedQuantity)}
      </span>

      <div className="w-full">
        <h2 className="mb-5">Unit</h2>
        <QuantityCounter
          initialValue={selectedQuantity}
          onChange={onQuantityChange}
          className="mb-10"
        />
        <div className="flex max-w-80 flex-col gap-3 sm:flex-row sm:gap-5">
          <MyButton
            onClick={() => addToBasketHandler(deviceId)}
            className="uppercase w-full bg-transparent border border-custom hover:bg-custom"
          >
            add to cart
          </MyButton>
          <MyButton
            onClick={() => addToWishlistHandler(deviceId)}
            className="w-fit uppercase bg-transparent border border-custom hover:bg-custom"
          >
            <Heart width={30} height={30} />
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
