import React, { Component } from "react";
import axios from "axios";
import { TextInput, Form } from "grommet";
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

  getUserInput = (e) => {
    this.setState({ userInput: e.target.value });
    console.log(this.state.userInput);
  };

  onChange = () => {
    console.log("method on change");
    //   this.props.searchNews(this.state.userInput);
  };

  render() {
    const { loading, news, userInput } = this.state;
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
            {userInput}
            {userInput ? (
              <News loading={loading} news={news} searchNews={userInput} />
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
