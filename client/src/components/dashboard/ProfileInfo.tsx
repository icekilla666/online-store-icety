import type { ProfileInfoProps } from "@/types/types";

const ProfileInfo = ({
  name,
  lastname,
  email,
  number,
  devices,
  role,
  onClick,
  basketCount,
}: ProfileInfoProps) => {
  return (
    <div className="bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-xl p-4 sm:p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[var(--color-def)]">
          Profile Overview
        </h2>
        <p className="text-[var(--color-secondary)] mt-2">
          View and manage your personal information
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-bold text-[var(--color-def)] mb-4">
            Account Details
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-[var(--color-secondary)] mb-1">
                Full Name
              </p>
              <p className="text-[var(--color-def)] font-medium">
                {name} {lastname}
              </p>
            </div>
            <div>
              <p className="text-sm text-[var(--color-secondary)] mb-1">
                Email Address
              </p>
              <p className="text-[var(--color-def)] font-medium">{email}</p>
            </div>
            <div>
              <p className="text-sm text-[var(--color-secondary)] mb-1">
                Phone Number
              </p>
              <p className="text-[var(--color-def)] font-medium">{number}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[var(--color-def)] mb-4">
            Quick Stats
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-[var(--color-primary)] rounded-lg">
              <p className="text-sm text-[var(--color-secondary)] mb-1">
                Basket Items
              </p>
              <p className="text-2xl font-bold text-[var(--color-def)]">{basketCount}</p>
            </div>
            <div className="p-4 bg-[var(--color-primary)] rounded-lg">
              <p className="text-sm text-[var(--color-secondary)] mb-1">
                Favorite Items
              </p>
              <p className="text-2xl font-bold text-[var(--color-def)]">
                {devices.length}
              </p>
            </div>
            <div className="p-4 bg-[var(--color-primary)] rounded-lg">
              <p className="text-sm text-[var(--color-secondary)] mb-1">
                Account Status
              </p>
              <p className="text-lg font-bold text-[var(--color-custom)]">
                {role}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
        <button
          onClick={onClick}
          className="w-full sm:w-auto px-6 py-3 border-2 border-[var(--color-custom)] text-[var(--color-custom)] font-medium rounded-lg hover:bg-[var(--color-custom)] hover:text-white transition-colors"
        >
          Edit Profile Information
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
