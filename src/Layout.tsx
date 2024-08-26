import { Outlet } from "react-router-dom";
import FirstSection from "./components/FirstSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
      <FirstSection />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
