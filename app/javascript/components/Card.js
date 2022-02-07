import React from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

export default function Card(props) {
  let history = useHistory();
  const handleDelete = () => {
    axios
      .delete("/users/1/articles/" + props.articleId)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    history.push("/app");
  };
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="bootstrap-themes.png"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">{props.articleTitle}</h1>
          <p className="lead">{props.articleBody}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link
              to={{
                pathname: "/app/users/1/articles/" + props.articleId + "/edit",
                state: props.articleId,
              }}
            >
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Edit
              </button>
            </Link>
            <button
              onClick={handleDelete}
              type="button"
              className="btn btn-outline-danger btn-lg px-4"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
