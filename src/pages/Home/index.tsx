import { GameGrid } from "./gameGrid";
import { Header } from "./header";
import PartnerSlider from "./partner";

export function Home() {
  return (
    <div>
      <Header />

      <GameGrid />
      <PartnerSlider />
    </div>
  );
}
