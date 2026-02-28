import type { TableTemplateProps, UnionArray } from "@/types/types";
import { useCallback, useState, Fragment } from "react";
import HeadTable from "./HeadTable";
import ModalDeleate from "../ui/modals/ModalDeleate";
import Empty from "../Empty";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const TableTemplate = <T extends UnionArray>({
  data,
  title,
  description,
  placeholder,
  textBtn,
  renderHeader,
  renderRow,
  modalName = "item",
  modal,
  deleteFunc,
}: TableTemplateProps<T>) => {
  const [filteredItems, setFilteredItems] = useState<T[]>(data);
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  // функция поиска
  const handleSearch = useCallback((filteredArray: UnionArray[]) => {
    setFilteredItems(filteredArray as T[]);
  }, []);

  // открытие модалки удаления
  const openDeleteModal = (id: number) => {
    setItemToDelete(id);
    setOpen(true);
  };

  // подтверждение удаления
  const confirmDelete = () => {
    if (itemToDelete) {
      deleteFunc(itemToDelete);
      setOpen(false);
      setItemToDelete(null);
    }
  };

  return (
    <>
      <HeadTable
        title={title}
        description={description}
        placeholder={placeholder}
        textBtn={textBtn}
        array={data}
        onSearch={handleSearch}
        onClick={modal}
      />

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[var(--color-border)]">
              {renderHeader()}
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <Fragment key={item.id}>
                {renderRow(item, openDeleteModal)}
              </Fragment>
            ))}
          </tbody>
        </table>

        {filteredItems.length === 0 && (
          <Empty
            icon={<MagnifyingGlassIcon className="w-24 h-24" />}
            title="No results"
            description="We couldn't find anything matching your current filters. Try adjusting your search criteria."
          />
        )}
      </div>

      {/* модалка с подтверждением на удаление */}
      <ModalDeleate
        name={modalName}
        open={open}
        onChange={(state: boolean) => {
          setOpen(state);
          if (!state) setItemToDelete(null);
        }}
        func={confirmDelete}
      />
    </>
  );
};

export default TableTemplate;
