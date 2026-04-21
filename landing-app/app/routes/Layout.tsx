import Header from "~/components/Header";
import Index from "./Index";
import Footer from "~/components/Footer";
import { Outlet } from "react-router";

export default function LayoutMain() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
