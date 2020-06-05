import React, { Component } from "react";
import axios from "axios";
import NewsAccordion from "../shared/NewsAccordion";

class Categories extends Component {
  state = {
    categories: [],
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
    console.log(res, res2);

    const business = res.data.articles.slice(0, 5);
    const health = res2.data.articles;

    this.setState({
      categories: business,
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
        />
      </div>
    );
  }
}

export default Categories;
