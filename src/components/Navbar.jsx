"use client"
import { Link, useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import  "./Navbar.css"

const Navbar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("user") 
    navigate("/login")
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center fw-bold" to="/courses">
          <i className="bi bi-book-half fs-4 me-2"></i>
          Course Dashboard
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-1">
              <Link className="nav-link px-3 rounded-pill" to="/courses">
                <i className="bi bi-house-door me-1"></i>
                Home
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link px-3 rounded-pill" to="/courses/new">
                <i className="bi bi-plus-circle me-1"></i>
                Add Course
              </Link>
            </li>
          </ul>

          <button onClick={handleLogout} className="btn btn-light btn-sm rounded-pill px-3 d-flex align-items-center">
            <i className="bi bi-box-arrow-right me-2"></i>
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
