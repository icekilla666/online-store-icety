import type { ModalBrandProps } from "@/types/types";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const ModalBrand = ({
  open,
  onClose,
  onSubmit,
  initialData,
  title = "Add New Brand",
}: ModalBrandProps) => {
  const [name, setName] = useState(initialData?.name || "");

  useEffect(() => {
    if (open) {
      setName(initialData?.name || "");
    }
  }, [open, initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit({ name: name.trim() });
      setName("");
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/40 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-wrapper text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-md data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-primary px-4 pt-5 pb-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <DialogTitle as="h3" className="text-lg font-semibold text-[var(--color-def)]">
                  {title}
                </DialogTitle>
                <button
                  onClick={onClose}
                  className="rounded-md p-1 text-[var(--color-secondary)] hover:text-[var(--color-def)] hover:bg-[var(--color-border)]"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="brand-name" className="block text-sm font-medium text-[var(--color-secondary)] mb-2">
                    Brand Name
                  </label>
                  <input
                    id="brand-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 bg-wrapper border border-[var(--color-border)] rounded-lg text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)]"
                    placeholder="Enter brand name"
                    required
                    autoFocus
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-[var(--color-border)]">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium rounded-lg text-[var(--color-secondary)] hover:text-[var(--color-def)] hover:bg-[var(--color-border)]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-[var(--color-custom)] text-white hover:opacity-90"
                  >
                    {initialData ? "Update" : "Create"}
                  </button>
                </div>
              </form>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ModalBrand;
