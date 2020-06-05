import React from "react";
import PropTypes from "prop-types";
import { Box, Button } from "grommet";

const NewsItem = ({ news: { title, description, urlToImage } }) => {
  return (
    <div className="card text-center">
      <p className="lead">
        {title.length > 30 ? title.slice(0, 60) + `...` : title}
      </p>
      <img
        src={urlToImage}
        alt="someImage"
        style={{ width: "100%", height: "180px" }}
      />

      <div>
        <p className="text-justify"> {description}</p>
      </div>

      <div>
        <Box align="center" pad="medium">
          <Button label="Read More" size="small" alignSelf="end" href="#" />
        </Box>
      </div>
      {/* <div className="btn btn-sm btn-dark my-1"> Read more</div>
       */}
    </div>
  );
};

NewsItem.propTypes = {
  news: PropTypes.object.isRequired,
};

export default NewsItem;
