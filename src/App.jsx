import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import ServiceCard from "./components/ServiceSection";
import Button from "./components/ui/Button";

import "./index.css";
import AboutSection from "./components/AboutSection";
import FaqSection from "./components/FAQsection";
import FooterSection from "./components/FooterSection";
import NavBar from "./components/NavBar";
import SimpleSlider from "./components/ui/ImageCarousell";
import Form1 from "./components/FormSection";

function App() {
  return (
    <>
      <NavBar />
      <div className="hero-section justify-center items-center text-center">
        <Heading mb={20} color={"pink"}>
          Starrymnl
        </Heading>
        <div className="slider flex justify-center">
          <SimpleSlider />
        </div>
        <Text color="#888888" mb={10} mt={20}>
          MEMORIES TO ILLUSTRATION
        </Text>

        <Button
          width={250}
          color={"pink"}
          children={"Get Your Custom Illustration"}
          mb={10}
        />
      </div>

      <div
        className="about-section-1 pt-20 pb-10 mt-20"
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
      <Form1 />
    </>
  );
}

export default App;
