import { Heading } from "@chakra-ui/react";
import ImageGrid from "../components/ImageGrid";

function IllustrationPage() {
  return (
    <div className="illustration-section justify-center items-center text-center mt-20">
      <Heading color="#DB8686" mb={10}>
        Other Illustration I have done
      </Heading>
      <ImageGrid />
    </div>
  );
}

export default IllustrationPage;
