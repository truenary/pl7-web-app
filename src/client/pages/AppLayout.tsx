import { Outlet } from "react-router";
import ResponsiveNavbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { SetStateAction } from "react";
type prop = {
  setIsNp: (value: SetStateAction<boolean>) => void;
  isNp: boolean;
};
export default function AppLayout({ setIsNp, isNp }: prop) {
  return (
    <div className="w-dvw">
      <ResponsiveNavbar setIsNp={setIsNp} isNp={isNp} />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
