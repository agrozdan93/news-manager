import React, { Component } from "react";
import axios from "axios";
import { TextInput } from "grommet";
import News from "../news/News";

class Search extends Component {
  state = {
    loading: false,
    news: [],
    userInput: "",
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
    );
    this.setState({ news: res.data.articles, loading: false });
  }

  onChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    const { loading, news, userInput } = this.state;
    return (
      <div className="p-2">
        <TextInput
          placeholder="Search news"
          value={userInput}
          onChange={this.onChange}
        />
        <div>
          {userInput ? (
            <News loading={loading} news={news} />
          ) : (
            <News loading={loading} news={[]} />
          )}
        </div>
      </div>
    );
  }
}

export default Search;
