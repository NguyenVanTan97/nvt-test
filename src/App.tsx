import "./App.css";
import { Layout } from "./layouts";
import BackToTopButton from "./layouts/backToTop";
import { About } from "./pages/about";
import { GameGrid } from "./pages/games";
import { Header } from "./pages/header";
import PartnerSlider from "./pages/partner";

function App() {
  return (
    <Layout>
      <Header />
      <About />
      <GameGrid />
      <PartnerSlider />
      <BackToTopButton />
    </Layout>
  );
}

export default App;
