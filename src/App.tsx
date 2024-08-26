import ExploreSection from "./components/ExploreSection";
import Partnership from "./components/Partnership";
import Slider from "./components/Slider";
import Work from "./components/Work";
import ContactUs from "./components/ContactUs";
import Services from "./components/ServicesNew";

const App = () => {
  return (
    <>
      <Slider />
      <ExploreSection />
      <Services />
      <Work />
      <Partnership />
      <ContactUs />
    </>
  );
};

export default App;
