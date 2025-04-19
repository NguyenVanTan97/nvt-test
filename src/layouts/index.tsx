import { PropsWithChildren } from "react";
import { Footer } from "./footer";
import { Header } from "../pages/Header";
import Navbar from "./nav";

export function Layout(props: PropsWithChildren<{}>) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
