import styled from "styled-components";

export const NavBarContainer = styled.div`
  width: 95%;
  height: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  /* 🧩 Fix position and center horizontally */
  position: fixed;
  top: 10px; /* distance from top */
  left: 50%;
  transform: translateX(-50%); /* centers the navbar */
  z-index: 1000;

  -webkit-scroll-bar: none; /* for Chrome, Safari, and Opera */
  -ms-overflow-style: none; /* for Internet Explorer and Edge */
  scrollbar-width: none; /* for Firefox */
  padding: 10px;

  /* 🖤 Glossy Dark Glassmorphism Style */
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  background-image: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.1),
    rgba(0, 0, 0, 0.8)
  );
  @media print {
    display: none;
  }
`;

export const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-size: 18px;
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    color: white;
    transition: color 0.3s ease;
  }

  @media (max-width: 426px) {
    display: none;
  }
`;

export const NavLogoImg = styled.img`
  height: 16vh;
  width: auto;
  background: transparent;
  margin-left: 2vh;
  cursor: pointer;
  @media (max-width: 425px) {
    height: 10vh;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
  margin-right: 5px;

  span {
    width: 25px;
    height: 3px;
    background: white;
    border-radius: 2px;
  }

  @media (max-width: 426px) {
    display: flex;
  }
`;

export const MobileMenu = styled.ul`
  list-style-type: none;
  position: absolute;
  top: 8vh;
  right: 0;
  width: 100%;
  background: #efbd04;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  color: white;
  border-radius: 0 0 12px 12px;
  z-index: 1100; /* 🚀 ensures mobile menu appears above everything */

  li {
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    border-bottom: 1px solid white;
  }

  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    color: black;
    transition: color 0.3s ease;
  }
`;
