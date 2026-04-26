import Header from "~/components/Header";
import Index from "./Index";
import Footer from "~/components/Footer";
import { Outlet } from "react-router";

export default function LayoutMain() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>

      <div className="bg-white text-text-main text-lg">
        <main className="max-w-7xl mx-auto md:px-6 px-3 pb-24 md:pt-24 pt-12 ">
          <Outlet></Outlet>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}
