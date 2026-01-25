import type { TabProps } from "@/types/types";

const Tabs = ({ ...props }: TabProps) => {
  return props.tabs.map((tab) => (
    <button
      key={tab.value}
      value={tab.value}
      className={`${props.className} ${props.isActive === tab.value ? "active" : ""}`}
      onClick={() => props.onChange(tab.value)}
    >
      {tab.img}
      {tab.name}
    </button>
  ));
};

export default Tabs;