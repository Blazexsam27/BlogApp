import React from "react";

export default function SignInForm() {
  return (
    <>
      <div className="mb-3 row">
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control-plaintext"
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
    </>
  );
}
