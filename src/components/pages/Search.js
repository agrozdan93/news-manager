import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextInput, Form } from "grommet";
import News from "../news/News";

const Search = () => {
  const [news, setNews] = useState([]);
  const [searchedNews, setSearchedNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
      )
      .then((res) => {
        setNews(res.data.articles);
        setLoading(false);
      })
      .catch((err) => console.log);
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
            <News loading={loading} news={searchedNews} />
          ) : (
            <News loading={loading} news={[]} />
          )}
        </div>
      </Form>
    </div>
  );
};

export default Search;
