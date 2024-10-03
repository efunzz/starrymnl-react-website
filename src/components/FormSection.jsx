import { useState } from "react";
import {
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  Textarea,
  FormHelperText,
} from "@chakra-ui/react";
import Button from "./ui/Button";

export function Form1() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading
        w="100%"
        color="#DB8686"
        textAlign={"center"}
        fontWeight="bold"
        mb="2%"
      >
        Order Form
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            First name
          </FormLabel>
          <Input
            id="first-name"
            placeholder="First name"
            bg="rgba(153, 153, 153, 0.15)"
            color="#999999" // Set the text color for the input
            _placeholder={{ color: "#999999" }}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input
            id="last-name"
            placeholder="Last name"
            bg="rgba(153, 153, 153, 0.15)"
            color="#999999" // Set the text color for the input
            _placeholder={{ color: "#999999" }}
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input
          id="email"
          type="email"
          bg="rgba(153, 153, 153, 0.15)"
          color="#999999" // Set the text color for the input
          _placeholder={{ color: "#999999" }}
        />
        <FormHelperText>We&apos;ll never share your email.</FormHelperText>
      </FormControl>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt={5}
        >
          Types of Service
        </FormLabel>
        <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        >
          <option>Digital Illustration</option>
          <option>Logo Design</option>
        </Select>
      </FormControl>

      <FormControl id="email" mt={1}>
        <FormLabel
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt={10}
        >
          Additional Request
        </FormLabel>
        <Textarea
          placeholder="you@example.com"
          rows={3}
          shadow="sm"
          focusBorderColor="brand.400"
          fontSize={{
            sm: "sm",
          }}
          bg="rgba(153, 153, 153, 0.15)"
          color="#999999" // Set the text color for the input
          _placeholder={{ color: "#999999" }}
          mb={10}
        />
      </FormControl>
      <Button
        textAlign={"center"}
        width={610}
        color={"#DB8686"}
        children={"Submit"}
        mb={10}
      />
    </>
  );
}

export default Form1;
