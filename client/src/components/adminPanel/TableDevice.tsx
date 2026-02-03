import type { DeviceInfoArray, IBrand, IDevice, ITypes } from "@/types/types";
import HeadTable from "./HeadTable";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";

const TableDevice = ({
  devices,
  brands,
  types,
  info,
}: {
  devices: IDevice[];
  brands: IBrand[];
  types: ITypes[];
  info: DeviceInfoArray[];
}) => {
  const [expandedRowId, setExpandedRowId] = useState<number | null>(null);

  const toggleRow = (id: number) => {
    setExpandedRowId(expandedRowId === id ? null : id);
  };
  const getBrandNameById = (
    brands: IBrand[],
    brandId: number | undefined,
  ): string => {
    const brand = brands.find((b) => b.id === brandId);
    return brand ? brand.name : "Unknown Brand";
  };
  const getTypeNameById = (types: IBrand[], typeId?: number): string => {
    const type = types.find((b) => b.id === typeId);
    return type ? type.name : "Unknown Type";
  };

  return (
    <>
      <HeadTable
        title="Device Inventory"
        description="Manage all products in your store"
        placeholder="Search devices..."
        textBtn="+ Add Device"
      />
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
                <div className="flex items-center gap-2">
                  <span>ID</span>
                </div>
              </th>
              <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
                Product
              </th>
              <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
                Type
              </th>
              <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
                Brand
              </th>
              <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
                Price
              </th>
              <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
                Rating
              </th>
              <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
                Info
              </th>
              <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device) => (
              <Fragment key={device.id}>
                <tr
                  className={`border-b border-[var(--color-border)] ${
                    expandedRowId === device.id
                      ? "bg-[var(--color-primary)]"
                      : ""
                  }`}
                >
                  <td className="p-4">
                    <div className="font-mono font-bold text-[var(--color-def)]">
                      {device.id}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                        <img
                          className="h-full"
                          src={device.img}
                          alt={device.name}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-[var(--color-def)]">
                          {device.name}
                        </h4>
                        <p className="text-sm text-[var(--color-secondary)] mt-1 line-clamp-2 max-w-[300px]">
                          {device.shortDesc}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="p-1 bg-purple-500/10 text-purple-500 text-xs font-medium rounded-full text-center">
                      <span>{getTypeNameById(types, device.typeId)}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="font-medium text-[var(--color-def)]">
                      <span>{getBrandNameById(brands, device.brandId)}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="font-bold text-[var(--color-def)]">
                      ${new Intl.NumberFormat("en-EN").format(device.price)}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium h-[20px] text-[var(--color-def)]">
                        {device.rating.toFixed(1)}
                      </span>
                      <div className="flex text-yellow-400 cursor-default">
                        {"★".repeat(Math.floor(device.rating))}
                        {"☆".repeat(5 - Math.floor(device.rating))}
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => toggleRow(device.id)}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                        expandedRowId === device.id
                          ? "bg-green-500 text-white hover:bg-green-600"
                          : "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                      }`}
                    >
                      {expandedRowId === device.id ? "Hide" : "View"}
                    </button>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button
                        className="p-2 hover:bg-blue-500/10 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <PencilIcon width={25} height={25} />
                      </button>
                      <button
                        className="p-2 hover:bg-green-500/10 rounded-lg transition-colors"
                        title="View"
                      >
                        <EyeIcon width={25} height={25} />
                      </button>
                      <button
                        className="p-2 hover:bg-red-500/10 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <TrashIcon width={25} height={25} />
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Раскрывающаяся строка с деталями */}
                {expandedRowId === device.id && (
                  <tr className="border-b border-[var(--color-border)] bg-[var(--color-primary)]">
                    <td colSpan={8} className="p-6">
                      <div className="flex flex-col justify-between">
                        <h2 className="font-bold text-[var(--color-def)] mb-4">
                          Device Details
                        </h2>
                        {info.map((option) => (
                          <div key={option.id}>
                            <div className="flex justify-between py-3 border-b border-[var(--color-border)]">
                              <h3 className="text-[var(--color-secondary)] font-bold">
                                {option.title}:
                              </h3>
                              <p className="font-light text-[var(--color-def)] text-right max-w-2xl">
                                {option.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableDevice;
