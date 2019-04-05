import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/" data-elem="header-brand-link">
        Servicer
      </Link>
      <div className="">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/services/add"
              data-elem="header-add-service"
            >
              Add Service
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup" data-elem="header-signup">
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
