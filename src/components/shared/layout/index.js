import React from 'react';
import { ROUTES } from 'constant';
import { Link } from 'react-router-dom';

export default ({
  children
}) => (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">Sample Logo</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={ROUTES.USER_CREATE.path} className="nav-link">User Create</Link>
              </li>
              <li className="nav-item">
                <Link to={ROUTES.USER_LIST.path} className="nav-link">User List</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {children}
    </div>
  );