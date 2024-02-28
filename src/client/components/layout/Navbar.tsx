import Logo from "../shared/Logo";
import { SetStateAction, useState } from "react";
import { NavItem } from "../shared/NavItem";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
type prop = {
  setIsNp: (value: SetStateAction<boolean>) => void;
  isNp: boolean;
};
export default function ResponsiveNavbar({ setIsNp, isNp }: prop) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const cn = isOpen ? "block" : "hidden";
  const navigate = useNavigate();

  const barIcon = <FontAwesomeIcon icon={faBars} />;
  const cancelIcon = <FontAwesomeIcon icon={faXmark} />;
  const handleChangeLanguage = () => {
    setIsNp(!isNp);
  };
  return (
    <>
      <header className="bg-white sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 ">
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <div
            className="flex flex-row gap-5 items-center lg:ms-20 md:ms-10 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Logo logoTitle={t("Dhoka")} />
          </div>
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-xl block text-blue-900 hover:text-blue-500 focus:text-blue-500 focus:outline-none"
            >
              {isOpen ? cancelIcon : barIcon}
            </button>
          </div>
        </div>
        <nav className={`${cn} md:me-10 text-base sm:flex sm:p-0`}>
          <NavItem text={t("About Us")} to="/about" setIsOpen={setIsOpen} />
          <NavItem
            text={t("Download App")}
            to="/download"
            setIsOpen={setIsOpen}
          />
          <NavItem text={t("Blog")} to="/blog" setIsOpen={setIsOpen} />
          <NavItem text={t("Contact")} to="/contact" setIsOpen={setIsOpen} />
          <button
            onClick={handleChangeLanguage}
            className="bg-orange-500 hover:bg-orange-700 px-3 py-1 rounded"
          >
            {!isNp ? `Nepali` : `${t("English")}`}
          </button>
        </nav>
      </header>
    </>
  );
}
