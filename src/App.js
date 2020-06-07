import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import News from "./components/news/News";
import SingleNews from "./components/news/SingleNews";
import Categories from "./components/pages/Categories";
import Search from "./components/pages/Search";

import NewsState from "./components/context/news/NewsState";
// import NewsContext from "./components/context/news/newsContext";

import "./App.css";
import axios from "axios";

const App = () => {
  const [news, setNews] = useState([]);
  const [singleNews, setSingleNews] = useState({});
  const [loading, setLoading] = useState(false);

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

  const getSingleNews = (id) => {
    setLoading(true);
    news.find((news, index) => {
      if (index === parseInt(id) - 1) {
        setSingleNews(news);
        setLoading(false);
      }
    });
  };

  return (
    <NewsState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <News loading={loading} news={news} />
                  </Fragment>
                )}
              />
              <Route exact path="/categories" component={Categories} />
              {/* <Route exact path="/search" component={Search} /> */}
              <Route exact path="/search" render={(props) => <Search />} />
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
    </NewsState>
  );
};

export default App;
