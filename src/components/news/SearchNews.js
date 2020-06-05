import React, { Component } from "react";
import NewsItem from "../news/NewsItem";
import Search from "../pages/Search";
import { TextInput } from "grommet";

class SearchNews extends Component {
  state = {
    loading: false,
    searchedNews: { title: "123", urlToimg: "123", description: "123" },
    userInput: "",
  };

  onChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    const { loading, searchedNews, userInput } = this.state;
    return (
      <div>
        <div className="p-2">
          <TextInput value={userInput} onChange={this.onChange} />
          {/* <NewsItem news={searchedNews} /> */}
          <Search searchedNews={searchedNews} />
        </div>
      </div>
    );
  }
}

export default SearchNews;
