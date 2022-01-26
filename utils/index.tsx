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
    name: "Primary Years",
    description:
      "Life School Ghana offers Primary Years Program from Nursery through Year 6. The programme  focuses  on developing children to be inquirers in the classroom and in the outside world.",
  },
  {
    name: "Twi Lessons for Adults",
    description:
      " Life School Ghana offers Twi lessons for adults with little or no Twi experience and young beginners. The programme  focuses  on conversational skills. Lessons are organized in a very interactive way and students are engaged with activities such as simple Twi songs and stories.",
  },
  {
    name: "ENglish Lessons For Adults",
    description:
      "Life School Ghana offers English lessons for adults with little or no English experience and young beginners. The programme  focuses  on conversational skills. Lessons are organized in a very interactive way and students are engaged with activities such as simple English songs and stories. ",
  },
];

export function Copyright() {
  return (
    <div className="text-center p-6 bg-gray-900">
      <span>Copyright © Life School Ghana </span>
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
      "Life School Ghana adopts a balanced and broad deep subject learning based on Ghana and UK curriculums but transcends their traditional boundaries.",
    icon: GlobeAltIcon,
  },
  {
    name: "No hidden fees",
    description:
      "Registration and tuition fee is a one time non refundable which must be paid in full in full at the time of admission.",
    icon: ScaleIcon,
  },
];

export const academics = [
  {
    name: "Primary Years",
    description:
      "Life School Ghana offers Primary Years Program from Nursery through Year 6. The programme  focuses  on developing children to be inquirers in the classroom and in the outside world. ",
    icon: GlobeAltIcon,
  },
  {
    name: "Twi Lessons For Adults",
    description:
      "Life School Ghana offers Twi lessons for adults with little or no Twi experience and young beginners. The programme  focuses  on conversational skills. Lessons are organized in a very interactive way and students are engaged with activities such as simple Twi songs and stories. ",
    icon: ScaleIcon,
  },
  {
    name: "English Lessons For Adults",
    description:
      "Life School Ghana offers English lessons for adults with little or no English experience and young beginners. The programme  focuses  on conversational skills. Lessons are organized in a very interactive way and students are engaged with activities such as simple English songs and stories. ",
    icon: LightningBoltIcon,
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
