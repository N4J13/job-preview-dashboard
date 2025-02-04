import { BriefCaseIcon, MessageIcon, PaymentIcon } from "@/components/icons";

type NavList = {
  title: string;
  icon: JSX.Element;
  href: string;
};

export const navList: NavList[] = [
  {
    title: "Jobs",
    icon: <BriefCaseIcon />,
    href: "/",
  },
  {
    title: "Messages",
    icon: <MessageIcon />,
    href: "/messages",
  },
  {
    title: "Payments",
    icon: <PaymentIcon />,
    href: "/payments",
  },
];
