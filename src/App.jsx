import Button from "./components/ui/Button";
import "./index.css";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Button width={300} color="#DB8686">
        Get Your Custom Illustration
      </Button>

      <Button width={120} color="#DB8686">
        Get Started
      </Button>
      <Card>
        <CardBody>
          <p>View a summary of all your customers over the last month. </p>
        </CardBody>
      </Card>
    </>
  );
}

export default App;
