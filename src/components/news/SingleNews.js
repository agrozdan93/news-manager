import React, { Component } from "react";
import Spinner from "../layout/Spinner";

class SingleNews extends Component {
  componentDidMount() {
    this.props.getSingleNews(this.props.match.params.id);
    console.log(this.props);
  }

  render() {
    const { title, urlToImage, description } = this.props.singleNews;
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
            style={{ width: "100%", height: "180px" }}
          />

          <div>
            <p className="text-justify"> {description}</p>
          </div>

          {/* <div>
              <Box align="center" pad="medium">
                <Link to={`/news/${id}`}>
                  <Button
                    label="Read More"
                    size="small"
                    alignSelf="center"
                    href="#"
                  />
                </Link>
              </Box>
            </div> */}
          {/* <div className="btn btn-sm btn-dark my-1"> Read more</div>
           */}
        </div>
      );
    }
  }
}

export default SingleNews;
