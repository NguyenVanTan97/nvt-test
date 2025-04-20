import { useTranslation } from "react-i18next";
import { GameItem } from ".";

export function GameGridComponent({ games }: { games: GameItem[] }) {
  const { t } = useTranslation("game") as {
    t: (key: string) => string;
  };
  // Chia thành 4 cột cho desktop
  const columnCount = 4;
  const desktopCols = Array.from(
    { length: columnCount },
    () => [] as GameItem[]
  );

  games.forEach((game, index) => {
    desktopCols[index % columnCount].push(game);
  });

  // Chia thành 2 cột cho mobile
  const mobileCols = [games.slice(0, 6), games.slice(6)];

  return (
    <div id="game" className=" px-4 max-w-7xl mx-auto py-14">
      <div className="flex flex-col justify-center items-center pb-10 gap-4 px-6 md:px-32">
        <h1 className="md:text-6xl font-black text-5xl font-playfair">
          {t("title")}
        </h1>
        <span className="text-center text-sm text-gray-500">
          {t("content")}
        </span>
      </div>
      <div className="flex ">
        {/* MOBILE: 2 CỘT */}
        <div className="flex flex-row gap-4 w-full lg:hidden">
          {mobileCols.map((col, colIndex) => (
            <div
              key={colIndex}
              className={`flex-1 flex flex-col gap-6 ${
                colIndex === 1 ? "mt-10" : ""
              }`}
            >
              {col.map((game, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md overflow-hidden relative"
                >
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 absolute bottom-0 text-white bg-gradient-to-t from-purple-500/10 via-gray-500/10  to-gray-500/5">
                    <h2 className="text-lg font-semibold mb-2">{game.title}</h2>
                    <p className="text-[10px] ">{game.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* DESKTOP: 4 CỘT */}
        <div className="hidden lg:flex flex-row gap-6 w-full">
          {desktopCols.map((col, colIndex) => (
            <div
              key={colIndex}
              className={`flex-1 flex flex-col gap-6
             ${colIndex === 1 || colIndex === 3 ? "mt-14" : ""}
           `}
            >
              {col.map((game, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md overflow-hidden relative"
                >
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                  <div className="p-8 absolute bottom-0 text-white bg-gradient-to-t from-purple-500/10 via-gray-500/10  to-gray-500/5">
                    <h2 className="text-2xl md:text-4xl font-semibold mb-2">
                      {game.title}
                    </h2>
                    <p className="text-xs md:text-sm ">{game.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
