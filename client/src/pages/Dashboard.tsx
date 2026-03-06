import FavouriteProducts from "@/components/dashboard/FavouriteProducts";
import ProfileInfo from "@/components/dashboard/ProfileInfo";
import Settings from "@/components/dashboard/Settings";
import SideBarInfo from "@/components/dashboard/SideBarInfo";
import Head from "@/components/ui/Head";
import { LOGIN_ROUTE } from "@/utils/constants";
import { useStore } from "@/utils/context";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DASHBOARD_TABS } from "@/utils/constants";
import { deleteWishlist, fetchWishlist } from "@/http/deviceAPI";
import type { IDevice } from "@/types/types";

const DashboardPage = observer(() => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("profile");
  const { device, user, basket } = useStore();
  const handleTabs = (value: string) => {
    setTab(value);
  };

  const loadWishlist = async () => {
    await fetchWishlist().then((data) => {
      const wishlist = data.wishlist_devices.map(
        (item: { device: IDevice }) => item.device,
      );
      device.setDevices(wishlist);
    });
  };

  const deleteItem = async (deivceId: string) => {
    await deleteWishlist(deivceId).then((data) => {
      // ТОСТ
      console.log(data);
      loadWishlist();
    });
  };

  useEffect(() => {
    loadWishlist();
  }, []);

  const handleLogout = () => {
    user.setUser(null);
    user.setIsAuth(false);
    localStorage.removeItem("token");
    basket.clearBasket();
    navigate(LOGIN_ROUTE);
  };

  return (
    <section className="container p-4 md:p-6">
      {/* Заголовок */}
      <Head
        title={`Welcome back, ${user.user?.name}!`}
        description={`Here's what's happening with your account today.`}
        className="mb-8"
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Левая колонка */}
        {user.user && (
          <SideBarInfo
            tabs={DASHBOARD_TABS}
            name={user.user.name}
            lastname={user.user.lastname}
            number={user.user.number}
            email={user.user.email}
            isActive={tab}
            className="dashboard-tabs"
            onChange={handleTabs}
          />
        )}

        {/* Правая колонка */}
        <div className="lg:col-span-3">
          {/* Таб: Избранные товары */}
          {tab === "wishlist" && (
            <FavouriteProducts
              deleteHandlerWishlist={(deviceId) => deleteItem(String(deviceId))}
              devices={device.devices}
            />
          )}

          {/* Таб: Настройки */}
          {tab === "settings" && user.user && (
            <Settings
              name={user.user.name}
              lastname={user.user.lastname}
              number={user.user.number}
              email={user.user.email}
              onLogout={handleLogout}
              onChange={() => {
                console.log("change");
              }}
              onSave={() => {
                console.log("save");
              }}
            />
          )}

          {/* Таб: Профиль */}
          {tab === "profile" && user.user && (
            <ProfileInfo
              name={user.user.name}
              lastname={user.user.lastname}
              number={user.user.number}
              email={user.user.email}
              devices={device.devices}
              basketCount={basket.items.length}
              onClick={() => setTab("settings")}
            />
          )}
        </div>
      </div>
    </section>
  );
});

export default DashboardPage;
