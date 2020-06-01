import React, { Component } from "react";
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

export class Navbar extends Component {
  render() {
    return (
      <Grommet
        theme={{ global: { colors: { doc: "#ff99cc" } } }}
        className="App"
        full
      >
        <Header as="header" pad="small" elevation="small" height="xsmall">
          <NavItems />
          <Box direction="row" gap="medium">
            <Anchor size="large" label="GB" href="#" />
            <Anchor size="large" label="US" href="#" />
          </Box>
        </Header>
      </Grommet>
    );
  }
}

export default Navbar;
