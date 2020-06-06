import React, { Component } from "react";
import Spinner from "../layout/Spinner";
import { Box, Button, Anchor } from "grommet";
import { Link } from "react-router-dom";

class SingleNews extends Component {
  componentDidMount() {
    this.props.getSingleNews(this.props.match.params.id);
    console.log(this.props);
  }

  render() {
    const { title, urlToImage, content } = this.props.singleNews;
    const { loading } = this.props;
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className="card text-center">
          <p className="lead">{title}</p>
          <img
            src={urlToImage}
            alt="someImage"
            style={{ width: "100%", height: "auto" }}
          />

          <div>
            <p className="text-justify"> * {content}</p>
          </div>

          <div>
            <Box align="start" pad="medium">
              <Link to="/">
                <Anchor label="Back to news" size="xsmall" href="#" />
              </Link>
            </Box>
          </div>
        </div>
      );
    }
  }
}

export default SingleNews;
