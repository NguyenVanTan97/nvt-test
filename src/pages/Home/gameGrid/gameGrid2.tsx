import { GameItem } from "./gameGridItem";

export function GameGrid2({ games }: { games: GameItem[] }) {
  const columns = 4;

  // Chia game vào từng cột
  const columnsArray = Array.from({ length: columns }, () => [] as GameItem[]);

  games.forEach((game, index) => {
    columnsArray[index % columns].push(game);
  });

  return (
    <div className="flex gap-6 px-6 max-w-7xl mx-auto">
      {columnsArray.map((columnGames, colIndex) => (
        <div
          key={colIndex}
          className={`
                flex-1 flex flex-col gap-6
                ${colIndex === 1 ? "mt-10" : ""}
                ${colIndex === 3 ? "mt-10" : ""}
              `}
        >
          {columnGames.map((game, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{game.title}</h2>
                <p className="text-sm text-gray-600">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
