import React from "react";
import axios from "axios";

export default function SignUpForm() {
  return (
    <>
      <div className="container mt-4">
        <form onSubmit={handleOnSubmit}>
          <div className="mb-3 row">
            <label htmlFor="register_email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="register_email"
                id="register_email"
                placeholder="email@example.com"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="register_password"
              className="col-sm-2 col-form-label"
            >
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                name="register_password"
                className="form-control"
                id="register_password"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="confirm_password"
              className="col-sm-2 col-form-label"
            >
              Confirm Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                name="confirm_password"
                className="form-control"
                id="confirm_password"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
