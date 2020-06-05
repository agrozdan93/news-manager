import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import News from "./components/news/News";
import SearchNews from "./components/news/SearchNews";
import Categories from "./components/pages/Categories";
// import SingleNews from "./components/news/SingleNews";

import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    news: [],
    singleNews: {},
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
    );
    this.setState({ news: res.data.articles, loading: false });
    console.log(this.state);
  }

  // viewSingleNews = () => {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
  //   );
  //   this.setState({ news: res.data.articles, loading: false });
  // }

  render() {
    const { news, loading } = this.state;
    return (
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
              <Route exact path="/search" component={SearchNews} />
              {/* <Route
                exact
                path="/search"
                render={(props) => (
                  <Fragment>
                    <SearchNews loading={loading} news={news} />
                  </Fragment>
                )}
              /> */}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
