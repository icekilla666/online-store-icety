import { useState } from 'react';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Alexander',
    lastName: 'Johnson',
    email: 'alex.johnson@example.com',
    phoneNumber: '+1 (555) 987-6543'
  });

  const favoriteProducts = [
    { id: 1, name: 'MacBook Pro 16"', price: '$2,499', image: '💻', category: 'Laptops' },
    { id: 2, name: 'iPhone 15 Pro', price: '$999', image: '📱', category: 'Phones' },
    { id: 3, name: 'Sony WH-1000XM5', price: '$399', image: '🎧', category: 'Audio' },
    { id: 4, name: 'Apple Watch Ultra', price: '$799', image: '⌚', category: 'Wearables' },
    { id: 5, name: 'iPad Air', price: '$599', image: '📱', category: 'Tablets' },
    { id: 6, name: 'PlayStation 5', price: '$499', image: '🎮', category: 'Gaming' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Здесь отправка данных на сервер
  };

  return (
    <section className="container p-4 md:p-6">
        
        {/* Заголовок */}
        <div className="mb-8">
          <h1>Welcome back, {userData.name}!</h1>
          <p>Here's what's happening with your account today.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Левая колонка - Профиль */}
          <div className="lg:col-span-1">
            <div className="bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-xl p-6 sticky top-6">
              
              {/* Аватар и основная информация */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-[var(--color-custom)]">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold text-[var(--color-def)] text-center">
                  {userData.name} {userData.lastName}
                </h2>
                <p className="text-[var(--color-secondary)] text-sm mt-1 text-center">{userData.email}</p>
              </div>

              {/* Контактная информация */}
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-[var(--color-secondary)] mb-1">Email Address</p>
                  <p className="text-[var(--color-def)] font-medium">{userData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-secondary)] mb-1">Phone Number</p>
                  <p className="text-[var(--color-def)] font-medium">{userData.phoneNumber}</p>
                </div>
              </div>

              {/* Табы навигации */}
              <div className="space-y-2 mb-6">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'profile' 
                      ? 'bg-[var(--color-custom)] text-white' 
                      : 'text-[var(--color-secondary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-def)]'
                  }`}
                >
                  👤 Profile Information
                </button>
                <button
                  onClick={() => setActiveTab('favorites')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'favorites' 
                      ? 'bg-[var(--color-custom)] text-white' 
                      : 'text-[var(--color-secondary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-def)]'
                  }`}
                >
                  ❤️ Favorite Products
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'settings' 
                      ? 'bg-[var(--color-custom)] text-white' 
                      : 'text-[var(--color-secondary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-def)]'
                  }`}
                >
                  ⚙️ Account Settings
                </button>
              </div>

              {/* Need Help плашка */}
              <div className="bg-[var(--color-primary)] border border-[var(--color-border)] rounded-lg p-4">
                <h3 className="font-bold text-[var(--color-def)] mb-2">Need Help?</h3>
                <p className="text-sm text-[var(--color-secondary)] mb-4">
                  Our support team is here to assist you with any questions
                </p>
                <button className="w-full px-4 py-2.5 bg-[var(--color-custom)] text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                  Contact Support
                </button>
              </div>

            </div>
          </div>

          {/* Правая колонка - Контент табов */}
          <div className="lg:col-span-3">
            
            {/* Таб: Избранные товары */}
            {activeTab === 'favorites' && (
              <div className="bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--color-def)]">Favorite Products</h2>
                    <p className="text-[var(--color-secondary)] mt-2">Your saved products for quick access</p>
                  </div>
                  <span className="bg-[var(--color-primary)] text-[var(--color-custom)] px-4 py-2 rounded-lg font-medium">
                    {favoriteProducts.length} items
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {favoriteProducts.map((product) => (
                    <div 
                      key={product.id}
                      className="border border-[var(--color-border)] rounded-xl p-4 hover:border-[var(--color-custom)] transition-colors group"
                    >
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-2xl mr-4">
                          {product.image}
                        </div>
                        <div>
                          <h3 className="font-bold text-[var(--color-def)] group-hover:text-[var(--color-custom)] transition-colors">
                            {product.name}
                          </h3>
                          <span className="text-xs px-2 py-1 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-full mt-1">
                            {product.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-[var(--color-def)]">{product.price}</span>
                        <button className="text-sm text-[var(--color-custom)] hover:underline font-medium">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Таб: Настройки */}
            {activeTab === 'settings' && (
              <div className="bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-xl p-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[var(--color-def)]">Account Settings</h2>
                  <p className="text-[var(--color-secondary)] mt-2">Update your personal information</p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-secondary)] mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-[var(--color-primary)] border border-[var(--color-border)] rounded-lg text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-secondary)] mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={userData.lastName}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-[var(--color-primary)] border border-[var(--color-border)] rounded-lg text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-secondary)] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-[var(--color-primary)] border border-[var(--color-border)] rounded-lg text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-secondary)] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={userData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-[var(--color-primary)] border border-[var(--color-border)] rounded-lg text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)] transition-colors"
                    />
                  </div>

                  {/* Пароль (дополнительно) */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-secondary)] mb-2">
                      Change Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      className="w-full p-3 bg-[var(--color-primary)] border border-[var(--color-border)] rounded-lg text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)] transition-colors"
                    />
                    <p className="text-xs text-[var(--color-secondary)] mt-2">
                      Leave empty if you don't want to change password
                    </p>
                  </div>
                </div>

                {/* Кнопки действий */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-[var(--color-border)]">
                  <button
                    onClick={handleSave}
                    className="px-6 py-3 bg-[var(--color-custom)] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-6 py-3 border border-[var(--color-border)] text-[var(--color-secondary)] font-medium rounded-lg hover:border-[var(--color-custom)] hover:text-[var(--color-custom)] transition-colors"
                  >
                    Cancel
                  </button>
                  <button className="px-6 py-3 border border-red-500/30 text-red-500 font-medium rounded-lg hover:bg-red-500/10 transition-colors ml-auto">
                    Log Out
                  </button>
                </div>
              </div>
            )}

            {/* Таб: Профиль (по умолчанию) */}
            {activeTab === 'profile' && (
              <div className="bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-xl p-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[var(--color-def)]">Profile Overview</h2>
                  <p className="text-[var(--color-secondary)] mt-2">View and manage your personal information</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-def)] mb-4">Account Details</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-[var(--color-secondary)] mb-1">Full Name</p>
                        <p className="text-[var(--color-def)] font-medium">{userData.name} {userData.lastName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[var(--color-secondary)] mb-1">Email Address</p>
                        <p className="text-[var(--color-def)] font-medium">{userData.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[var(--color-secondary)] mb-1">Phone Number</p>
                        <p className="text-[var(--color-def)] font-medium">{userData.phoneNumber}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[var(--color-secondary)] mb-1">Account Created</p>
                        <p className="text-[var(--color-def)] font-medium">March 15, 2023</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-def)] mb-4">Quick Stats</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-[var(--color-primary)] rounded-lg">
                        <p className="text-sm text-[var(--color-secondary)] mb-1">Basket Items</p>
                        <p className="text-2xl font-bold text-[var(--color-def)]">18</p>
                      </div>
                      <div className="p-4 bg-[var(--color-primary)] rounded-lg">
                        <p className="text-sm text-[var(--color-secondary)] mb-1">Favorite Items</p>
                        <p className="text-2xl font-bold text-[var(--color-def)]">{favoriteProducts.length}</p>
                      </div>
                      <div className="p-4 bg-[var(--color-primary)] rounded-lg">
                        <p className="text-sm text-[var(--color-secondary)] mb-1">Account Status</p>
                        <p className="text-lg font-bold text-[var(--color-custom)]">Active</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                  <button
                    onClick={() => setActiveTab('settings')}
                    className="px-6 py-3 border-2 border-[var(--color-custom)] text-[var(--color-custom)] font-medium rounded-lg hover:bg-[var(--color-custom)] hover:text-white transition-colors"
                  >
                    Edit Profile Information
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
    </section>
  );
};

export default DashboardPage;