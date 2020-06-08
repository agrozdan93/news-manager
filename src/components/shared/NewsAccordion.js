import React from "react";
import { SubtractCircle, AddCircle } from "grommet-icons";
import { Accordion, AccordionPanel, Box, Grommet } from "grommet";

const NewsAccordion = ({ animate, multiple, categories, news }) => (
  <Grommet theme={customAccordionTheme}>
    {categories.map((category) => {
      return (
        <Box pad="large" align="center" justify="center">
          <Accordion animate={animate} multiple={multiple}>
            <AccordionPanel label={category.name}></AccordionPanel>
          </Accordion>
        </Box>
      );
    })}
  </Grommet>
);

const customAccordionTheme = {
  global: {
    font: {
      family: `-apple-system,
       BlinkMacSystemFont, 
       "Segoe UI", 
       Roboto`,
    },
  },
  accordion: {
    heading: {
      level: 3,
      margin: { vertical: "6px", horizontal: "24px" },
    },
    hover: {
      color: "accent-2",
    },
    icons: {
      collapse: SubtractCircle,
      expand: AddCircle,
      color: "hotpink",
    },
    border: undefined,
    panel: {
      // border: {
      //   side: 'horizontal',
      //   size: 'medium',
      //   color: '#DADADA',
      //   style: 'dotted',
      // },
    },
  },
};

export default NewsAccordion;
