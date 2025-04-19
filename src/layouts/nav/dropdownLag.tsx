import { useState, useRef, useEffect } from "react";
import i18n from "i18next";

type Language = "en" | "vi";

const LANGUAGES: { code: Language; name: string; flag: string }[] = [
  { code: "vi", name: "Vietnamese", flag: "./icons/vn.png" },
  { code: "en", name: "English", flag: "./icons/en.png" },
];

const LanguageSwitcher = () => {
  const [selected, setSelected] = useState<Language>("en");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-md  md:border-none "
      >
        <img
          className="h-7"
          src={LANGUAGES.find((lang) => lang.code === selected)?.flag}
        />
        <svg
          className={`w-4 h-4 text-gray-700 md:text-white transition-transform duration-500 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 md:right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelected(lang.code);
                setOpen(false);
                i18n.changeLanguage(lang.code);
              }}
              className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100"
            >
              <div className="flex flex-row">
                {selected === lang.code ? (
                  <span className="mr-2">✔</span>
                ) : (
                  <span className="w-[1.2rem] " />
                )}
                <img src={lang.flag} className="h-6 mr-2" />
                <span>{lang.name}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
