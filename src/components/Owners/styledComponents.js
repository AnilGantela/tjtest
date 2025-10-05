import styled, { keyframes, css } from "styled-components";

// Animation: fade in + slide up
const fadeSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const OwnersSection = styled.div`
  width: 85%;
  height: auto;
  margin: 20px auto;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  border-radius: 12px;
  cursor: none;

  transition: filter 0.4s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    inset: 0;

    pointer-events: none;
    mix-blend-mode: normal;
    transition: background 0.2s ease;
    z-index: 2;
  }

  /* Scroll-triggered animation */
  ${(props) =>
    props.isVisible &&
    css`
      animation: ${fadeSlideUp} 1s ease-out forwards;
    `}
  opacity: 0; /* Start hidden, will be shown when isVisible is true */
  @media (max-width: 768px) {
    filter: none;
  }
`;

export const FoundersImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  position: relative;
  z-index: 1;
`;
