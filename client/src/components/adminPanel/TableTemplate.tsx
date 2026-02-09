import type { TableTemplateProps, UnionArray } from "@/types/types";
import { useCallback, useState, Fragment } from "react";
import HeadTable from "./HeadTable";
import ModalDeleate from "../modals/ModalDeleate";

const TableTemplate = <T extends UnionArray>({
  data,
  title,
  description,
  placeholder,
  textBtn,
  renderHeader,
  renderRow,
  modalName = "item",
}: TableTemplateProps<T>) => {
  const [items, setItems] = useState<T[]>(data);
  const [filteredItems, setFilteredItems] = useState<T[]>(data);
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // функция удаления
  const handleDelete = useCallback((id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    setFilteredItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

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
      handleDelete(itemToDelete);
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
        array={items}
        onSearch={handleSearch}
        onClick={() => setModalOpen(true)}
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
          <div className="text-center py-9">
            <h2>Ничего не найдено!</h2>
          </div>
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
