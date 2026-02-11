import Preloader from "@/components/adminPanel/Preloader";
import Stats from "@/components/adminPanel/Stats";
import TableBrand from "@/components/adminPanel/TableBrand";
import TableDevice from "@/components/adminPanel/TableDevice";
import TableType from "@/components/adminPanel/TableType";
import AnimatedContent from "@/components/ui/AnimatedContent";
import Pagitanion from "@/components/ui/Pagination";
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
                <>
                  <TableDevice
                    devices={device.devices}
                    types={device.types}
                    brands={device.brands}
                    info={deviceInfo}
                  />
                  <Pagitanion array={device.devices} />
                </>
              )}
              {tab === "type" && (
                <>
                  {" "}
                  <TableType types={device.types} />{" "}
                  <Pagitanion array={device.types} />
                </>
              )}
              {tab === "brand" && (
                <>
                  <TableBrand brands={device.brands} />{" "}
                  <Pagitanion array={device.brands} />{" "}
                </>
              )}
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
