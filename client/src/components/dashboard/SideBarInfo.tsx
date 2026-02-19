import type { SideBarInfoProps } from "@/types/types";
import NeedHelp from "./NeedHelp";
import Tabs from "../ui/Tabs";

const SideBarInfo = ({
  name,
  lastname,
  email,
  number,
  onChange,
  className,
  isActive,
  tabs
}: SideBarInfoProps) => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-xl p-4 sm:p-6 lg:sticky lg:top-6">
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-border rounded-full overflow-hidden mb-4 border-4 border-[var(--color-custom)]">
            <h1>{name?.split('', 1)}</h1>
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
            <p className="text-[var(--color-def)] font-medium">{number}</p>
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
