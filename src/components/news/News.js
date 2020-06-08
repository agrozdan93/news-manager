import React, { useContext } from "react";
import NewsItem from "./NewsItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import NewsContext from "../context/news/newsContext";

const News = ({ loading }) => {
  const newsList = useContext(NewsContext);

  console.log(newsList);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={newsCardStyle}>
        {newsList.news.map((singleNews, index) => (
          <NewsItem key={index} news={singleNews} />
        ))}
      </div>
    );
  }
};

const newsCardStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

News.propTypes = {
  news: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default News;
