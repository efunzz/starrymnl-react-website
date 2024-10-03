import { Heading } from "@chakra-ui/react";
import ServiceCard from "./components/ServiceSection";
import Button from "./components/ui/Button";

import "./index.css";
import AboutSection from "./components/AboutSection";
import FaqSection from "./components/FAQsection";
import FooterSection from "./components/FooterSection";
import NavBar from "./components/NavBar";
import SimpleSlider from "./components/ui/ImageCarousell";

function App() {
  return (
    <>
      <NavBar />
      <div className="hero-section flex justify-center items-center">
        <SimpleSlider />
      </div>

      <div
        className="about-section-1"
        style={{ backgroundColor: "rgba(240, 215, 247, 0.18)" }}
      >
        <AboutSection />
      </div>
      <div className="service-section   justify-center items-center text-center mt-20">
        <Heading mb={20}>Services</Heading>
        <ServiceCard />
      </div>
      <div className="faq-section justify-center items-center text-center mt-20">
        <Heading mb={10}>FAQ</Heading>
        <FaqSection />
      </div>
      <div className="footer-section mt-20">
        <FooterSection />
      </div>
    </>
  );
}

export default App;
