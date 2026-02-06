import type { ITypes, UnionArray } from "@/types/types";
import HeadTable from "./HeadTable";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useCallback, useState } from "react";

const TableType = ({ types }: { types: ITypes[] }) => {
  const [typeData, setTypeData] = useState<ITypes[]>(types);
  const [filteredTypes, setFilteredTypes] = useState<ITypes[]>(types);

  // фильтрация
  const filterType = (id: number) => {
    setTypeData((prev) => prev.filter((type) => type.id !== id));
    setFilteredTypes((prev) => prev.filter((type) => type.id !== id));
  };

  // функция для поиска
  const handleSearch = useCallback((filteredArray: UnionArray[]) => {
    setFilteredTypes(filteredArray as ITypes[]);
  }, []);
  return (
    <>
      <HeadTable
        title="Type Inventory"
        description="Manage all products in your store"
        placeholder="Search types..."
        textBtn="+ Add Type"
        array={typeData}
        onSearch={handleSearch}
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
              <th className="text-left p-4 text-[var(--color-secondary)] font-medium"></th>
              <th className="text-left p-4 text-[var(--color-secondary)] font-medium"></th>
              <th className="text-left p-4 text-[var(--color-secondary)] font-medium"></th>
              <th className="text-left p-4 text-[var(--color-secondary)] font-medium"></th>
              <th className="text-left p-4 text-[var(--color-secondary)] font-medium"></th>
              <th className="text-center p-4 text-[var(--color-secondary)] font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            {filteredTypes.map((type) => (
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
                      className="p-2 hover:bg-red-500/10 rounded-lg transition-colors"
                      title="Delete"
                      onClick={() => filterType(type.id)}
                    >
                      <TrashIcon width={25} height={25} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredTypes.length === 0 && (
          <div className="text-center py-9">
            <h2>Ничего не найдено!</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default TableType;
