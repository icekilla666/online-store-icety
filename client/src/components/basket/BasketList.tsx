import type { BasketListProps } from "@/types/types";
import { StarIcon } from "@heroicons/react/20/solid";
import QuantityCounter from "../ui/QuantityCounter";
import { updateBasketQuantity } from "@/http/deviceAPI";
import EmptyBasket from "./EmptyBasket";
import { useStore } from "@/utils/context";

const BasketList = ({
  devices,
  quantities,
  onQuantityChange,
  deleteItem,
}: BasketListProps) => {
  const { basket } = useStore();
  const handleQuantityChange = async (
    deviceId: number,
    newQuantity: number,
  ) => {
    try {
      await updateBasketQuantity(deviceId.toString(), newQuantity);
      onQuantityChange(deviceId, newQuantity);
      await basket.refreshBasket();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  return (
    <div className="grid gap-4">
      {!devices.length && <EmptyBasket />}
      {devices.map((device) => {
        const qty = quantities[device.id] ?? 1;

        return (
          <article
            key={device.id}
            className="rounded-[26px] border border-[var(--color-border)] bg-wrapper p-5 sm:p-6"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:w-1/2">
                <div className="w-full max-w-[200px] h-[200px] p-3 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center">
                  <img
                    src={import.meta.env.VITE_API_URL + device.img}
                    alt={device.name}
                    className="w-full object-contain h-full"
                  />
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold text-[var(--color-def)]">
                    {device.name}
                  </h3>
                  <p className="text-sm text-[var(--color-secondary)] line-clamp-2">
                    {device.shortDesc}
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="h-[15px] text-sm text-[var(--color-secondary)]">
                      {device.rating}
                    </span>
                    <StarIcon width={20} height={20} color="#D7AB4D" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:flex-1">
                <QuantityCounter
                  initialValue={qty}
                  onChange={(value) => handleQuantityChange(device.id, value)}
                />

                <div className="text-left sm:text-right">
                  <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-secondary)]">
                    Price
                  </p>
                  <p className="text-[20px] font-semibold text-[var(--color-def)]">
                    ${new Intl.NumberFormat("en-EN").format(device.price * qty)}
                  </p>
                </div>
                <button
                  onClick={() => deleteItem(String(device.id))}
                  className="text-sm text-[var(--color-secondary)] hover:text-[var(--color-custom)] transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default BasketList;
