import { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";

type navLinkProp = {
  to: string;
  text: string;
  icon: ReactNode;
};
export default function NavItem({ to, text, icon }: navLinkProp) {
  const { pathname } = useLocation();
  const activeLinkClass =
    pathname === `/admin/${to}`
      ? "bg-green-500 text-white shadow-md shadow-gray-300"
      : pathname === to
      ? "bg-green-500 text-white shadow-md shadow-gray-300"
      : "";
  return (
    <NavLink
      to={to}
      className={`${activeLinkClass} hover:bg-green-500 hover:text-white hover:shadow-sm hover:shadow-gray-300  rounded-md py-2 w-48  cursor-pointer px-6 text-justify `}
    >
      <span className="me-5">{icon}</span>
      {text}
    </NavLink>
  );
}
