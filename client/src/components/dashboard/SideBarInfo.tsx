import type { SideBarInfoProps } from "@/types/types";
import NeedHelp from "./NeedHelp";
import Tabs from "../ui/Tabs";

const SideBarInfo = ({
  name,
  lastname,
  email,
  phone,
  onChange,
  className,
  isActive,
  tabs
}: SideBarInfoProps) => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-xl p-6 sticky top-6">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-[var(--color-custom)]">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-[var(--color-def)] text-center">
            {name} {lastname}
          </h2>
          <p className="text-[var(--color-secondary)] text-sm mt-1 text-center">
            {email}
          </p>
        </div>

        <div className="space-y-4 mb-6">
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
            <p className="text-[var(--color-def)] font-medium">{phone}</p>
          </div>
        </div>

        <div className={className}>
          <Tabs
            tabs={tabs}
            isActive={isActive}
            onChange={(value) => onChange(value)}
          />
        </div>
        <NeedHelp />
      </div>
    </div>
  );
};

export default SideBarInfo;
