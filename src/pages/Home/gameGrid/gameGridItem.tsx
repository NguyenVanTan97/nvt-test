import React from "react";

export interface GameItem {
  title: string;
  image: string;
  description: string;
}

export function GameGridItem({ items }: { items: GameItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-40">
      {items.map((item, index) => {
        const isDesktop = "md:mt-12";
        const isMobile = "mt-6 md:mt-0";

        const marginTopClass =
          index % 2 === 1 || index % 4 === 1
            ? isDesktop
            : index % 2 === 1
            ? isMobile
            : "";

        return (
          <div
            key={index}
            className={`${marginTopClass} bg-white rounded-xl shadow-lg overflow-hidden `}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{index}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
