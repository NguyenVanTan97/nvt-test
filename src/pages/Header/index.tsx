import CountdownTimer from "./dongHo";

export function Header() {
  const now = new Date();
  const targetDate = new Date(
    now.getTime() + (30 * 24 * 60 * 60 + 18 * 60 * 60 + 20 * 60 + 15) * 1000
  );

  return (
    <div className="relative">
      <div className="min-h-screen flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <CountdownTimer targetDate={targetDate} />
      </div>
      <img src="./images/BG_header.png" alt="" className="w-full h-full" />
    </div>
  );
}
