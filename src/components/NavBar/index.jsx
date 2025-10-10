// NavBar.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  NavBarContainer,
  NavLinks,
  NavLogoImg,
  Hamburger,
  MobileMenu,
} from "./styledComponents";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigator = useNavigate();

  return (
    <NavBarContainer>
      <NavLogoImg
        onClick={() => navigator("/")}
        src="/nav-logo1.svg"
        alt="Logo"
      />

      {/* Hamburger for small devices */}
      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
        <span />
      </Hamburger>

      {/* Desktop Nav Links */}
      <NavLinks>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/hiring-form">Career</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </NavLinks>

      {/* Mobile Menu (visible when hamburger clicked) */}
      {menuOpen && (
        <MobileMenu>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <li>
              <button
                onClick={() => {
                  // Navigate to home and pass state
                  navigate("/", { state: { scrollToCourses: true } });
                  setMenuOpen(false);
                }}
              >
                Courses
              </button>
            </li>
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
