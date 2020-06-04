import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import News from "./components/news/News";
import Categories from "./components/pages/Categories";

import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    news: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
    );
    this.setState({ news: res.data.articles, loading: false });
  }

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
              <Route exact path="/categories" component={Categories} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
