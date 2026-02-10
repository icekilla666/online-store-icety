import type { ITypes } from "@/types/types";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import TableTemplate from "./TableTemplate";
import ModalType from "../modals/ModalType";

const TableType = ({ types }: { types: ITypes[] }) => {
  const [modalOpen, setModalOpen] = useState(false);

  // рендер заголовков таблицы
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

  // рендер строки устройства
  const renderRow = (type: ITypes, openDeleteModal: (id: number) => void) => (
    <Fragment key={type.id}>
      <tr key={type.id} className="border-b border-[var(--color-border)]">
        <td className="p-4">
          <div className="font-mono font-bold text-[var(--color-def)]">
            {type.id}
          </div>
        </td>
        <td className="p-4">
          <div className="flex items-center gap-3">
            <h4 className="font-bold text-[var(--color-def)]">{type.name}</h4>
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
              onClick={() => openDeleteModal(type.id)}
            >
              <TrashIcon width={25} height={25} />
            </button>
          </div>
        </td>
      </tr>
    </Fragment>
  );

  return (
    <>
      <TableTemplate<ITypes>
        data={types}
        title="Type Inventory"
        description="Manage all products in your store"
        placeholder="Search types..."
        textBtn="+ Add Types"
        renderHeader={renderHeader}
        renderRow={renderRow}
        modalName="type"
        modal={() => setModalOpen(true)}
      />
      <ModalType
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={(data) => console.log(data)}
      />
    </>
  );
};

export default TableType;
