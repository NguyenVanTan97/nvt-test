import { Header } from "./header";
import Navbar from "./nav";

export function Layout() {
  return (
    <div>
      <Navbar />
      <Header />

      <div className="container mx-auto px-4 py-3 h-56 bg-gray-200"></div>
    </div>
  );
}
