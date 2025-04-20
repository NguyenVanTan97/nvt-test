import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation("other") as {
    t: (key: string) => string;
  };
  return (
    <footer>
      <div
        className="h-screen lg:h-[400px] xl:h-80 md:w-full bg-cover bg-center relative  "
        style={{
          backgroundImage: `
            url('./images/bg-footer.jpg'),
              linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
              linear-gradient(180deg, rgba(0, 10, 255, 0.5) 0%, rgba(0, 0, 0, 0) 136.61%)
            `,
        }}
      >
        <div className="absolute top-0 bottom-0 right-0 left-0 inset-0 bg-gradient-to-b to-black from-blue-800 opacity-90 px-10 md:px-36 pt-0 md:pt-16 ">
          <div className="grid grid-col-1 md:grid-cols-5 h-full  text-white ">
            <div className="col-span-1 md:col-span-2 flex flex-col justify-center md:justify-start items-center md:items-start">
              <div>
                <img className="h-24" src="./logo.png" alt="" />
              </div>
              <div className="flex gap-4 pt-5">
                <img className="h-11 " src="./icons/ant-x.png" alt="" />
                <img className="h-11 " src="./icons/ant-fb.png" alt="" />
                <img className="h-11 " src="./icons/ant-in.png" alt="" />
              </div>
            </div>
            <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h1 className="font-bold text-2xl">{t("address")}</h1>
                <div className="flex gap-2 pt-6 text-sm">
                  <img className="h-8" src="./icons/location.png" alt="" />
                  <div className="flex flex-col gap-3">
                    <span>{t("dc1")}</span>
                    <span>{t("dc2")}</span>
                  </div>
                </div>
                <div className="flex gap-2 pt-5 text-sm items-center">
                  <img className="h-8" src="./icons/mobile.png" alt="" />
                  <div className="flex flex-col gap-4">
                    <span>{t("phone")}</span>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-2xl">{t("subscribe")}</h1>
                <div className="flex gap-2 pt-6 text-sm">
                  <span>
                  {t("subscribe-p")}
                  </span>
                </div>
                <div className="flex items-center border border-gray-300 rounded-md mt-5">
                  <input
                    type="email"
                    placeholder={t("placeholder")}
                    className="py-3 px-4 w-full focus:outline-none bg-transparent text-white"
                  />
                  <button className=" text-white rounded-r-md px-5 text-xl">
                    <img src="./icons/arrow-right.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-10 bg-black">
        <span className="text-gray-400 text-lg">2017 Copyright. Policy.</span>
      </div>
    </footer>
  );
}
