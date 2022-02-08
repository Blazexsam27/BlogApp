import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Accordian from "./Accordian";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { LOAD_ARTICLES } from "./Queries";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const { loading, error, data } = useQuery(LOAD_ARTICLES);

  useEffect(() => {
    if (data !== undefined) {
      setArticles(data.articles);
    }
  }, [articles.length, data]);

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
