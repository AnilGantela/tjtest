import styled from "styled-components";

export const NavBarContainer = styled.div`
  background-color: #efbd04;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  box-sizing: border-box;
  position: relative;
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
    color: black;
  }
  a:hover {
    color: white;
    transition: color 0.3s ease;
  }

  @media (max-width: 426px) {
    display: none; /* hide desktop nav links on small devices */
  }
`;

export const NavLogoImg = styled.img`
  height: 5vh;
  width: auto;
  background: transparent;
  margin-left: 2vh;
  @media (max-width: 425px) {
    height: 4vh;
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
    display: flex; /* show hamburger on small devices */
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
  z-index: 1000;

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
