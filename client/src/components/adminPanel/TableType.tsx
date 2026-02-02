import type { ITypes } from "@/types/types";
import HeadTable from "./HeadTable";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const TableType = ({ types }: { types: ITypes[] }) => {
  return (
    <>
      <HeadTable
        title="Type Inventory"
        description="Manage all products in your store"
        placeholder="Search types..."
        textBtn="+ Add Type"
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
                Name
              </th>
              <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
              </th>
              <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
              </th>
              <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
              </th>
              <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
              </th>
              <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
              </th>
              <th className="text-center p-4 text-[var(--color-secondary)] font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            {types.map((type) => (
              <tr
                key={type.id}
                className="border-b border-[var(--color-border)]"
              >
                <td className="p-4">
                  <div className="font-mono font-bold text-[var(--color-def)]">
                    {type.id}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <h4 className="font-bold text-[var(--color-def)]">
                      {type.name}
                    </h4>
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
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableType;
