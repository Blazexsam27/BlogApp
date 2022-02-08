import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Accordian from "./Accordian";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { LOAD_ARTICLES } from "./Queries";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const response = useQuery(LOAD_ARTICLES);

  useEffect(() => {
    axios.get("http://localhost:3000/users/1/articles").then((response) => {
      setArticles(response.data);
    });
    console.log(response);
  }, [articles.length]);

  const articleList = articles.map((article) => {
    return (
      <>
        <Accordian
          key={article.id}
          articleId={article.id}
          articleTitle={article.title}
          articleBody={article.body}
        />
      </>
    );
  });

  return (
    <>
      <div className="container my-4">
        {articleList}
        <Link to="/app/users/1/articles/new">
          <button className="btn btn-primary mt-4">Create New Article</button>
        </Link>
      </div>
    </>
  );
}
