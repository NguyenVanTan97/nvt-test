export function About() {
  return (
    <div className="flex flex-col gap-6 md:mx-[20%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10    ">
        <div className="px-6">
          <h1 className="md:text-6xl font-bold text-4xl">About us </h1>
          <p className="text-xs md:text-sm mt-6 text-gray-500">
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
              <h1 className="text-4xl md:text-6xl font-bold text-[#079BEE]">
                600<span className="text-3xl">M</span>+
              </h1>
              <span className="text-2xl md:text-3xl font-semibold">Uers</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#079BEE]">
                135+
              </h1>
              <span className="text-2xl md:text-3xl font-semibold">Games</span>
            </div>
          </div>
        </div>
        <div className="bg-[#EEEEEE] flex justify-center items-center">
          <div className="flex flex-col gap-4 px-8 md:px-20 py-20">
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

      <div>image</div>
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
        <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
        <span className="text-xs md:text-sm mt-6 text-gray-500">{content}</span>
      </div>
    </div>
  );
}
