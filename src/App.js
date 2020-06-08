import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NewsProvider } from "./components/context/news/newsContext";

import Navbar from "./components/layout/Navbar";
import News from "./components/news/News";
import SingleNews from "./components/news/SingleNews";
import Categories from "./components/pages/Categories";
import Search from "./components/pages/Search";

import "./App.css";
import axios from "axios";

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

const App = () => {
  const [news, setNews] = useState([]);
  const [singleNews, setSingleNews] = useState({});
  const [loading, setLoading] = useState(false);
  const [langauge, setLangauge] = useState("US");

  const apiUrl =
    langauge === "US"
      ? `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
      : `https://newsapi.org/v2/top-headlines?country=de&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`;

  useEffect(() => {
    setLoading(true);
    axios
      .get(apiUrl)
      .then((res) => {
        setNews(
          res.data.articles.map((singleNews) => {
            singleNews.id = createGuid();
            return singleNews;
          })
        );
        setLoading(false);
      })
      .catch((err) => console.log);
  }, []);

  const chooseStateForNewsData = (lang) => {
    if (lang === "US") {
      axios.get(apiUrl).then((res) => {
        setNews(
          res.data.articles.map((singleNews) => {
            singleNews.id = createGuid();
            return singleNews;
          })
        );
      });
    } else {
      axios.get(apiUrl).then((res) => {
        setNews(
          res.data.articles.map((singleNews) => {
            singleNews.id = createGuid();
            return singleNews;
          })
        );
      });
    }
    setLangauge(lang);
  };

  const getSingleNews = (id) => {
    setLoading(true);
    news.find((news, index) => {
      if (news.id === id) {
        setSingleNews(news);
        setLoading(false);
      }
    });
  };

  return (
    <Router>
      <div className="App">
        <Navbar chooseStateForNewsData={chooseStateForNewsData} />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <NewsProvider value={{ news: news }}>
                    <News loading={loading} />
                  </NewsProvider>
                </Fragment>
              )}
            />
            <Route exact path="/categories" component={Categories} />
            <Route
              exact
              path="/search"
              render={(props) => (
                <Fragment>
                  <NewsProvider value={{ news: news }}>
                    <Search loading={loading} />
                  </NewsProvider>
                </Fragment>
              )}
            />
            <Route
              exact
              path="/news/:id"
              render={(props) => (
                <Fragment>
                  <SingleNews
                    getSingleNews={getSingleNews}
                    singleNews={singleNews}
                    loading={loading}
                    {...props}
                  />
                </Fragment>
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
