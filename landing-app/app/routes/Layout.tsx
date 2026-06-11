import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { Outlet } from "react-router";

export default function LayoutMain() {
  const userTheme = localStorage.getItem("theme");
  return (
    <div
      className={`min-h-screen flex flex-col text-text-main ${userTheme === "dark" ? "dark" : ""}`}
      id="layout"
    >
      <Header></Header>

      <div className="text-lg">
        <main className="max-w-7xl mx-auto 2xl:px-0 px-3 pb-24 pt-12 ">
          <Outlet></Outlet>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}
