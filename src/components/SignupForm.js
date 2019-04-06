import React, { useState } from 'react';
import { api } from '../config';
import { trackEvent } from '../util';

export default function SignupForm() {
  const [user, setUser] = useState({ username: '', email: '', password: '' });

  function onChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = async event => {
    try {
      event.preventDefault();
      console.log(user);
      const res = await api.post('/auth/local/register', user);
      trackEvent({
        category: 'User',
        action: 'Registration'
      });
      localStorage.setItem('jwt', res.data.jwt);
      localStorage.setItem('user', user.username);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="col-sm-8" onSubmit={handleSubmit} method="post">
      <br />
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Username</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            value={user.username}
            name="username"
            placeholder="Enter your username"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            value={user.email}
            name="email"
            placeholder="Enter your email"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={user.password}
            name="password"
            onChange={onChange}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Signup
      </button>
    </form>
  );
}
