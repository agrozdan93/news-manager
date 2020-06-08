import React from "react";
import { Attraction, Car, TreeOption } from "grommet-icons";
import {
  AccordionPanel,
  Accordion,
  Grommet,
  Box,
  Carousel,
  Image,
} from "grommet";

const NewsCarousel = ({ category, news }) => (
  <Grommet>
    {news.map((news) => {
      console.log(category, news);
      return (
        <Box pad="large" align="center" justify="center">
          <Accordion>
            <AccordionPanel label={category.name}>
              {/* <Carousel></Carousel> */}
            </AccordionPanel>
          </Accordion>
        </Box>
      );
    })}
  </Grommet>
);

const customTheme = {
  carousel: {
    animation: {
      duration: 400,
    },
    icons: {
      color: "blue",
    },
    disabled: {
      icons: {
        color: "grey",
      },
    },
  },
};

export default NewsCarousel;
