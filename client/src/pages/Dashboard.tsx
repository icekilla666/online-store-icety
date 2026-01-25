import FavouriteProducts from "@/components/dashboard/FavouriteProducts";
import ProfileInfo from "@/components/dashboard/ProfileInfo";
import Settings from "@/components/dashboard/Settings";
import SideBarInfo from "@/components/dashboard/SideBarInfo";
import Head from "@/components/ui/Head";
import { DEVICE_ROUTE, LOGIN_ROUTE } from "@/utils/constants";
import { useStore } from "@/utils/context";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DASHBOARD_TABS } from "@/utils/constants";

const DashboardPage = observer(() => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("profile");
  const [userData, setUserData] = useState({
    name: "Alexander",
    lastName: "Johnson",
    email: "alex.johnson@example.com",
    phoneNumber: "+1 (555) 987-6543",
  });
  const [editData, setEditData] = useState(userData);
  const { device, user } = useStore();

  const handleTabs = (value: string) => {
    setTab(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setUserData(editData);
  };

  const handleLogout = () => {
    user.setIsAuth(false);
    navigate(LOGIN_ROUTE);
  };

  return (
    <section className="container p-4 md:p-6">
      {/* Заголовок */}
      <Head
        title={`Welcome back, ${userData.name}!`}
        description={`Here's what's happening with your account today.`}
        className="mb-8"
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Левая колонка */}
        <SideBarInfo
          tabs={DASHBOARD_TABS}
          name={userData.name}
          lastname={userData.lastName}
          phone={userData.phoneNumber}
          email={userData.email}
          isActive={tab}
          className="dashboard-tabs"
          onChange={handleTabs}
        />

        {/* Правая колонка - Контент табов */}
        <div className="lg:col-span-3">
          {/* Таб: Избранные товары */}
          {tab === "wishlist" && (
            <FavouriteProducts
              devices={device.devices}
            />
          )}

          {/* Таб: Настройки */}

          {tab === "settings" && (
            <Settings
              name={editData.name}
              lastname={editData.lastName}
              phone={editData.phoneNumber}
              email={editData.email}
              onChange={handleInputChange}
              onLogout={handleLogout}
              onSave={handleSave}
            />
          )}

          {/* Таб: Профиль */}
          {tab === "profile" && (
            <ProfileInfo
              name={userData.name}
              lastname={userData.lastName}
              phone={userData.phoneNumber}
              email={userData.email}
              devices={device.devices}
              onClick={() => setTab("settings")}
            />
          )}
        </div>
      </div>
    </section>
  );
});

export default DashboardPage;
