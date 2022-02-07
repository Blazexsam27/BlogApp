import React from "react";

export default function SignUpForm() {
  return (
    <>
      <div className="mb-3 row">
        <label htmlFor="register_email" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control-plaintext"
            id="register_email"
            placeholder="email@example.com"
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="register_password" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            id="register_password"
          />
        </div>
      </div>
    </>
  );
}
