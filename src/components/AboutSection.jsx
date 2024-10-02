import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
function AboutSection() {
  return (
    <div className="about-section flex justify-center items-center text-center">
      <Image
        borderRadius="40px"
        width="475px"
        height="400px"
        boxShadow={100}
        objectFit="cover"
        src="/kkweb.JPG"
        alt="Dan Abramov"
      />
      <Text pl={10}>A mother of 2 that loves to draw.</Text>
    </div>
  );
}

export default AboutSection;
