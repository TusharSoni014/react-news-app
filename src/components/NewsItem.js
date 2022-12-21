import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

export default function NewsItem({
  title,
  description,
  url,
  source,
  imageUrl,
}) {
  return (
    <div className="news-item">
      <div className="thumbnail">
        <img src={imageUrl} alt="" />
      </div>

      <div className="right">
        <div className="source">
          <span style={{ color: "grey" }}>Source: </span>
          {source}
        </div>
        <h3 className="news-heading">{title}</h3>
        <p className="description">{description}</p>
        <a target="_blank" href={url} className="read-more">
          Read More <BsArrowRightCircle className="read-more-arrow" />
        </a>
      </div>
    </div>
  );
}
