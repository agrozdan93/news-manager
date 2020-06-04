import React from "react";
import { Grommet, Box, Header, Anchor, Text, Button, Grid } from "grommet";
// import { Attraction, Car } from "grommet-icons";
// import { grommet } from "grommet/themes";

export const NavItems = () => (
  <Box direction="row" gap="medium">
    <Anchor size="large" label="Top News" href="#" />
    <Anchor size="large" label="Categories" href="#" />
    <Anchor size="large" label="Search" href="#" />
  </Box>
);

const Navbar = () => {
  return (
    <div theme={{ global: { colors: { doc: "#ff99cc" } } }} className="App">
      <Header as="header" pad="small" elevation="small" height="xsmall">
        <NavItems />
        <Box direction="row" gap="medium">
          <Anchor size="large" label="GB" href="#" />
          <Anchor size="large" label="US" href="#" />
        </Box>
      </Header>
    </div>
  );
};

export default Navbar;
