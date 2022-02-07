import axios, { Axios } from "axios";
import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function SingleArticle(props) {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users/1/articles/1").then((response) => {
      setArticle(response.data);
    });
  }, [article.length]);

  return (
    <div>
      <ul>
        <Card
          articleTitle={article.title}
          articleBody={article.body}
          articleId={article.id}
        />
      </ul>
    </div>
  );
}
