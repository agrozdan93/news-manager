import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { TextInput, Form } from "grommet";
import News from "../news/News";

import NewsContext from "../context/news/newsContext";

const Search = () => {
  const [news, setNews] = useState([]);
  const [searchedNews, setSearchedNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState("");

  const newsList = useContext(NewsContext);

  const createGuid = () => {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return (
      s4() +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      s4() +
      s4()
    );
  };

  useEffect(() => {
    console.log("Search", newsList);
    // setLoading(true);
    // axios
    //   .get(
    //     `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
    //   )
    //   .then((res) => {
    //     res.data.articles.map((news) => {
    //       news.id = createGuid();
    //     });
    //     setNews(res.data.articles);
    //     setLoading(false);
    //   })
    //   .catch((err) => console.log);
  }, []);

  const getUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const onChange = () => {
    setLoading(true);
    let matchedNews = [];
    news.map((news) => {
      if (news.title.toLowerCase().match(`${userInput}`)) {
        matchedNews.push(news);
      }
      return matchedNews;
    });
    // console.log(matchedNews);
    setSearchedNews(matchedNews);
    setLoading(false);
  };

  return (
    <div className="p-2">
      <Form onChange={onChange}>
        <TextInput
          name="text"
          placeholder="Search news"
          value={userInput}
          onChange={getUserInput}
        />
        <div>
          {userInput ? (
            <NewsContext value={searchedNews}>
              <News loading={loading} />
            </NewsContext>
          ) : (
            <News loading={loading} news={[]} />
          )}
        </div>
      </Form>
    </div>
  );
};

export default Search;
