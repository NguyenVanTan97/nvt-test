import "./App.css";
import { Layout } from "./layouts";
import BackToTopButton from "./layouts/backToTop";
import { Home } from "./pages/Home";

function App() {
  return (
    <Layout>
      <Home />
      <BackToTopButton />
    </Layout>
  );
}

export default App;
