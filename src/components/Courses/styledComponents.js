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

export const TextContainer1 = styled.div`
  text-align: center;
  margin-bottom: 30px;
  @media (max-width: 480px) {
    text-align: center;
  }
`;

export const SecondaryTitle = styled.h3`
  font-size: 1.2rem;
  letter-spacing: 2px;
  color: #fff;
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

export const CardsContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;

export const CoursesContainer = styled.div`
  width: 95%;
  margin-top: 5vh;
  ${(props) =>
    props.containervisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

export const CourseCard = styled.div`
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 45%;
  cursor: pointer;
  background: ${(props) => props.backgroundcolor || "rgba(20, 20, 40, 0.85)"};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.15);

  &:hover {
    transform: translateY(-5px);
  }

  /* Desktop: all cards visible once container animates */
  @media (min-width: 427px) {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
    padding: 0.8rem;
  }

  @media (max-width: 426px) {
    width: 90%;
    padding: 0.5rem;
    ${(props) =>
      props.isvisible &&
      css`
        animation: ${fadeSlideUp} 0.8s ease-out forwards;
      `}
  }
`;

export const CourseTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #efbd04;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  @media (max-width: 426px) {
    font-size: 1.1rem;
    text-align: center;
  }
`;

export const CourseDescription = styled.ul`
  font-size: 1rem;
  color: white;
  line-height: 1.4;
  text-align: left;
  list-style-type: none;
  padding-left: 1.2rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
  @media (max-width: 426px) {
    font-size: 0.85rem;
    text-align: center;
    padding-left: 0;
  }
`;

export const TextContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  width: 40%;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 60%;
    margin-bottom: 1rem;
  }

  @media (max-width: 426px) {
    width: 80%;
  }
`;

export const CardPara = styled.p`
  font-size: 0.9rem;
  color: #efbd04;
  font-style: italic;
  margin-top: 0.5rem;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 426px) {
    font-size: 0.75rem;
  }
`;
