import { Grid, Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

function ImageGrid() {
  return (
    <>
      <Box w="60%" mx="auto">
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          {/* Row 1 */}
          <Image
            src="/kkasset1.JPG"
            alt="Image 2"
            objectFit="cover"
            w="100%"
            h="246px"
            borderRadius="10px"
          />
          <Image
            src="/kkasset2.JPG"
            alt="Image 1"
            objectFit="cover"
            w="100%"
            h="246px"
            gridColumn="span 2"
            borderRadius="10px"
          />
          <Image
            src="/kkasset3.JPG"
            alt="Image 3"
            objectFit="cover"
            w="100%"
            h="246px"
            borderRadius="10px"
          />

          {/* Row 2 */}
          <Image
            src="/kkasset4.JPG"
            alt="Image 5"
            objectFit="cover"
            w="100%"
            h="246px"
            borderRadius="10px"
            gridColumn="span 2"
          />
          <Image
            src="/kkasset5.JPG"
            alt="Image 6"
            objectFit="cover"
            w="100%"
            h="246px"
            borderRadius="10px"
          />
          <Image
            src="/kkasset6.JPG"
            alt="Image 7"
            objectFit="cover"
            w="100%"
            h="246px"
            borderRadius="10px"
          />

          {/* Row 3 */}
          <Image
            src="/kkasset7.JPG"
            alt="Image 8"
            objectFit="cover"
            w="100%"
            h="246px"
            borderRadius="10px"
          />
          <Image
            src="/kkasset8.JPG"
            alt="Image 11"
            objectFit="cover"
            w="100%"
            h="246px"
            borderRadius="10px"
          />
          <Image
            src="/kkasset9.JPG"
            alt="Image 9"
            objectFit="cover"
            w="100%"
            h="246px"
            gridColumn="span 2"
            borderRadius="10px"
          />
          {/* Row 3 */}
          <Image
            src="/kkasset10.JPG"
            alt="Image 9"
            objectFit="cover"
            w="100%"
            h="246px"
            gridColumn="span 2"
            borderRadius="10px"
          />
          <Image
            src="/kkasset11.JPG"
            alt="Image 8"
            objectFit="cover"
            w="100%"
            h="246px"
            borderRadius="10px"
          />
          <Image
            src="/kkasset3.JPG"
            alt="Image 11"
            objectFit="cover"
            w="100%"
            h="246px"
            borderRadius="10px"
          />
        </Grid>
      </Box>
    </>
  );
}

export default ImageGrid;
