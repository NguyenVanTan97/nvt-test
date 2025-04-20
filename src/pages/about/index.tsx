export function About() {
  return (
    <div id="about" className="flex flex-col gap-6 md:mx-[10%] xl:mx-[15%] mt-14 md:mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10    ">
        <div className="px-6">
          <h1 className="md:text-6xl font-black text-5xl font-playfair">About us </h1>
          <p className="text-sm mt-8 md:mt-10 text-gray-500">
            Browse our selection of free online games and have a great time
            without leaving the site! Our Kids Games option also includes game
            reviews, extensive game cheats and walkthroughs, and much more. We
            have exclusive free downloads, videos, and articles as well. Etech
            reviews the most popular kids games from all the most popular video
            gaming platforms, so you don’t need to search around for fun
            anywhere else on the Internet. Explore a whole new world of gaming
            on Etech.
          </p>

          <div className="flex flex-row md:flex-col gap-14 md:gap-5 mb-6 md:mb-0 mt-8 md:mt-20">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-[#079BEE]">
                600<span className="text-4xl">M</span>+
              </h1>
              <span className="text-2xl font-bold">Uers</span>
            </div>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-[#079BEE]">
                135+
              </h1>
              <span className="text-2xl font-bold">Games</span>
            </div>
          </div>
        </div>
        <div className="bg-[#EEEEEE] flex justify-center items-center">
          <div className="flex flex-col gap-4 px-8 md:px-16 lg:px-20 py-20">
            <ItemAbout
              icon="./icons/i-cal.png"
              title="24 - Hour"
              content="24/7 access ensures operators' businesses runs smoothly all year long."
            />
            <ItemAbout
              icon="./icons/i-des.png"
              title="Design"
              content="Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay."
            />
            <ItemAbout
              icon="./icons/i-team.png"
              title="Team"
              content="Etech is an award-winning, international studio of designers, artists, animators and producers that create content for the biggest names in film and video games. "
            />
          </div>
        </div>
      </div>

      <div className="relative h-72 md:h-[500px] flex justify-center items-end mt-10">
        <img src="./images/co-tien.png" alt="co tien" className="h-[50%] w-auto absolute left-1/2 top-0 -translate-x-1/2 animate-wiggle" />
        <img src="./images/map.png" alt="map" className="h-[62%] md:h-[65%] w-auto" />
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
