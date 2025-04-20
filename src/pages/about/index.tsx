import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation("about") as {
    t: (key: string) => string;
  };
  return (
    <div
      id="about"
      className="flex flex-col gap-6 md:mx-[10%] xl:mx-[15%] mt-14 md:mt-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10    ">
        <div className="px-6">
          <h1 className="md:text-6xl font-black text-5xl font-playfair">
            {t("title")}
          </h1>
          <p className="text-sm mt-8 md:mt-10 text-gray-500">{t("content")}</p>

          <div className="flex flex-row md:flex-col gap-14 md:gap-5 mb-6 md:mb-0 mt-8 md:mt-20">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-[#079BEE]">
                600<span className="text-4xl">M</span>+
              </h1>
              <span className="text-2xl font-bold">{t("user")}</span>
            </div>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-[#079BEE]">
                135+
              </h1>
              <span className="text-2xl font-bold">{t("game")}</span>
            </div>
          </div>
        </div>
        <div className="bg-[#EEEEEE] flex justify-center items-center">
          <div className="flex flex-col gap-4 px-8 md:px-8 lg:px-20 py-20">
            <ItemAbout
              icon="./icons/i-cal.png"
              title={t("hour")}
              content={t("hour-p")}
            />
            <ItemAbout
              icon="./icons/i-des.png"
              title={t("design")}
              content={t("design-p")}
            />
            <ItemAbout
              icon="./icons/i-team.png"
              title={t("team")}
              content={t("team-p")}
            />
          </div>
        </div>
      </div>

      <div className="relative h-72 md:h-[500px] flex justify-center items-end mt-10">
        <img
          src="./images/co-tien.png"
          alt="co tien"
          className="h-[50%] w-auto absolute left-1/2 top-0 -translate-x-1/2 animate-wiggle"
        />
        <img
          src="./images/map.png"
          alt="map"
          className="h-[62%] md:h-[65%] w-auto"
        />
      </div>
    </div>
  );
}

export function ItemAbout({
  icon,
  title,
  content,
}: {
  icon: string;
  title: string;
  content: string;
}) {
  return (
    <div className="flex gap-6">
      <img className="h-12" src={icon} alt={title} />
      <div>
        <h1 className=" font-bold text-2xl">{title}</h1>
        <p className="text-sm mt-2 text-gray-500">{content}</p>
      </div>
    </div>
  );
}
