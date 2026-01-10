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
} from '@heroicons/react/24/outline'

export const ADMIN_ROUTE = "/admin";
export const SHOP_ROUTE = "/shop";
export const BASKET_ROUTE = "/basket";
export const DEVICE_ROUTE = "/device";
export const LOGIN_ROUTE = "/login";
export const REGISTRATION_ROUTE = "/registration";
export const DASHBOARD_ROUTE = "/dashboard"
export const HOME_ROUTE = "/";
export const NOT_FOUND_ROUTE = "*"


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
}
];