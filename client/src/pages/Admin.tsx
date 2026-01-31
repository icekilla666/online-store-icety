import Preloader from "@/components/adminPanel/Preloader";
import AnimatedContent from "@/components/ui/AnimatedContent";
import { useEffect, useState } from "react";

const Admin = () => {
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

              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <div className="px-4 py-2 bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-lg">
                  <span className="text-sm text-[var(--color-secondary)]">
                    Last updated:
                  </span>
                  <span className="ml-2 text-sm font-medium text-[var(--color-def)]">
                    Today, 14:30
                  </span>
                </div>
                <button className="px-4 py-2 bg-[var(--color-custom)] text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                  Export Data
                </button>
              </div>
            </div>

            {/* Карточки статистики */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-[var(--color-secondary)] mb-2">
                      Total Devices
                    </h3>
                    <p className="text-3xl font-bold text-[var(--color-def)]">
                      42
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <span className="text-2xl text-[var(--color-custom)]">
                      📱
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[var(--color-secondary)] mt-4">
                  +3 this week
                </p>
              </div>

              <div className="bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-[var(--color-secondary)] mb-2">
                      Total Types
                    </h3>
                    <p className="text-3xl font-bold text-[var(--color-def)]">
                      8
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <span className="text-2xl text-[var(--color-custom)]">
                      🏷️
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[var(--color-secondary)] mt-4">
                  +1 this month
                </p>
              </div>

              <div className="bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-[var(--color-secondary)] mb-2">
                      Total Brands
                    </h3>
                    <p className="text-3xl font-bold text-[var(--color-def)]">
                      12
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <span className="text-2xl text-[var(--color-custom)]">
                      🏢
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[var(--color-secondary)] mt-4">
                  Active: 10
                </p>
              </div>

              <div className="bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-[var(--color-secondary)] mb-2">
                      Total Value
                    </h3>
                    <p className="text-3xl font-bold text-[var(--color-def)]">
                      $54,890
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                    <span className="text-2xl text-[var(--color-custom)]">
                      💰
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[var(--color-secondary)] mt-4">
                  Avg: $1,307 per device
                </p>
              </div>
            </div>

            {/* Табы и контент */}
            <div className="bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-xl overflow-hidden mb-8">
              {/* Табы навигации */}
              <div className="flex border-b border-[var(--color-border)]">
                {["Devices", "Types", "Brands", "Analytics"].map(
                  (tab, index) => (
                    <button
                      key={tab}
                      className={`px-6 py-4 font-medium text-sm transition-colors relative flex items-center gap-2 ${
                        index === 0
                          ? "text-[var(--color-custom)] border-b-2 border-[var(--color-custom)]"
                          : "text-[var(--color-secondary)] hover:text-[var(--color-def)]"
                      }`}
                    >
                      <span
                        className={`${index === 0 ? "text-[var(--color-custom)]" : "text-[var(--color-secondary)]"}`}
                      >
                        {index === 0 && "📱"}
                        {index === 1 && "🏷️"}
                        {index === 2 && "🏢"}
                        {index === 3 && "📊"}
                      </span>
                      {tab}
                      {index === 2 && (
                        <span className="ml-2 px-2 py-0.5 bg-red-500/10 text-red-500 text-xs rounded-full">
                          3 new
                        </span>
                      )}
                    </button>
                  ),
                )}
              </div>

              {/* Заголовок таблицы и действия */}
              <div className="p-6 border-b border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-xl font-bold text-[var(--color-def)]">
                    Device Inventory
                  </h2>
                  <p className="text-sm text-[var(--color-secondary)] mt-1">
                    Manage all products in your store
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search devices..."
                      className="pl-10 pr-4 py-2 bg-[var(--color-primary)] border border-[var(--color-border)] rounded-lg text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)] transition-colors w-full sm:w-64"
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--color-secondary)]">
                      🔍
                    </span>
                  </div>
                  <button className="px-4 py-2 bg-[var(--color-custom)] text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                    <span>+</span>
                    <span>Add Device</span>
                  </button>
                </div>
              </div>

              {/* Таблица Devices */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[var(--color-border)]">
                      <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
                        <div className="flex items-center gap-2">
                          <span>ID</span>
                          <span className="text-xs">↕️</span>
                        </div>
                      </th>
                      <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
                        Product
                      </th>
                      <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
                        Type
                      </th>
                      <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
                        Brand
                      </th>
                      <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
                        Price
                      </th>
                      <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
                        Rating
                      </th>
                      <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
                        Status
                      </th>
                      <th className="text-left p-4 text-[var(--color-secondary)] font-medium">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Row 1 */}
                    <tr className="border-b border-[var(--color-border)] hover:bg-[var(--color-primary)] transition-colors">
                      <td className="p-4">
                        <div className="font-mono font-bold text-[var(--color-def)]">
                          #001
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                            <span className="text-2xl">📱</span>
                          </div>
                          <div>
                            <div className="font-bold text-[var(--color-def)]">
                              iPhone 15 Pro
                            </div>
                            <div className="text-sm text-[var(--color-secondary)] mt-1">
                              Latest Apple flagship
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-3 py-1 bg-purple-500/10 text-purple-500 text-xs font-medium rounded-full">
                          Smartphone
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="font-medium text-[var(--color-def)]">
                          Apple
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-[var(--color-def)]">
                          $999
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="flex text-yellow-400">★★★★☆</div>
                          <span className="font-medium text-[var(--color-def)]">
                            4.5
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-medium rounded-full">
                          In Stock
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <button
                            className="p-2 text-blue-500 hover:bg-blue-500/10 rounded-lg transition-colors"
                            title="Edit"
                          >
                            ✏️
                          </button>
                          <button
                            className="p-2 text-green-500 hover:bg-green-500/10 rounded-lg transition-colors"
                            title="View"
                          >
                            👁️
                          </button>
                          <button
                            className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                            title="Delete"
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="border-b border-[var(--color-border)] hover:bg-[var(--color-primary)] transition-colors">
                      <td className="p-4">
                        <div className="font-mono font-bold text-[var(--color-def)]">
                          #002
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                            <span className="text-2xl">💻</span>
                          </div>
                          <div>
                            <div className="font-bold text-[var(--color-def)]">
                              MacBook Pro 16"
                            </div>
                            <div className="text-sm text-[var(--color-secondary)] mt-1">
                              M3 Max, 32GB RAM
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-xs font-medium rounded-full">
                          Laptop
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="font-medium text-[var(--color-def)]">
                          Apple
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-[var(--color-def)]">
                          $2,499
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="flex text-yellow-400">★★★★★</div>
                          <span className="font-medium text-[var(--color-def)]">
                            4.9
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-xs font-medium rounded-full">
                          Low Stock
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <button
                            className="p-2 text-blue-500 hover:bg-blue-500/10 rounded-lg transition-colors"
                            title="Edit"
                          >
                            ✏️
                          </button>
                          <button
                            className="p-2 text-green-500 hover:bg-green-500/10 rounded-lg transition-colors"
                            title="View"
                          >
                            👁️
                          </button>
                          <button
                            className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                            title="Delete"
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="border-b border-[var(--color-border)] hover:bg-[var(--color-primary)] transition-colors">
                      <td className="p-4">
                        <div className="font-mono font-bold text-[var(--color-def)]">
                          #003
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                            <span className="text-2xl">⌚</span>
                          </div>
                          <div>
                            <div className="font-bold text-[var(--color-def)]">
                              Galaxy Watch 6
                            </div>
                            <div className="text-sm text-[var(--color-secondary)] mt-1">
                              Health tracking
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-3 py-1 bg-pink-500/10 text-pink-500 text-xs font-medium rounded-full">
                          Wearable
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="font-medium text-[var(--color-def)]">
                          Samsung
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-[var(--color-def)]">
                          $349
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="flex text-yellow-400">★★★★☆</div>
                          <span className="font-medium text-[var(--color-def)]">
                            4.3
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-medium rounded-full">
                          In Stock
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <button
                            className="p-2 text-blue-500 hover:bg-blue-500/10 rounded-lg transition-colors"
                            title="Edit"
                          >
                            ✏️
                          </button>
                          <button
                            className="p-2 text-green-500 hover:bg-green-500/10 rounded-lg transition-colors"
                            title="View"
                          >
                            👁️
                          </button>
                          <button
                            className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                            title="Delete"
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr className="hover:bg-[var(--color-primary)] transition-colors">
                      <td className="p-4">
                        <div className="font-mono font-bold text-[var(--color-def)]">
                          #004
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                            <span className="text-2xl">🎮</span>
                          </div>
                          <div>
                            <div className="font-bold text-[var(--color-def)]">
                              PlayStation 5
                            </div>
                            <div className="text-sm text-[var(--color-secondary)] mt-1">
                              Digital Edition
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-medium rounded-full">
                          Gaming
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="font-medium text-[var(--color-def)]">
                          Sony
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-[var(--color-def)]">
                          $399
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="flex text-yellow-400">★★★★★</div>
                          <span className="font-medium text-[var(--color-def)]">
                            4.8
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-3 py-1 bg-red-500/10 text-red-500 text-xs font-medium rounded-full">
                          Out of Stock
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <button
                            className="p-2 text-blue-500 hover:bg-blue-500/10 rounded-lg transition-colors"
                            title="Edit"
                          >
                            ✏️
                          </button>
                          <button
                            className="p-2 text-green-500 hover:bg-green-500/10 rounded-lg transition-colors"
                            title="View"
                          >
                            👁️
                          </button>
                          <button
                            className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                            title="Delete"
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Пагинация */}
              <div className="p-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-sm text-[var(--color-secondary)]">
                  Showing{" "}
                  <span className="font-medium text-[var(--color-def)]">
                    1-4
                  </span>{" "}
                  of{" "}
                  <span className="font-medium text-[var(--color-def)]">
                    42
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

            {/* Боковая панель с Types и Brands */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Types таблица */}
              <div className="lg:col-span-2 bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-[var(--color-def)]">
                    Product Types
                  </h2>
                  <button className="px-4 py-2 text-sm bg-[var(--color-custom)] text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                    + Add Type
                  </button>
                </div>

                <div className="space-y-4">
                  {[
                    "Smartphones",
                    "Laptops",
                    "Tablets",
                    "Wearables",
                    "Accessories",
                    "Gaming",
                    "Audio",
                    "Cameras",
                  ].map((type, index) => (
                    <div
                      key={type}
                      className="flex items-center justify-between p-4 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-primary)] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center">
                          <span className="text-lg">🏷️</span>
                        </div>
                        <div>
                          <div className="font-bold text-[var(--color-def)]">
                            {type}
                          </div>
                          <div className="text-sm text-[var(--color-secondary)]">
                            {index + 5} devices
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-blue-500 hover:bg-blue-500/10 rounded-lg transition-colors">
                          ✏️
                        </button>
                        <button className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brands таблица */}
              <div className="bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-[var(--color-def)]">
                    Brands
                  </h2>
                  <button className="px-4 py-2 text-sm bg-[var(--color-custom)] text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                    + Add Brand
                  </button>
                </div>

                <div className="space-y-4">
                  {[
                    { name: "Apple", devices: 15, color: "bg-gray-500/10" },
                    { name: "Samsung", devices: 12, color: "bg-blue-500/10" },
                    { name: "Google", devices: 8, color: "bg-red-500/10" },
                    { name: "Sony", devices: 6, color: "bg-purple-500/10" },
                    { name: "Xiaomi", devices: 5, color: "bg-orange-500/10" },
                  ].map((brand) => (
                    <div
                      key={brand.name}
                      className="flex items-center justify-between p-4 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-primary)] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg ${brand.color} flex items-center justify-center`}
                        >
                          <span className="text-lg">🏢</span>
                        </div>
                        <div>
                          <div className="font-bold text-[var(--color-def)]">
                            {brand.name}
                          </div>
                          <div className="text-sm text-[var(--color-secondary)]">
                            {brand.devices} devices
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-blue-500 hover:bg-blue-500/10 rounded-lg transition-colors">
                          ✏️
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                  <h3 className="text-lg font-bold text-[var(--color-def)] mb-4">
                    Quick Stats
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[var(--color-secondary)]">
                        Active Brands
                      </span>
                      <span className="font-bold text-[var(--color-def)]">
                        12
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[var(--color-secondary)]">
                        Top Brand
                      </span>
                      <span className="font-bold text-[var(--color-def)]">
                        Apple
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[var(--color-secondary)]">
                        Avg Devices/Brand
                      </span>
                      <span className="font-bold text-[var(--color-def)]">
                        3.5
                      </span>
                    </div>
                  </div>
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
