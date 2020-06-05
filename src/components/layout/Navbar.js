import React from "react";
import { Grommet, Box, Header, Anchor, Text, Button, Grid } from "grommet";
import { Link } from "react-router-dom";
// import { Attraction, Car } from "grommet-icons";
// import { grommet } from "grommet/themes";

const NavItems = () => (
  <Box direction="row" gap="medium">
    <Link to="/">
      <Anchor size="medium" label="Top News" href="#" />
    </Link>
    <Link to="/categories">
      <Anchor size="medium" label="Categories" />
    </Link>
    <Link to="/search">
      <Anchor size="medium" label="Search" />
    </Link>
  </Box>
);

const Navbar = () => {
  return (
    <div theme={{ global: { colors: { doc: "#ff99cc" } } }} className="App">
      <Header as="header" pad="small" elevation="small" height="xxsmall">
        <NavItems />
        <Box direction="row" gap="medium">
          <Anchor size="medium" label="GB" activated href="#" />
          <Anchor size="medium" label="US" href="#" />
        </Box>
      </Header>
    </div>
  );
};

export default Navbar;
