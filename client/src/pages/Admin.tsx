import BottomParams from "@/components/adminPanel/BottomParams";
import Preloader from "@/components/adminPanel/Preloader";
import Stats from "@/components/adminPanel/Stats";
import TableBrand from "@/components/adminPanel/TableBrand";
import TableDevice from "@/components/adminPanel/TableDevice";
import TableType from "@/components/adminPanel/TableType";
import AnimatedContent from "@/components/ui/AnimatedContent";
import Tabs from "@/components/ui/Tabs";
import { useTitle } from "@/hooks/useTitle";
import {
  fetchBrand,
  fetchDevice,
  fetchOneDevice,
  fetchType,
} from "@/http/deviceAPI";
import type { DeviceInfoArray } from "@/types/types";
import { ADMIN_TABS } from "@/utils/constants";
import { useStore } from "@/utils/context";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

const Admin = observer(() => {
  useTitle("Admin Panel");
  const { device } = useStore();
  const [tab, setTab] = useState("dev");
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfoArray[]>([]);

  const fetchDeviceInfo = async (deviceId: number) => {
    try {
      const data = await fetchOneDevice(String(deviceId));
      setDeviceInfo(data.info);
    } catch (e: any) {
      console.error("Error fetching device info:", e);
    }
  };

  const refreshData = () => {
    fetchType().then((data) => device.setTypes(data));
    fetchBrand().then((data) => device.setBrands(data));
    fetchDevice({
      typeId: device.selectedType?.id,
      brandId: device.selectedBrand?.id,
      page: device.page,
      limit: device.limit,
    }).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
    fetchDevice().then((data) => device.setAllDevices(data.rows));
  };

  useEffect(() => {
    refreshData();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [device.page, device.limit]);
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
              devices={device.allDevices}
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
                    onDeviceSelect={fetchDeviceInfo}
                    onRefresh={refreshData}
                  />
                  <BottomParams />
                </>
              )}
              {tab === "type" && (
                <>
                  {" "}
                  <TableType
                    types={device.types}
                    onRefresh={refreshData}
                  />{" "}
                  <BottomParams />
                </>
              )}
              {tab === "brand" && (
                <>
                  <TableBrand brands={device.brands} onRefresh={refreshData} />{" "}
                  <BottomParams />{" "}
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
});

export default Admin;
