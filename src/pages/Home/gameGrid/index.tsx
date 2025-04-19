import { GameGrid2 } from "./gameGrid2";
import { GameGridItem, GameItem } from "./gameGridItem";

export function GameGrid() {
  const games: GameItem[] = [
    {
      title: "Game 1",
      image: "./images/gridGame/1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum totam nihil consectetur quibusdam",
    },
    {
      title: "Game 2",
      image: "./images/gridGame/2.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum totam nihil consectetur quibusdam",
    },
    {
      title: "Game 3",
      image: "./images/gridGame/3.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum totam nihil consectetur quibusdam",
    },
    {
      title: "Game 4",
      image: "./images/gridGame/4.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum totam nihil consectetur quibusdam",
    },
    {
      title: "Game 5",
      image: "./images/gridGame/5.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum totam nihil consectetur quibusdam",
    },
    {
      title: "Game 6",
      image: "./images/gridGame/6.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum totam nihil consectetur quibusdam",
    },
    {
      title: "Game 7",
      image: "./images/gridGame/7.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum totam nihil consectetur quibusdam",
    },
    {
      title: "Game 8",
      image: "./images/gridGame/8.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum totam nihil consectetur quibusdam",
    },
    {
      title: "Game 9",
      image: "./images/gridGame/9.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum totam nihil consectetur quibusdam",
    },
    {
      title: "Game 10",
      image: "./images/gridGame/10.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum totam nihil consectetur quibusdam",
    },
    {
      title: "Game 11",
      image: "./images/gridGame/11.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum totam nihil consectetur quibusdam",
    },
    {
      title: "Game 12",
      image: "./images/gridGame/12.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum totam nihil consectetur quibusdam",
    },
  ];
  const columns = 4;

  // Chia game vào từng cột
  const columnsArray = Array.from({ length: columns }, () => [] as GameItem[]);

  games.forEach((game, index) => {
    columnsArray[index % columns].push(game);
  });

  return <GameGrid2 games={games} />;
}
