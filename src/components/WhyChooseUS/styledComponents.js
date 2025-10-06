import styled, { keyframes, css } from "styled-components";

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

export const WhyChooseUsContainer = styled.section`
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 95%;
  margin: 40px auto;

  ${(props) =>
    props.isVisible &&
    css`
      animation: ${fadeSlideUp} 1s ease-out forwards;
    `}

  @media (max-width: 426px) {
    animation: none;
  }
`;

export const TextContainer = styled.div`
  text-align: center;
  background: transparent;
  padding: 10px 0px;
  width: 100%;

  margin-bottom: 20px;
`;

export const SecondaryTitle = styled.h4`
  font-size: 2rem;
  color: white;
  margin-bottom: 3px;
  letter-spacing: 1vh;
`;

export const PrimaryTitle = styled.h2`
  font-size: 3rem;
  color: #efbd04;
  letter-spacing: 2vh;
  font-weight: bold;
  text-transform: uppercase;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;
export const Card = styled.div`
  background: ${(props) => props.backgroundColor || "#fff"};
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 32px 24px;
  max-width: 320px;
  flex: 1 1 280px;
  text-align: center;

  &:hover {
    box-shadow: 0 0 25px #efbd04;
  }
  @media (max-width: 426px) {
    ${(props) =>
      props.isVisible &&
      css`
        animation: ${fadeSlideUp} 1s ease-out forwards;
      `}
  }
`;
export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 16px;
  font-weight: 600;
  text-transform: capitalize;
  color: ${(props) => props.textColor || "#333"};
`;
export const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
  text-align: left;
  text-transform: capitalize;
  &:hover {
    color: #efbd04;
  }
`;
