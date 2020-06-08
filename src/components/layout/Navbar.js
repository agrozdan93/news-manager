import React from "react";
import { Box, Header, Anchor, Button } from "grommet";
import { Link } from "react-router-dom";

const NavItems = () => (
  <Box direction="row" gap="medium">
    <Anchor size="medium" label="Top News" href="/" />
    <Link to="/categories">
      <Anchor size="medium" label="Categories" />
    </Link>
    <Link to="/search">
      <Anchor size="medium" label="Search" />
    </Link>
  </Box>
);

const Navbar = ({ chooseStateForNewsData, select }) => {
  const handleClick = (e) => {
    chooseStateForNewsData(e.target.innerText);
  };

  return (
    <div theme={{ global: { colors: { doc: "#ff99cc" } } }} className="App">
      <Header as="header" pad="small" elevation="small" height="xxsmall">
        <NavItems />
        <Box direction="row" gap="medium">
          <Link to="/">
            <Button size="small" label="US" onClick={handleClick} />
          </Link>
          <Link to="/">
            <Button size="small" label="DE" onClick={handleClick} />
          </Link>
        </Box>
      </Header>
    </div>
  );
};

export default Navbar;
