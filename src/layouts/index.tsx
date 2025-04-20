import { PropsWithChildren } from "react";
import { Footer } from "./footer";
import { Contact } from "../pages/contactUs";
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
