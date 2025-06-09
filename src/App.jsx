import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./pages/Contact";
import Packages from "./pages/Packages";
import HeroCarousel from "./components/HeroCarousel";
import FlipbookViewer from "./components/MenuViewer";
import QRScanner from "./components/QRScanner"; // ✅ Added this line

const Home = () => (
  <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroCarousel />
    <HeroSection />
    <FeatureSection />
    <Workflow />
    <Gallery />
    <Testimonials />
    <Footer />
  </div>
);

const App = () => {
  const foodMenuUrl = "https://online.fliphtml5.com/gndyj/ryyz/";

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/food-menu" element={<FlipbookViewer flipbookUrl={foodMenuUrl} />} />
        <Route path="/qrscanner" element={<QRScanner />} /> {/* ✅ Gate Scanner route */}
        <Route path="*" element={<h1 className="text-center mt-10">Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
