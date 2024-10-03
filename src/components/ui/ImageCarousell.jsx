import React from "react";
import Slider from "react-slick";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageAssets = [
  { src: "/kkasset1.JPG", alt: "Asset 1" },
  { src: "/kkasset2.JPG", alt: "Asset 2" },
  { src: "/kkasset3.JPG", alt: "Asset 3" },
  { src: "/kkasset5.JPG", alt: "Asset 4" },
  { src: "/kkasset6.JPG", alt: "Asset 5" },
  { src: "/kkasset7.JPG", alt: "Asset 6" },
];

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Box width="900px">
      <Slider {...settings}>
        {imageAssets.map((image) => (
          <Box key={image.alt} display="flex" justifyContent="center">
            <Image
              src={image.src}
              alt={image.alt}
              boxSize="293px"
              borderRadius="20px"
              objectFit="cover"
              mx="5px"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
