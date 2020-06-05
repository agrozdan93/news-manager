import React from "react";
import NewsItem from "./NewsItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const News = ({ loading, news }) => {
  let key = 0;
  if (loading) {
    return <Spinner />;
  } else {
    console.log(news);
    return (
      <div style={newsCardStyle}>
        {news.map((news) => (
          <NewsItem
            key={news.source.id == null ? key++ : news.source.id}
            news={news}
          />
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
