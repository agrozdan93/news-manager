import React from "react";
import PropTypes from "prop-types";
import NewsItem from "../news/NewsItem";
// import { TextInput } from "grommet";
// import SandboxComponent from "./SandboxComponent";

const Search = ({ searchedNews }) => {
  console.log(searchedNews);
  return (
    <div>
      <NewsItem news={searchedNews} />
    </div>
  );
};

Search.propTypes = {};

const newsCardStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

let key = 0;

export default Search;
