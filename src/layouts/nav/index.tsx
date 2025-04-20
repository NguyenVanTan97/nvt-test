import { useEffect, useState } from "react";
import LanguageSwitcher from "./dropdownLag";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const { t } = useTranslation("nav") as {
    t: (key: string) => string;
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollClass, setIsScrollClass] = useState<string>("");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollClass(
        window.scrollY > 300 ? " shadow-md bg-slate-800/40" : ""
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={
        `fixed top-0 left-0 right-0 z-50 transition-all duration-500  ` +
        isScrollClass
      }
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between ">
        <div>
          <img className="h-8 md:h-12" src="./logo.png" alt="logo" />
        </div>

        <div className="items-center cursor-pointer hidden md:flex">
          <nav className="text-sm space-x-8 uppercase pr-8 text-white">
            <a
              href="#about"
              className="font-bold hover:text-purple-500 transition-colors duration-300 hover:brightness-125"
            >
              {t("about")}
            </a>
            <a
              href="#game"
              className="font-bold hover:text-purple-500 transition-colors duration-300 hover:brightness-125"
            >
              {t("game")}
            </a>
            <a
              href="#partner"
              className="font-bold hover:text-purple-500 transition-colors duration-300 hover:brightness-125"
            >
              {t("partners")}
            </a>
            <a
              href="#contact"
              className="font-bold hover:text-purple-500 transition-colors duration-300 hover:brightness-125"
            >
              {t("contact")}
            </a>
          </nav>

          <LanguageSwitcher />
        </div>

        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out absolute top-0 left-0 shadow-sm right-0 z-50 h-32 bg-white ${
          isOpen ? "h-screen opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="px-3 pt-2 space-y-2">
          <div className="flex items-center justify-between mx-4 mt-3">
            <LanguageSwitcher />

            <button
              className="md:hidden focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            className="flex flex-col justify-center items-center font-bold text-sm uppercase"
            onClick={toggleMenu}
          >
            <a
              href="#about"
              className="block text-gray-700 p-5 border-b border-gray-200 w-full text-center"
            >
              {t("about")}
            </a>
            <a
              href="#game"
              className="block text-gray-700 p-5 border-b border-gray-200 w-full text-center"
            >
              {t("game")}
            </a>
            <a
              href="#partner"
              className="block text-gray-700 p-5 border-b border-gray-200 w-full text-center"
            >
              {t("partners")}
            </a>
            <a
              href="#contact"
              className="block text-gray-700 p-5 w-full text-center"
            >
              {t("contact")}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
