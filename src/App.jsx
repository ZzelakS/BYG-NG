import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
// import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./pages/Contact";
import Packages from "./pages/Packages";
import HeroCarousel from "./components/HeroCarousel";
import FlipbookViewer from "./components/MenuViewer"; // ✅ Import your Flipbook viewer

const Home = () => (
  <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroCarousel />
    <HeroSection />
    <FeatureSection />
    <Workflow />
    <Gallery />
    {/* <Pricing /> */}
    <Testimonials />
    <Footer />
  </div>
);

const App = () => {
  const foodMenuUrl = "https://online.fliphtml5.com/gndyj/ryyz/"; // ✅ Your flipbook link

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/food-menu"
          element={<FlipbookViewer flipbookUrl={foodMenuUrl} />} // ✅ New route added
        />
        <Route
          path="*"
          element={<h1 className="text-center mt-10">Page Not Found</h1>}
        />
      </Routes>
    </Router>
  );
};

export default App;
