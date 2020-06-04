import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {
  count = 0;

  render() {
    return (
      <div style={newsCardStyle}>
        {this.props.news.map((news) => (
          <NewsItem
            key={news.source.id == null ? this.count++ : news.source.id}
            news={news}
          />
        ))}
      </div>
    );
  }
}

const newsCardStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default News;
