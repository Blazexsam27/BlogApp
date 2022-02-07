import axios from "axios";
import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function SingleArticle(props) {
  const location = useLocation();
  const articleUrl = location.pathname.substring(4);
  const [article, setArticle] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000" + articleUrl).then((response) => {
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
