import { NavLink, useLocation } from "react-router-dom";

type navLinkProp = {
  to: string;
  text: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export function NavItem({ to, text, setIsOpen }: navLinkProp) {
  const { pathname } = useLocation();
  const activeClassName =
    pathname === to ? "text-orange-600" : "text-black hover:text-orange-600";
  return (
    <NavLink
      onClick={() => setIsOpen(false)}
      to={to}
      className={`${activeClassName}  mt-1 block px-2 py-1  font-semibold sm:mt-0 sm:ml-2`}
    >
      {text}
    </NavLink>
  );
}
