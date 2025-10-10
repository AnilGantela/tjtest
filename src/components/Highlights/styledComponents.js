import styled, { keyframes, css } from "styled-components";

// Animations
const fadeSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const WhyChooseUsContainer = styled.section`
  color: #fff;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s ease, transform 0.6s ease;

  ${(props) =>
    props.containervisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

export const TextContainer = styled.div`
  text-align: left;
  margin-bottom: 50px;
  align-self: flex-start;
  @media (max-width: 426px) {
    text-align: center;
    align-self: center;
  }
`;

export const SecondaryTitle = styled.h3`
  font-size: 1.2rem;
  letter-spacing: 2px;

  margin-bottom: 10px;
  @media (min-width: 480px) {
    font-size: 2rem;
    letter-spacing: 1vh;
  }
`;

export const PrimaryTitle = styled.h2`
  font-size: 2.4rem;
  color: #fff;
  text-transform: uppercase;
  color: #efbd04;
  font-weight: 700;
  @media (min-width: 480px) {
    font-size: 3.5rem;
    letter-spacing: 2vh;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5vh;
`;

export const Card = styled.div`
  background: ${(props) => props.backgroundcolor || "rgba(20, 20, 40, 0.85)"};
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 32px 24px;
  max-width: 320px;
  flex: 1 1 280px;
  text-align: center;
  opacity: 0;
  transform: translateY(40px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 25px #efbd04;
    transform: translateY(-5px);
  }

  /* Mobile only: animate each card */
  @media (max-width: 426px) {
    ${(props) =>
      props.isvisible &&
      css`
        animation: ${fadeSlideUp} 0.8s ease-out forwards;
      `}
  }

  /* Desktop: all cards visible once container animates */
  @media (min-width: 427px) {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardTitle = styled.h4`
  font-size: 1.4rem;
  color: ${(props) => props.textcolor || "#fff"};
  margin-bottom: 12px;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #ddd;
  &:hover {
    color: #efbd04;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
`;
