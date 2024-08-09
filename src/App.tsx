import ExploreSection from "./components/ExploreSection";
import FirstSection from "./components/FirstSection";
import Navbar from "./components/Navbar";
import Partnership from "./components/Partnership";
import Slider from "./components/Slider";
import Work from "./components/Work";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <div>
      <FirstSection />
      <Navbar />
      <Slider />
      <ExploreSection />
      <Work />
      <Partnership />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
