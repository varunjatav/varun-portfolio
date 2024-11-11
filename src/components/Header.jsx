import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Link as ScrollLink,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Header = () => {
  return (
    <header className="fixed w-full d-flex flex-wrap justify-content-center px-3 py-3 mb-4 border-bottom">
      <ScrollLink
        activeClass="active"
        to=""
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none gap-3 cursor-pointer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/4771/4771419.png"
          alt="logo.svg"
          width="50px"
        />
        <span className="fs-4">Portfolio</span>
      </ScrollLink>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <ScrollLink
            activeClass="active"
            to=""
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="nav-link cursor-pointer"
            aria-current="page"
          >
            Home
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="nav-link cursor-pointer"
          >
            Skills
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="nav-link cursor-pointer"
            aria-current="page"
          >
            Projects
          </ScrollLink>
        </li>
        <li className="nav-item cursor-pointer">
          <ScrollLink
            activeClass="active"
            to="certificates"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="nav-link cursor-pointer"
            aria-current="page"
          >
            Certificates
          </ScrollLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
