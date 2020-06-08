import React, { useState, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import axios from "axios";
import { TextInput, Form } from "grommet";
import News from "../news/News";

import NewsContext from "../context/news/newsContext";

const Search = () => {
  const [news, setNews] = useState([]);
  const [searchedNews, setSearchedNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState(" ");

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
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setLoading(true);
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
    newsList.news.map((singleNews) => {
      if (singleNews.title.toLowerCase().match(`${userInput}`)) {
        matchedNews.push(singleNews);
        console.log("single", singleNews);
      }
      return matchedNews;
    });
    setSearchedNews(matchedNews);
    setLoading(false);
    // console.log(matchedNews);
    // console.log("menja se", newsList.news);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="pt-1">
        <Form onChange={onChange}>
          <TextInput
            name="text"
            placeholder="Search news"
            value={userInput}
            onChange={getUserInput}
          />
          <div>
            {/* {userInput ? (
              // <NewsContext value={searchedNews}>
              //   <News loading={loading} />
              // </NewsContext>
           // ) : (
              // <News loading={loading} news={[]} />
           // )} */}
            {userInput ? (
              <News loading={loading} searchedNews={searchedNews} />
            ) : (
              <News loading={loading} searchedNews={[]} />
            )}
          </div>
        </Form>
      </div>
    );
  }
};

export default Search;
