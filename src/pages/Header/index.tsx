import CountdownTimer from "./countdown";

export function Header() {
  const now = new Date();
  const targetDate = new Date(
    now.getTime() + (30 * 24 * 60 * 60 + 18 * 60 * 60 + 20 * 60 + 15) * 1000
  );

  return (
    <div>
      <div className="relative">
        <div className="backdrop-blur-sm bg-[radial-gradient(circle,_rgba(168,85,247,0.5)_0%,_rgba(168,85,247,0.4)_15%,_rgba(168,85,247,0.3)_30%,_rgba(168,85,247,0.15)_40%,_rgba(168,85,247,0.03)_50%,_rgba(168,85,247,0)_100%)] flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  gap-y-14  text-white md:p-12 rounded-full  shadow-2xl shadow-white/5 ">
          <div className="text-center">
            <div className="font-black text-[40px] md:text-[80px] font-playfair text-center leading-tight px-4 pb-4">
              <span className="block md:inline">We're </span>
              <span className="block md:inline">Getting Ready</span>
            </div>
            <CountdownTimer targetDate={targetDate} />
          </div>
          <div className="flex flex-col items-center justify-center text-center w-[350px] md:w-96 ">
            <p className="text-xs md:text-lg]">
              We will back to something amazing. Getting the latest updates
              about our games. Please sign up to our newsletter.
            </p>
            <div className="flex items-center bg-white text-gray-700 rounded-md mt-5 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-3 px-4 w-full focus:outline-none bg-transparent "
              />
              <button className="  rounded-r-md px-5 ">
                <img src="./icons/arrow-right-black.png" alt="" />
              </button>
            </div>
          </div>
        </div>
        <img
          src="./images/ong-tien.png"
          alt=""
          className="absolute md:-bottom-10 md:left-0 md:-translate-x-0 left-1/2 -translate-x-1/3  -bottom-72 "
        />
        <img
          src="./images/BG_header.png"
          alt=""
          className=" md:w-full h-[520px] w-auto object-cover md:h-screen"
        />
      </div>
      <div className="block md:hidden h-64"></div>
    </div>
  );
}
