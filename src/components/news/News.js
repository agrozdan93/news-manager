import React, { useContext } from "react";
import NewsItem from "./NewsItem";
import Spinner from "../layout/Spinner";
import NewsContext from "../context/news/newsContext";
import styled from "styled-components";
import media from "styled-media-query";

const News = ({ loading, searchedNews }) => {
  const newsList = useContext(NewsContext);
  const searchedNewsFromContext = useContext(NewsContext);

  console.log(
    "searched",
    searchedNews,
    "newslist",
    newsList,
    "searched from context",
    searchedNewsFromContext
  );

  let matchedNews = [];
  if (searchedNews) {
    newsList.news.map((news) => {
      searchedNews.map((singleNews) => {
        if (news.id === singleNews.id) {
          matchedNews.push(news);
        }
      });
    });
  }
  console.log(matchedNews);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={newsCardStyle}>
        {searchedNews
          ? matchedNews.map((searched, index) => (
              <NewsItem key={index} news={searched} />
            ))
          : newsList.news.map((singleNews, index) => (
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

// const newsCard = styled`
//   display: grid;
//   grid-template-columns: repeat(3,1fr);
//   grid-gap: 1rem

//   ${media.lessThan("medium")`
//     display: columns;
//   `}
// `;

export default News;
