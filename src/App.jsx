import { Heading } from "@chakra-ui/react";
import ServiceCard from "./components/ServiceSection";
import Button from "./components/ui/Button";

import "./index.css";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <>
      <Button width={300} color="#DB8686">
        Get Your Custom Illustration
      </Button>

      <Button width={120} color="#DB8686">
        Get Started
      </Button>
      <div className="about-section-1">
        <AboutSection />
      </div>
      <div className="service-section h-screen  justify-center items-center text-center mt-60">
        <Heading mb={20}>Services</Heading>
        <ServiceCard />
      </div>
    </>
  );
}

export default App;
