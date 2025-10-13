import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  NavBarContainer,
  NavLinks,
  NavLogoImg,
  Hamburger,
  MobileMenu,
} from "./styledComponents";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollClick = (e, sectionId) => {
    e.preventDefault();

    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }

    setMenuOpen(false);
  };

  return (
    <NavBarContainer>
      {/* Logo */}
      <NavLogoImg
        onClick={() => navigate("/")}
        src="/nav-logo1.svg"
        alt="Logo"
      />

      {/* Hamburger for mobile */}
      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>

      {/* Desktop Menu */}
      <NavLinks>
        <li>
          <a href="#about" onClick={(e) => handleScrollClick(e, "about")}>
            About
          </a>
        </li>
        <li>
          <a href="#courses" onClick={(e) => handleScrollClick(e, "courses")}>
            Courses
          </a>
        </li>
        <li>
          <a href="#workshop" onClick={(e) => handleScrollClick(e, "workshop")}>
            Workshop
          </a>
        </li>
        <li>
          <Link to="/hiring-form">Career</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </NavLinks>

      {/* Mobile Menu */}
      {menuOpen && (
        <MobileMenu>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <a href="#courses" onClick={(e) => handleScrollClick(e, "courses")}>
              Courses
            </a>
          </li>
          <li>
            <a
              href="#workshop"
              onClick={(e) => handleScrollClick(e, "workshop")}
            >
              Workshop
            </a>
          </li>
          <li>
            <Link to="/hiring-form" onClick={() => setMenuOpen(false)}>
              Career
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </MobileMenu>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
