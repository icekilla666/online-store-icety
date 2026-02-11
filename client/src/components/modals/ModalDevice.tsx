import type { DeviceFormData, ModalDeviceProps } from "@/types/types";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const ModalDevice = ({
  open,
  onClose,
  onSubmit,
  initialData,
  brands,
  types,
  title = "Add New Device",
}: ModalDeviceProps) => {
  const [formData, setFormData] = useState<DeviceFormData>({
    name: "",
    shortDesc: "",
    price: 0,
    brandId: brands[0]?.id || 0,
    typeId: types[0]?.id || 0,
    rating: 5.0,
    characteristics: [],
  });

  useEffect(() => {
    if (!open) return;
    if (initialData) {
      setFormData(initialData);
      return;
    }
    setFormData({
      name: "",
      shortDesc: "",
      price: 0,
      brandId: brands[0]?.id || 0,
      typeId: types[0]?.id || 0,
      rating: 5.0,
      characteristics: [],
    });
  }, [open, initialData, brands, types]);

  const [newChar, setNewChar] = useState({ title: "", description: "" });

  const handleChange = (field: keyof DeviceFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNumberChange = (field: keyof DeviceFormData, value: string) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setFormData((prev) => ({ ...prev, [field]: numValue }));
    }
  };

  const addCharacteristic = () => {
    if (newChar.title.trim() && newChar.description.trim()) {
      setFormData((prev) => ({
        ...prev,
        characteristics: [
          ...prev.characteristics,
          {
            id: Date.now(),
            title: newChar.title.trim(),
            description: newChar.description.trim(),
          },
        ],
      }));
      setNewChar({ title: "", description: "" });
    }
  };

  const removeCharacteristic = (id: number) => {
    setFormData((prev) => ({
      ...prev,
      characteristics: prev.characteristics.filter((c) => c.id !== id),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
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
            className="relative transform overflow-hidden rounded-lg bg-wrapper text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-2xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-primary px-4 pt-5 pb-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <DialogTitle
                  as="h3"
                  className="text-lg font-semibold text-[var(--color-def)]"
                >
                  {title}
                </DialogTitle>
                <button
                  onClick={onClose}
                  className="rounded-md p-1 text-[var(--color-secondary)] hover:text-[var(--color-def)] hover:bg-[var(--color-border)]"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 max-h-[70vh] overflow-y-auto pr-2"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-secondary)] mb-2">
                      Device Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="w-full px-3 py-2 bg-wrapper border border-[var(--color-border)] rounded-lg text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)]"
                      placeholder="Device name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-secondary)] mb-2">
                      Price *
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.price || ""}
                      onChange={(e) =>
                        handleNumberChange("price", e.target.value)
                      }
                      className="w-full px-3 py-2 bg-wrapper border border-[var(--color-border)] rounded-lg text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)]"
                      placeholder="0.00"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-secondary)] mb-2">
                    Short Description *
                  </label>
                  <textarea
                    value={formData.shortDesc}
                    onChange={(e) => handleChange("shortDesc", e.target.value)}
                    className="w-full px-3 py-2 bg-wrapper border border-[var(--color-border)] rounded-lg text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)] min-h-[80px]"
                    placeholder="Brief description"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-secondary)] mb-2">
                      Brand *
                    </label>
                    <select
                      value={formData.brandId}
                      onChange={(e) =>
                        handleChange("brandId", parseInt(e.target.value))
                      }
                      className="w-full px-3 py-2 bg-wrapper border border-[var(--color-border)] rounded-lg text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)]"
                      required
                    >
                      <option value="">Select Brand</option>
                      {brands.map((brand) => (
                        <option key={brand.id} value={brand.id}>
                          {brand.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-secondary)] mb-2">
                      Type *
                    </label>
                    <select
                      value={formData.typeId}
                      onChange={(e) =>
                        handleChange("typeId", parseInt(e.target.value))
                      }
                      className="w-full px-3 py-2 bg-wrapper border border-[var(--color-border)] rounded-lg text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)]"
                      required
                    >
                      <option value="">Select Type</option>
                      {types.map((type) => (
                        <option key={type.id} value={type.id}>
                          {type.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-secondary)] mb-2">
                      Rating (0-5) *
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      max="5"
                      value={formData.rating}
                      onChange={(e) =>
                        handleNumberChange("rating", e.target.value)
                      }
                      className="w-full px-3 py-2 bg-wrapper border border-[var(--color-border)] rounded-lg text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-secondary)] mb-2">
                    Image URL
                  </label>
                  <input
                    type="text"
                    value={formData.img || ""}
                    onChange={(e) => handleChange("img", e.target.value)}
                    className="w-full px-3 py-2 bg-wrapper border border-[var(--color-border)] rounded-lg text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)]"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div className="border-t border-[var(--color-border)] pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-medium text-[var(--color-def)]">
                      Characteristics
                    </h4>
                    <span className="text-xs text-[var(--color-secondary)]">
                      {formData.characteristics.length} added
                    </span>
                  </div>

                  <div className="flex flex-col justify-between md:flex-row">
                      <input
                        type="text"
                        value={newChar.title}
                        onChange={(e) =>
                          setNewChar({ ...newChar, title: e.target.value })
                        }
                        className="px-3 py-2 bg-wrapper border border-[var(--color-border)] rounded-lg text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)]"
                        placeholder="Title"
                      />
                      <input
                        type="text"
                        value={newChar.description}
                        onChange={(e) =>
                          setNewChar({
                            ...newChar,
                            description: e.target.value,
                          })
                        }
                        className="px-3 py-2 bg-wrapper border border-[var(--color-border)] rounded-lg text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)]"
                        placeholder="Description"
                      />
                      <button
                        type="button"
                        onClick={addCharacteristic}
                        className="flex items-center justify-center gap-2 px-3 py-2 bg-[var(--color-custom)] text-white rounded-lg hover:opacity-90"
                      >
                        <PlusIcon className="h-4 w-4" />
                        Add Characteristic
                      </button>
                  </div>

                  {formData.characteristics.length > 0 && (
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {formData.characteristics.map((char) => (
                        <div
                          key={char.id}
                          className="flex items-center justify-between p-3 bg-wrapper border border-[var(--color-border)] rounded-lg"
                        >
                          <div className="flex-1">
                            <div className="font-medium text-[var(--color-def)]">
                              {char.title}
                            </div>
                            <div className="text-sm text-[var(--color-secondary)]">
                              {char.description}
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeCharacteristic(char.id)}
                            className="ml-2 p-1 text-red-500 hover:bg-red-500/10 rounded"
                          >
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
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
                    {initialData ? "Update Device" : "Create Device"}
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

export default ModalDevice;
