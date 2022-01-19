import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

export const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About Us", href: "/about", current: false },
  { name: "Academics", href: "/academics", current: false },
  { name: "Students", href: "/students", current: false },
  { name: "Parents", href: "/parents", current: false },
  { name: "Stuff", href: "/stuff", current: false },
  { name: "Contact", href: "/contact", current: false },
];

export const features = [
  {
    name: "Program One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat lectus vitae lectus sollicitudin, dapibus consectetur diam dapibus. Nulla in ante sed ex convallis dignissim nec aliquam nisl.",
  },
  {
    name: "Program Two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat lectus vitae lectus sollicitudin, dapibus consectetur diam dapibus.",
  },
  {
    name: "Program Three",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat lectus vitae lectus sollicitudin, dapibus consectetur diam dapibus.",
  },
  {
    name: "Program Four",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat lectus vitae lectus sollicitudin, dapibus consectetur diam dapibus.",
  },
  {
    name: "Program Five",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat lectus vitae lectus sollicitudin, dapibus consectetur diam dapibus.",
  },
  {
    name: "Program Six",
    description:
      "Lorem ipsum dolor sit, consectetur adipiscing elit. Ut volutpat lectus vitae lectus sollicitudin, dapibus consectetur diam dapibus.",
  },
];

export function Copyright() {
  return (
    <div className="text-center p-6 bg-gray-900">
      <span>Copyright © Life School </span>
      <a className="text-gray-400 font-semibold" href="https://lifeschool.com/">
        {new Date().getFullYear()}
      </a>
    </div>
  );
}

export const about = [
  {
    name: "Global Curriculum",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    name: "No hidden fees",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
  },
  {
    name: "Qualified Teachers",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon,
  },
  {
    name: "Safe Environment",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: AnnotationIcon,
  },
];

export const academics = [
  {
    name: "Topic One",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    name: "Topic Two",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
  },
  {
    name: "Topic Three",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon,
  },
  {
    name: "Topic Four",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: AnnotationIcon,
  },
];

export const students = [
  {
    id: 1,
    name: "Jane Doe",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    imageAlt: "Jane Doe",
    price: "Basic 6",
    color: "Ghanaian",
  },
  {
    id: 2,
    name: "Jane Doe",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80",
    imageAlt: "Jane Doe",
    price: "Basic 6",
    color: "Ghanaian",
  },
  {
    id: 3,
    name: "Jane Doe",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    imageAlt: "Jane Doe",
    price: "Basic 6",
    color: "Ghanaian",
  },
  {
    id: 4,
    name: "Jane Doe",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    imageAlt: "Jane Doe",
    price: "Basic 6",
    color: "Ghanaian",
  },
  {
    id: 5,
    name: "Jane Doe",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1864&q=80",
    imageAlt: "Jane Doe",
    price: "Basic 6",
    color: "Ghanaian",
  },
  {
    id: 6,
    name: "Jane Doe",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    imageAlt: "Jane Doe",
    price: "Basic 6",
    color: "Ghanaian",
  },
];

export const parents = [
  {
    id: 1,
    name: "Jane Doe",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    imageAlt: "Jane Doe",
    price: "Mother of Jane Done",
    color: "Ghanaian",
  },
  {
    id: 2,
    name: "Jane Doe",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80",
    imageAlt: "Jane Doe",
    price: "Mother of Jane Done",
    color: "Ghanaian",
  },
  {
    id: 3,
    name: "Jane Doe",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    imageAlt: "Jane Doe",
    price: "Mother of Jane Done",
    color: "Ghanaian",
  },
  {
    id: 4,
    name: "Jane Doe",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    imageAlt: "Jane Doe",
    price: "Mother of Jane Done",
    color: "Ghanaian",
  },
  {
    id: 5,
    name: "Jane Doe",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1864&q=80",
    imageAlt: "Jane Doe",
    price: "Mother of Jane Done",
    color: "Ghanaian",
  },
  {
    id: 6,
    name: "Jane Doe",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    imageAlt: "Jane Doe",
    price: "Mother of Jane Done",
    color: "Ghanaian",
  },
];

export const stuff = [
  {
    id: 1,
    name: "Jane Doe",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    imageAlt: "Jane Doe",
    price: "Mother of Jane Done",
    color: "Ghanaian",
  },
  {
    id: 2,
    name: "Jane Doe",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80",
    imageAlt: "Jane Doe",
    price: "Basic 6",
    color: "Ghanaian",
  },
  {
    id: 3,
    name: "Jane Doe",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    imageAlt: "Jane Doe",
    price: "Basic 6",
    color: "Ghanaian",
  },
  {
    id: 4,
    name: "Jane Doe",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    imageAlt: "Jane Doe",
    price: "Basic 6",
    color: "Ghanaian",
  },
  {
    id: 5,
    name: "Jane Doe",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1864&q=80",
    imageAlt: "Jane Doe",
    price: "Basic 6",
    color: "Ghanaian",
  },
  {
    id: 6,
    name: "Jane Doe",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    imageAlt: "Jane Doe",
    price: "Basic 6",
    color: "Ghanaian",
  },
];
