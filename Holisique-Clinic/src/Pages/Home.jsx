import Navbar from "../Components/Navbar.jsx";
import HeroSection from "../HomePage/HeroSection.jsx";
import AboutSection from "../HomePage/AboutSection.jsx";
import ServiceSection from "../HomePage/ServiceSection.jsx";
import ChooseUsSection from "../HomePage/ChooseUsSection.jsx";
import ProcessSection from "../HomePage/ProcessSection.jsx";
import CustomerSection from "../HomePage/CustomerSection.jsx";
import BlogSection from "../HomePage/BlogSection.jsx";
import FollowSection from "../HomePage/FollowSection.jsx";
import OffersSection from "../HomePage/OffersSection.jsx";
import Footer from "../Components/Footer.jsx";


const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ChooseUsSection />
      <ProcessSection />
      <CustomerSection />
      <BlogSection />
      <FollowSection />
      <OffersSection />
      <Footer />
    </>
  );
};

export default Home;
