import React, { useState, useEffect, useContext } from "react";
import NewsContext from "../context/news/newsContext";
import Spinner from "../layout/Spinner";
import { TextInput, Form } from "grommet";
import News from "../news/News";

const Search = () => {
  const [searchedNews, setSearchedNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState(" ");

  const newsList = useContext(NewsContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setLoading(true);
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
      }
      return matchedNews;
    });
    setSearchedNews(matchedNews);
    setLoading(false);
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
