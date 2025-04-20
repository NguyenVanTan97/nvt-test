import { useEffect, useState } from "react";
import { useActionProvider } from "../../context";

const BackToTopButton = () => {
  const { isOpenNavMobile } = useActionProvider();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white shadow-lg
        transition-opacity duration-300 ease-in-out
        ${
          isVisible && !isOpenNavMobile
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }
        hover:bg-gray-100
      `}
      aria-label="Back to top"
    >
      <svg
        className="w-6 h-6 transform rotate-180"
        fill="none"
        stroke="black"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
};

export default BackToTopButton;
