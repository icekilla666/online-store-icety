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
  TagIcon,
  BoldIcon,
} from "@heroicons/react/24/outline";

export const ADMIN_ROUTE = "/admin";
export const SHOP_ROUTE = "/shop";
export const BASKET_ROUTE = "/basket";
export const CHECKOUT_ROUTE = "/checkout";
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
    img: <InformationCircleIcon width={34} height={34} />,
  },
  {
    value: "wishlist",
    name: "Favourite Products",
    img: <HeartIcon width={34} height={34} />,
  },
  {
    value: "settings",
    name: "Account Settings",
    img: <Cog6ToothIcon width={34} height={34} />,
  },
];
export const ADMIN_TABS: TabArrayProps[] = [
  {
    value: "dev",
    name: "Devices",
    img: <DevicePhoneMobileIcon width={30} height={30} />,
  },
  {
    value: "type",
    name: "Types",
    img: <TagIcon width={30} height={30} />,
  },
  {
    value: "brand",
    name: "Brands",
    img: <BoldIcon width={30} height={30} />,
  },
];

export const highlights = [
  {
    title: "Premium Selection",
    text: "Only trusted brands and flagship models",
  },
  {
    title: "Fast Delivery",
    text: "Same-day in the city, 2–4 days nationwide",
  },
  {
    title: "Warranty & Support",
    text: "Official warranty and 24/7 service",
  },
  {
    title: "Trade-In",
    text: "Upgrade with value and fewer steps",
  },
];

export const faq = [
  {
    q: "How fast is delivery?",
    a: "Same-day delivery in the city and 2–4 days nationwide, depending on your location.",
  },
  {
    q: "Do you offer official warranty?",
    a: "Yes. All devices come with official manufacturer warranty and Icety support.",
  },
  {
    q: "Can I test devices before buying?",
    a: "Yes, visit our showroom to try the latest models and compare side by side.",
  },
  {
    q: "Is trade-in available?",
    a: "Absolutely. Bring your device and get a valuation toward a new purchase.",
  },
];
