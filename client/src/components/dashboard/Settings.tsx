import type { SettingsProps } from "@/types/types";

const Settings = ({
  name,
  lastname,
  email,
  number,
  onChange,
  onLogout,
  onSave,
}: SettingsProps) => {
  return (
    <div className="bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-xl p-4 sm:p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[var(--color-def)]">
          Account Settings
        </h2>
        <p className="text-[var(--color-secondary)] mt-2">
          Update your personal information
        </p>
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
              value={name ?? ''}
              onChange={onChange}
              className="w-full p-3 bg-[var(--color-primary)] border border-[var(--color-border)] rounded-lg text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)] transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-secondary)] mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              value={lastname ?? ''}
              onChange={onChange}
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
            value={email ?? ''}
            onChange={onChange}
            className="w-full p-3 bg-[var(--color-primary)] border border-[var(--color-border)] rounded-lg text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)] transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-secondary)] mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="number"
            value={number ?? ''}
            onChange={onChange}
            className="w-full p-3 bg-[var(--color-primary)] border border-[var(--color-border)] rounded-lg text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)] transition-colors"
          />
        </div>
      </div>

      {/* Кнопки действий */}
      <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-[var(--color-border)]">
        <button
          onClick={onSave}
          className="px-6 py-3 bg-[var(--color-custom)] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          Save Changes
        </button>

        <button
          className="px-6 py-3 border border-red-500/30 text-red-500 font-medium rounded-lg hover:bg-red-500/10 transition-colors sm:ml-auto"
          onClick={onLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Settings;
