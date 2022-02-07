import React from "react";
import axios from "axios";

export default function SignInForm() {
  const handleOnSubmit = (event) => {
    console.log("submiting sign up");
    event.preventDefault();
    const token = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = token;
    axios
      .post("/users/sign_in")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container mt-4">
        <form action="/users/sign_in" method="post">
          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="email@example.com"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="password" />
            </div>
          </div>
          <button className="btn btn-primary">Sign In</button>
        </form>
      </div>
    </>
  );
}
