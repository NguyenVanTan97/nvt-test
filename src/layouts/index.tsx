import { Footer } from "./footer";
import { Header } from "./header";
import Navbar from "./nav";

export function Layout() {
  return (
    <div>
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}
