import React from "react";
import { Link } from "react-router-dom";

export default function Accordian(props) {
  const { articleTitle, articleBody, articleId } = props;

  return (
    <div className="accordian" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#" + "article_id" + articleId}
            aria-expanded="false"
            aria-controls={"article_id" + articleId}
          >
            {articleTitle}
          </button>
        </h2>
        <div
          id={"article_id" + articleId}
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            {articleBody}
            <br />
            <Link to={"/users/1/articles/" + articleId}>
              <button className="btn btn-info my-2 text-white">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
