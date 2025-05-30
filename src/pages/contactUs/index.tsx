import { useTranslation } from "react-i18next";
import CountdownTimer from "./countdown";

export function Contact() {
  const { t } = useTranslation("contact") as {
    t: (key: string) => string;
  };
  const now = new Date();
  const targetDate = new Date(
    now.getTime() + (30 * 24 * 60 * 60 + 18 * 60 * 60 + 20 * 60 + 15) * 1000
  );

  return (
    <div id="contact">
      <div className="relative">
        <div className="backdrop-blur-sm bg-[radial-gradient(circle,_rgba(168,85,247,0.5)_0%,_rgba(168,85,247,0.4)_15%,_rgba(168,85,247,0.3)_30%,_rgba(168,85,247,0.15)_40%,_rgba(168,85,247,0.03)_50%,_rgba(168,85,247,0)_100%)] flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  gap-y-14  text-white md:p-12 rounded-full  shadow-2xl shadow-white/5 z-10">
          <div className="text-center">
            <div className="font-black text-[40px] md:text-[80px] font-playfair text-center leading-tight px-4 pb-4">
              <span className="block md:inline">{t("title")} </span>
              <span className="block md:inline">{t("title2")}</span>
            </div>
            <CountdownTimer targetDate={targetDate} />
          </div>
          <div className="flex flex-col items-center justify-center text-center w-[350px] md:w-[600px] ">
            <p className="text-xs md:text-lg">{t("content")}</p>
            <div className="flex items-center bg-white text-gray-700 rounded-md mt-5 w-full">
              <input
                type="email"
                placeholder={t("placeholder")}
                className="py-3 px-4 w-full focus:outline-none bg-transparent "
              />
              <button className="  rounded-r-md px-5 ">
                <img src="./icons/arrow-right-black.png" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute md:-bottom-12 md:left-0 md:-translate-x-0 left-1/2 -translate-x-1/2  -bottom-72 h-auto w-[80vw] md:w-[38vw]">
          <img src="./images/ong-tien.png" alt="" />
          <img
            src="./images/bup.png"
            alt=""
            className="h-16 md:h-24 absolute z-20 bottom-14 right-16 xl:right-52 xl:bottom-28  animate-bounce-smooth"
          />
        </div>
        <link
          rel="preload"
          as="image"
          href="./images/BG_header.webp"
          type="image/webp"
        />
        <img
          src="./images/BG_header.webp"
          alt="ảnh bìa"
          className=" md:w-full h-[520px] w-auto object-cover md:h-screen"
          loading="eager"
        />
      </div>
      <div className="block md:hidden h-72"></div>
    </div>
  );
}
