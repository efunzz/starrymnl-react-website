import { Heading } from "@chakra-ui/react";
import ServiceCard from "./components/ServiceSection";
import Button from "./components/ui/Button";

import "./index.css";

function App() {
  return (
    <>
      <Button width={300} color="#DB8686">
        Get Your Custom Illustration
      </Button>

      <Button width={120} color="#DB8686">
        Get Started
      </Button>

      <div className="service-section">
        <Heading mb={4}>Services</Heading>
        <ServiceCard />
      </div>
    </>
  );
}

export default App;
