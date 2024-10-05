import { Box, Text, Flex, Link } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function FooterSection() {
  return (
    <Box as="footer" bg="#DB8686" color="white" py={4}>
      <Flex
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        px={4}
      >
        <Text>staryymyl@2024</Text>

        <Flex gap={4}>
          <Link href="https://www.instagram.com" isExternal>
            <FaInstagram />
          </Link>
          <Link href="https://www.facebook.com" isExternal>
            <FaFacebook />
          </Link>
          <Link href="https://www.twitter.com" isExternal>
            <FaTwitter />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default FooterSection;
