import React, { Component } from "react";
import axios from "axios";
import { TextInput, Form } from "grommet";
import News from "../news/News";

class Search extends Component {
  state = {
    loading: false,
    news: [],
    userInput: "",
    searchedNews: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`
    );
    this.setState({ news: res.data.articles, loading: false });
  }

  getUserInput = (e) => {
    this.setState({ userInput: e.target.value });
  };

  onChange = () => {
    this.setState({ loading: true });
    let matchedNews = [];
    this.state.news.map((news) => {
      if (news.title.toLowerCase().match(`${this.state.userInput}`)) {
        matchedNews.push(news);
      }
    });
    console.log(matchedNews);
    this.setState({
      searchedNews: matchedNews,
      loading: false,
    });
  };

  render() {
    const { loading, searchedNews, userInput } = this.state;
    return (
      <div className="p-2">
        <Form onChange={this.onChange}>
          <TextInput
            name="text"
            placeholder="Search news"
            value={userInput}
            onChange={this.getUserInput}
          />
          <div>
            {userInput ? (
              <News loading={loading} news={searchedNews} />
            ) : (
              <News loading={loading} news={[]} />
            )}
          </div>
        </Form>
      </div>
    );
  }
}

export default Search;
