import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Accordian from "./Accordian";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users/1/articles").then((response) => {
      setArticles(response.data);
    });
  }, [articles.length]);

  const articleList = articles.map((article) => {
    return (
      <Accordian
        key={article.id}
        articleId={article.id}
        articleTitle={article.title}
        articleBody={article.body}
      />
    );
  });

  return (
    <div className="container my-4">
      <ul>{articleList}</ul>
    </div>
  );
}
