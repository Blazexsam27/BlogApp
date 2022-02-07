import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";

export default function EditArticle() {
  let history = useHistory();
  const location = useLocation();
  const articleId = location.state;
  const [article, setArticle] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/1/articles/" + articleId)
      .then((response) => {
        setArticle(response.data);
      });
  }, [article.length]);

  const handleChange = (e) => {
    setArticle(Object.assign({}, article, { [e.target.name]: e.target.value }));
  };
  const handleOnSubmit = () => {
    const csrfToken = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
    axios
      .put("/users/1/articles/" + articleId, article)
      .then(() => {})
      .catch((err) => console.log(err));
    history.push("/app");
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="article_title" className="form-label">
            Title
          </label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            name="title"
            id="article_title"
            value={article.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="article_body" className="form-label">
            Article content
          </label>
          <textarea
            onChange={handleChange}
            className="form-control"
            id="article_body"
            rows="3"
            name="body"
            value={article.body}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-info">
          Create Article
        </button>
      </form>
    </div>
  );
}
