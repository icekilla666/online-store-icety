import type { IBrand } from "@/types/types";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import TableTemplate from "./TableTemplate";

const TableBrand = ({ brands }: { brands: IBrand[] }) => {
  // Рендер заголовков таблицы
  const renderHeader = () => (
    <>
      <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
        <div className="flex items-center gap-2">
          <span>ID</span>
        </div>
      </th>
      <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
        Name
      </th>
      <th className="text-left p-4 text-[var(--color-secondary)] font-medium"></th>
      <th className="text-left p-4 text-[var(--color-secondary)] font-medium"></th>
      <th className="text-left p-4 text-[var(--color-secondary)] font-medium"></th>
      <th className="text-left p-4 text-[var(--color-secondary)] font-medium"></th>
      <th className="text-left p-4 text-[var(--color-secondary)] font-medium"></th>
      <th className="text-center p-4 text-[var(--color-secondary)] font-medium">
        Actions
      </th>
    </>
  );

  // Рендер строки устройства
  const renderRow = (brand: IBrand, openDeleteModal: (id: number) => void) => (
    <Fragment key={brand.id}>
      <tr key={brand.id} className="border-b border-[var(--color-border)]">
        <td className="p-4">
          <div className="font-mono font-bold text-[var(--color-def)]">
            {brand.id}
          </div>
        </td>
        <td className="p-4">
          <div className="flex items-center gap-3">
            <h4 className="font-bold text-[var(--color-def)]">{brand.name}</h4>
          </div>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

        <td className="p-4">
          <div className="flex items-center gap-2 justify-center">
            <button
              className="p-2 hover:bg-blue-500/10 rounded-lg transition-colors"
              title="Edit"
            >
              <PencilIcon width={25} height={25} />
            </button>
            <button
              className="p-2 hover:bg-red-500/10 rounded-lg transition-colors"
              title="Delete"
              onClick={() => openDeleteModal(brand.id)}
            >
              <TrashIcon width={25} height={25} />
            </button>
          </div>
        </td>
      </tr>
    </Fragment>
  );

  return (
    <TableTemplate<IBrand>
      data={brands}
      title="Brand Inventory"
      description="Manage all products in your store"
      placeholder="Search brands..."
      textBtn="+ Add Brands"
      renderHeader={renderHeader}
      renderRow={renderRow}
      modalName="brand"
    />
  );
};

export default TableBrand;
