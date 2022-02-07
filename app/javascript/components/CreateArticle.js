import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function CreateArticle() {
  let history = useHistory();
  const [article, setArticle] = useState({});
  const handleChange = (e) => {
    setArticle(Object.assign({}, article, { [e.target.name]: e.target.value }));
  };
  const handleOnSubmit = () => {
    const csrfToken = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    axios
      .post("/users/1/articles", article)
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
          ></textarea>
        </div>
        <button type="submit" className="btn btn-info">
          Create Article
        </button>
      </form>
    </div>
  );
}
