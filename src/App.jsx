import { Heading } from "@chakra-ui/react";
import ServiceCard from "./components/ServiceSection";
import Button from "./components/ui/Button";

import "./index.css";
import AboutSection from "./components/AboutSection";
import FaqSection from "./components/FAQsection";

function App() {
  return (
    <>
      <Button width={300} color="#DB8686">
        Get Your Custom Illustration
      </Button>

      <Button width={120} color="#DB8686">
        Get Started
      </Button>
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
    </>
  );
}

export default App;
