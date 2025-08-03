// Import all the individual components

import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollingBanner from "./components/ScrollingBanner";
import ServicesSection from "./components/ServicesSection";

const MEWUWebsite = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ScrollingBanner />
      <AboutSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default MEWUWebsite;
