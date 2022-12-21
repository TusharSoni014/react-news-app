import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { nanoid } from 'nanoid'

export default function NewsContainer({query}) {
  const [newsArray, setNewsArray] = useState();
  
  const apiKey = "5d0520723c5a4f73af6efa7302f85487";

  async function fetchNews() {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
    );
    const responseJSON = await response.json();
    return responseJSON;
  }

  useEffect(() => {
    const newsData = fetchNews();
    newsData.then((data) => {
      setNewsArray(data.articles);
    });
  }, [query]);

  return (
    <div className="news-container">
      {newsArray && newsArray.map((element) => {
        return (
          <NewsItem
            key={nanoid()}
            title={element.title}
            description={element.description}
            url={element.url}
            source={element.source.name}
            imageUrl={element.urlToImage}
          />
        );
      })}
    </div>
  );
}
