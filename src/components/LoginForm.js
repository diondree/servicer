import React from 'react';

export default function LoginForm() {
  return (
    <form method="POST">
      <div className="form-group row">
        <label for="staticEmail" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            value="email@example.com"
          />
        </div>
      </div>
      <div className="form-group row">
        <label for="inputPassword" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
      </div>
    </form>
  );
}
