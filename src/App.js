import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import News from "./components/news/News";
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
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=0e82519178684ffeb3053725d423b89b"
    );

    this.setState({ news: res.data.articles, loading: false });
    console.log(res.data.articles);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <News loading={this.state.loading} news={this.state.news} />
        </div>
      </div>
    );
  }
}

export default App;
