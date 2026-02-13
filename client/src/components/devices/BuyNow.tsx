import type { BuyNowProps } from "@/types/types";
import MyButton from "../ui/Button";
import QuantityCounter from "../ui/QuantityCounter";
import { StarIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const BuyNow = ({ name, rating, shortDesc, price }: BuyNowProps) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

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
          onChange={(value) => setSelectedQuantity(value)}
          className="mb-10"
        />
        <div className="flex gap-5">
          <MyButton className="uppercase">add to cart</MyButton>
          <MyButton className="uppercase bg-transparent border border-custom hover:bg-custom">
            buy now
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
