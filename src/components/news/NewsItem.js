import React from "react";
import PropTypes from "prop-types";

const NewsItem = ({ news: { title, description, urlToImage } }) => {
  return (
    <div className="card text-center">
      <h3> {title}</h3>
      <img src={urlToImage} alt="someImage" style={{ width: "150px" }} />
      <p> {description}</p>

      <div>
        <div className="btn btn-sm btn-dark my-1"> Read more</div>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  news: PropTypes.object.isRequired,
};

export default NewsItem;
