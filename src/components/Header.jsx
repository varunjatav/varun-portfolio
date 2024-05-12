import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("Home");
  return (
    <header className="d-flex flex-wrap justify-content-center px-3 py-3 mb-4 border-bottom">
      <a
        href="#"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none gap-3"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/4771/4771419.png"
          alt="logo.svg"
          width="50px"
        />
        <span className="fs-4">Portfolio</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href="#" className="nav-link" aria-current="page">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#skills" className="nav-link">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="#certificates" className="nav-link">
            Certificates
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
