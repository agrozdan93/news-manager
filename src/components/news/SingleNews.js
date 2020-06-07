import React, { useEffect } from "react";
import Spinner from "../layout/Spinner";
import { Box, Anchor } from "grommet";
import { Link } from "react-router-dom";

const SingleNews = ({ singleNews, getSingleNews, loading, match }) => {
  useEffect(() => {
    console.log(singleNews, loading, getSingleNews, match);
    getSingleNews(match.params.id);
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="card text-center">
        <p className="lead">{singleNews.title}</p>
        <img
          src={singleNews.urlToImage}
          alt="someImage"
          style={{ width: "100%", height: "auto" }}
        />
        <div>
          <p className="text-justify"> * {singleNews.content}</p>
        </div>
        <div>
          <Box align="start" pad="medium">
            <Link to="/">
              <Anchor label="Back to news" size="xsmall" />
            </Link>
          </Box>
        </div>
      </div>
    );
  }
};

export default SingleNews;
