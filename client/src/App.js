import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import Images from "./components/Images";
import HomePage from "./links/HomePage";
import GeneratorPage from "./links/GeneratorPage";
import PricingPage from "./links/PricingPage";
import BlogPage from "./links/BlogPage";
import AboutPage from "./links/AboutPage";
import FeaturesPage from "./links/FeaturesPage";
import Collection2023Page from "./links/CollectionPage";
import CareerPage from "./links/CareerPage";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/generator" element={<GeneratorPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/collection-2023" element={<Collection2023Page />} />
          <Route path="/career" element={<CareerPage />} />
        </Routes>
        <Section />
        <Images />
      </div>
    </Router>
  );
};

export default App;
