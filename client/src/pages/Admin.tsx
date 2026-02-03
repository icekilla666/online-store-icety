import Preloader from "@/components/adminPanel/Preloader";
import Stats from "@/components/adminPanel/Stats";
import TableBrand from "@/components/adminPanel/TableBrand";
import TableDevice from "@/components/adminPanel/TableDevice";
import TableType from "@/components/adminPanel/TableType";
import AnimatedContent from "@/components/ui/AnimatedContent";
import Tabs from "@/components/ui/Tabs";
import { ADMIN_TABS, deviceInfo } from "@/utils/constants";
import { useStore } from "@/utils/context";
import { useEffect, useState } from "react";

const Admin = () => {
  const { device } = useStore();
  const [tab, setTab] = useState("dev");

  const handleTabs = (value: string) => {
    setTab(value);
  };

  const [load, setLoad] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(true);
    }, 7500);

    return () => clearTimeout(timer);
  }, []);
  return load ? (
    <AnimatedContent>
      <section className="container">
        <div className="p-4 md:p-6">
          <div className="container mx-auto">
            {/* Заголовок и статистика */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-[var(--color-def)]">
                  Admin Dashboard
                </h1>
                <p className="text-[var(--color-secondary)] mt-2">
                  Manage your store inventory
                </p>
              </div>
            </div>

            {/* Карточки статистики */}
            <Stats
              devices={device.devices}
              types={device.types}
              brands={device.brands}
            />

            {/* Табы и контент */}
            <div className="bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-xl overflow-hidden mb-8">
              {/* Табы навигации */}
              <div className="admin-tabs">
                <Tabs tabs={ADMIN_TABS} isActive={tab} onChange={handleTabs} />
              </div>

              {/* Таблица Devices */}
              {tab === "dev" && (
                <TableDevice
                  devices={device.devices}
                  types={device.types}
                  brands={device.brands}
                  info={deviceInfo}
                />
              )}
              {tab === "type" && <TableType types={device.types} />}
              {tab === "brand" && <TableBrand brands={device.brands} />}

              {/* Пагинация */}
              <div className="p-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-sm text-[var(--color-secondary)]">
                  Showing{" "}
                  <span className="font-medium text-[var(--color-def)]">
                    1-10
                  </span>{" "}
                  of{" "}
                  <span className="font-medium text-[var(--color-def)]">
                    {device.devices.length}
                  </span>{" "}
                  devices
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-primary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    ←
                  </button>
                  <button className="w-10 h-10 bg-[var(--color-custom)] text-white rounded-lg font-medium">
                    1
                  </button>
                  <button className="w-10 h-10 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-primary)] transition-colors font-medium">
                    2
                  </button>
                  <button className="w-10 h-10 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-primary)] transition-colors font-medium">
                    3
                  </button>
                  <span className="px-2 text-[var(--color-secondary)]">
                    ...
                  </span>
                  <button className="w-10 h-10 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-primary)] transition-colors font-medium">
                    10
                  </button>
                  <button className="p-2 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-primary)] transition-colors">
                    →
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-[var(--color-secondary)]">
                    Show:
                  </span>
                  <select className="bg-[var(--color-primary)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)]">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                  </select>
                  <span className="text-sm text-[var(--color-secondary)]">
                    per page
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedContent>
  ) : (
    <Preloader />
  );
};

export default Admin;
