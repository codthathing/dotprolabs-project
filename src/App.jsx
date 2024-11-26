import PageImages from "./components/ui/PageImages";
import Header from "./components/ui/Header";
import LandingSection from "./components/ui/LandingSection";
import AboutSection from "./components/ui/AboutSection";
import FeatureSection from "./components/ui/FeatureSection";
import FaqSection from "./components/ui/FaqSection";
import Footer from "./components/ui/Footer";

const App = () => {
  return (
    <div id="main-app-page">
      <PageImages />
      <Header />
      <LandingSection />
      <AboutSection />
      <FeatureSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default App;
