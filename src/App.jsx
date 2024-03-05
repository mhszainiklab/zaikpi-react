import CoreFeature from "./components/CoreFeature";
import Features from "./components/Features";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import PageFeature from "./components/PageFeature";
import Pricing from "./components/Pricing";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Features />
      <CoreFeature />
      <PageFeature />
      <WhyChooseUs />
      <Pricing />
    </>
  );
}

export default App;
