import "./App.css";
import { Layout } from "./layouts";
import BackToTopButton from "./layouts/backToTop";
import { About } from "./pages/about";
import { GameGrid } from "./pages/games";
import { Contact } from "./pages/contactUs";
import PartnerSlider from "./pages/partner";
import { ActionProvider } from "./context";

function App() {
  return (
    <ActionProvider>
      <Layout>
        <Contact />
        <About />
        <GameGrid />
        <PartnerSlider />
        <BackToTopButton />
      </Layout>
    </ActionProvider>
  );
}

export default App;
