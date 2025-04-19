import { GameGridComponent } from "./gameGrid";
export interface GameItem {
  title: string;
  image: string;
  description: string;
}

export function GameGrid() {
  const games: GameItem[] = [
    {
      title: "E-Space",
      image: "./images/gridGame/1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum",
    },
    {
      title: "Kingland",
      image: "./images/gridGame/2.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum",
    },
    {
      title: "The Last Game",
      image: "./images/gridGame/3.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum",
    },
    {
      title: "G-Dragon",
      image: "./images/gridGame/4.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum",
    },
    {
      title: "Pirates",
      image: "./images/gridGame/5.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum",
    },
    {
      title: "Witch Party",
      image: "./images/gridGame/6.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum",
    },
    {
      title: "Rocky",
      image: "./images/gridGame/7.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum",
    },
    {
      title: "Blue Fire",
      image: "./images/gridGame/8.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum",
    },
    {
      title: "Magic tree",
      image: "./images/gridGame/9.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum",
    },
    {
      title: "Aborigines",
      image: "./images/gridGame/10.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum",
    },
    {
      title: "Cinderella",
      image: "./images/gridGame/11.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum",
    },
    {
      title: "Egypt Game",
      image: "./images/gridGame/12.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inobcaecati praesentium porro quasi voluptates nostrum earum",
    },
  ];

  return <GameGridComponent games={games} />;
}
