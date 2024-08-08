import ExploreSection from "./components/ExploreSection";
import FirstSection from "./components/FirstSection";
import Navbar from "./components/Navbar";
import Partnership from "./components/Partnership";
import Slider from "./components/Slider";
import Work from "./components/Work";

const App = () => {
  return (
    <div>
      <FirstSection />
      <Navbar />
      <Slider />
      <ExploreSection />
      <Work />
      <Partnership />
    </div>
  );
};

export default App;
