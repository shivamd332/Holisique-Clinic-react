import Navbar from "../Components/Navbar.jsx";
import HeroSection from "../HomePage/HeroSection.jsx";
import Footer from "../Components/Footer.jsx";
import AboutSection from "../HomePage/AboutSection.jsx";
import ServiceSection from "../HomePage/ServiceSection.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <Footer />
    </>
  );
};

export default Home;
