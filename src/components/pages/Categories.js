import React, { Component } from "react";
import axios from "axios";
import NewsAccordion from "../shared/NewsAccordion";

class Categories extends Component {
  state = {
    news: [],
    categories: [{ name: "Business" }, { name: "Health" }],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
    );
    const res2 = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
    );
    let business = res.data.articles.slice(0, 5);
    let health = res2.data.articles.slice(0, 5);

    this.setState({
      news: [business, health],
      loading: false,
    });
  }

  render() {
    return (
      <div>
        <NewsAccordion
          animate={true}
          multiple={true}
          categories={this.state.categories}
          news={this.state.news}
        />
      </div>
    );
  }
}

export default Categories;
