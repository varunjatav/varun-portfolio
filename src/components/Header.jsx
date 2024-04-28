import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [active,setActive] = useState("Home");
  return (

      <header className="d-flex flex-wrap justify-content-center px-3 py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none gap-3"
        >
        <img src="https://cdn-icons-png.flaticon.com/512/4771/4771419.png" alt="logo.svg" width="50px" />
          <span className="fs-4">Portfolio</span>
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" className="nav-link" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="nav-link">
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="certificates" className="nav-link">
              Certificates
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" className="nav-link">
              Contact Me
            </Link>
          </li>
         
        </ul>
      </header>
   
  );
};

export default Header;
