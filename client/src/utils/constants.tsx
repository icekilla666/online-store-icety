import type { TabArrayProps } from "@/types/types";

import {
  DevicePhoneMobileIcon,
  TvIcon,
  ComputerDesktopIcon,
  BoltIcon,
  MusicalNoteIcon,
  DeviceTabletIcon,
  ClockIcon,
  CameraIcon,
  HomeModernIcon,
  CircleStackIcon,
  WifiIcon,
  Squares2X2Icon,
  InformationCircleIcon,
  HeartIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export const ADMIN_ROUTE = "/admin";
export const SHOP_ROUTE = "/shop";
export const BASKET_ROUTE = "/basket";
export const DEVICE_ROUTE = "/device";
export const LOGIN_ROUTE = "/login";
export const REGISTRATION_ROUTE = "/registration";
export const DASHBOARD_ROUTE = "/dashboard";
export const HOME_ROUTE = "/";
export const NOT_FOUND_ROUTE = "*";

export const products = [
  {
    name: "Smartphones",
    description: "Latest models with advanced cameras and performance",
    href: "/category/smartphones",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "TV & Monitors",
    description: "4K/8K displays with smart features",
    href: "/category/tv",
    icon: TvIcon,
  },
  {
    name: "Laptops & PCs",
    description: "For work, gaming, and creativity",
    href: "/category/laptops",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Accessories",
    description: "Cases, chargers, and essential extras",
    href: "/category/accessories",
    icon: BoltIcon,
  },
  {
    name: "Headphones & Audio",
    description: "Immersive sound quality",
    href: "/category/headphones",
    icon: MusicalNoteIcon,
  },
  {
    name: "Gaming Consoles",
    description: "Next-gen gaming experiences",
    href: "/category/consoles",
    icon: Squares2X2Icon,
  },
  {
    name: "Tablets",
    description: "Portable power for entertainment",
    href: "/category/tablets",
    icon: DeviceTabletIcon,
  },
  {
    name: "Smart Watches",
    description: "Fitness tracking and notifications",
    href: "/category/wearables",
    icon: ClockIcon,
  },
  {
    name: "Cameras",
    description: "Capture moments in high quality",
    href: "/category/cameras",
    icon: CameraIcon,
  },
  {
    name: "Smart Home",
    description: "Automate your living space",
    href: "/category/smart-home",
    icon: HomeModernIcon,
  },
  {
    name: "Storage",
    description: "SSDs, hard drives, and USB drives",
    href: "/category/storage",
    icon: CircleStackIcon,
  },
  {
    name: "Networking",
    description: "Routers and connectivity solutions",
    href: "/category/networking",
    icon: WifiIcon,
  },
];

export const options = [
  { value: "no", label: "no" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "date-newest", label: "Newest First" },
  { value: "date-oldest", label: "Oldest First" },
];

export const device = {
  id: 1,
  name: "Realme 10 Pro",
  shortDesc:
    "Desctiption of Realme 10 Pro. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi explicabo quas iure minima eos voluptatem reiciendis perferendis, optio consectetur deleniti aspernatur molestiae dignissimos veritatis aliquid consequatur mollitia vitae esse natus?",
  price: 20000,
  rating: 5,
  img: "/test.png",
  images: ["/1.png", "/2.png", "/3.png"],
};

export const deviceInfo = [
  {
    id: 1,
    title: "Display",
    description:
      "6.7-inch Super Retina XDR OLED with ProMotion, 120Hz refresh rate, 2796x1290 pixels resolution, HDR10, Dolby Vision, 2000 nits peak brightness",
  },
  {
    id: 2,
    title: "Processor",
    description:
      "Apple A17 Pro chip, 6-core CPU, 6-core GPU, 16-core Neural Engine, 3nm technology",
  },
  {
    id: 3,
    title: "Camera System",
    description:
      "Triple 48MP main + 12MP ultra-wide + 12MP telephoto with 5x optical zoom, Photonic Engine, Night mode, ProRAW, 4K Dolby Vision HDR recording at 60fps",
  },
  {
    id: 4,
    title: "Battery & Charging",
    description:
      "4400mAh lithium-ion battery, up to 29 hours video playback, 20W fast charging, 15W MagSafe wireless charging, 7.5W Qi wireless charging",
  },
  {
    id: 5,
    title: "Storage & Memory",
    description:
      "8GB RAM, options: 128GB / 256GB / 512GB / 1TB NVMe storage, NVMe protocol for faster data transfer",
  },
];

// Табы
export const DEVICE_PAGE_TABS: TabArrayProps[] = [
  {
    value: "buy",
    name: "Buy now",
  },
  {
    value: "specifications",
    name: "Specifications",
  },
];
export const DASHBOARD_TABS: TabArrayProps[] = [
  {
    value: "profile",
    name: "Profile Information",
    img: <InformationCircleIcon width={34} height={34}/>,
  },
  {
    value: "wishlist",
    name: "Favourite Products",
    img: <HeartIcon width={34} height={34}/>,
  },
  {
    value: "settings",
    name: "Account Settings",
    img: <Cog6ToothIcon width={34} height={34}/>,
  },
];
