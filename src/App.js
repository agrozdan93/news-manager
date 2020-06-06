import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import News from "./components/news/News";
import SingleNews from "./components/news/SingleNews";
import Categories from "./components/pages/Categories";
import Search from "./components/pages/Search";

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
  }

  getSingleNews = (id) => {
    this.setState({ loading: true });
    this.state.news.find((news, index) => {
      if (index === parseInt(id) - 1) {
        this.setState({
          singleNews: news,
          loading: false,
        });
      }
    });
    // console.log(id, this.state);
    // console.log(this.state.news.indexOf(id - 1) === -1 ? "naso ga" : "nije");

    // this.setState({
    //   singleNews: { title: "1", desc: "2", content: "3" },
    //   loading: false,
    // });
  };

  render() {
    const { news, loading, singleNews } = this.state;
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
              <Route exact path="/categories" component={Categories} />
              <Route exact path="/search" component={Search} />
              <Route
                exact
                path="/news/:id"
                render={(props) => (
                  <Fragment>
                    <SingleNews
                      getSingleNews={this.getSingleNews}
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
  }
}

export default App;
