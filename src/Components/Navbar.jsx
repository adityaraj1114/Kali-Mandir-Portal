import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
    collapseNavbar(); // collapse after logout
  };

  // This function collapses the navbar by removing "show" class from the navbar collapse element
  const collapseNavbar = () => {
    const navbar = document.getElementById('navbarNav');
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={collapseNavbar}>Shri Shyama Maa</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={collapseNavbar}>Home</Link>
            </li>

            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/forms" onClick={collapseNavbar}>Forms</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register-marriage" onClick={collapseNavbar}>Marriage Form</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/newpost" onClick={collapseNavbar}>New Post</Link>
                </li>
              </>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/gallery" onClick={collapseNavbar}>Gallery</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/posts" onClick={collapseNavbar}>Posts</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={collapseNavbar}>Contact Us</Link>
            </li>

            {!isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link" to="/login" onClick={collapseNavbar}>Admin Login</Link>
              </li>
            )}

            {isAuthenticated && (
              <li className="nav-item">
                <button className="btn btn-warning ms-2" onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
