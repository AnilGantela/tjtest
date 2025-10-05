import styled, { css } from "styled-components";

export const HomeDashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 96%;
  margin: 10px auto;
  -webkit-scroll-bar: none; /* for Chrome, Safari, and Opera */
  -ms-overflow-style: none; /* for Internet Explorer and Edge */
  scrollbar-width: none; /* for Firefox */
`;

export const HeroSection = styled.div`
  position: relative;
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #efbd04;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 50vh;
    width: 95%;
  }

  @media (max-width: 768px) {
    height: 40vh;
    width: 100%;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const Tagline = styled.h1`
  position: relative;
  z-index: 2;
  font-size: 2.5rem;
  max-width: 900px;
  line-height: 1.4;
  font-weight: 700;
  padding: 0 1rem;
  color: #fff;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const CornerImage = styled.img`
  position: absolute;
  width: 25%;
  height: auto;
  opacity: 0.9;
  z-index: 0;

  ${({ position }) =>
    position === "top-left" &&
    css`
      top: 10px;
      left: 10px;
    `}

  ${({ position }) =>
    position === "bottom-right" &&
    css`
      bottom: 10px;
      right: 10px;
    `}

  @media (max-width: 1024px) {
    width: 25%;
  }

  @media (max-width: 768px) {
    width: 30%;
  }

  @media (max-width: 480px) {
    width: 30%;
  }
`;
