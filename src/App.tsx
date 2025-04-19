import "./App.css";
import { Layout } from "./layouts";
import BackToTopButton from "./layouts/backToTop";
import { GameGrid } from "./pages/games";
import { Header } from "./pages/Header/header";
import PartnerSlider from "./pages/Partner/partner";

function App() {
  return (
    <Layout>
      <Header />
      <GameGrid />
      <PartnerSlider />
      <BackToTopButton />
    </Layout>
  );
}

export default App;
