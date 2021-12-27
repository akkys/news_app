import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {
      title,
      description,
      imageUrl,
      newsUrl,
      author,
      publishedDate,
      source,
    } = this.props;
    return (
      <div>
        <div className="card news_card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              right: "0",
              position: "absolute",
            }}
          >
            <span
              className="badge border border-light rounded-pill bg-primary"
              style={{ zIndex: "1", left: "90%" }}
            >
              {source}
            </span>
          </div>

          <img
            className="card-img-top news_img"
            src={imageUrl}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            {/* <span className="badge badge-pill badge-secondary">{source}</span> */}
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {new Date(publishedDate).toDateString()} at{" "}
                {new Date(publishedDate).toLocaleTimeString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-light">
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
