import React from "react";
import { Attraction, Car, TreeOption } from "grommet-icons";
import { Grommet, Box, Carousel } from "grommet";

const NewsCarousel = ({ controls, news }) => {
  return (
    <div>
      {/* <Box align="center" pad="large">
        <Carousel controls={controls}>
          {news.map((news) => {
            return (
              <Box pad="xlarge" background="accent-1">
                <Attraction size="xlarge" /> {news.title}
              </Box>
            );
          })}
        </Carousel>
      </Box> */}
    </div>
  );
};

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
