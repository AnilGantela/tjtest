import styled, { keyframes, css } from "styled-components";

// Scroll fade + slide up
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

// Infinite slide animation for carousel
const slideInfinite = keyframes`
  0% { transform: translateX(+30%); }
  100% { transform: translateX(-33%); } /* move half the width (duplicate track) */
`;

export const OwnersSection = styled.div`
  width: 85%;
  margin: 90px auto;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  border-radius: 12px;

  display: flex;
  gap: 30px;

  ${(props) =>
    props.isVisible &&
    css`
      animation: ${fadeSlideUp} 1s ease-out forwards;
    `}

  opacity: 0;

  @media (max-width: 426px) {
    flex-direction: column;
  }
`;

export const TextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  max-width: 500px;
  @media (max-width: 426px) {
    text-align: center;
    align-items: center;
    max-width: 100%;
  }
`;

export const ShortHeadLine = styled.h4`
  color: #efbd04;
  font-size: 1.8rem;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const HeadLine = styled.h2`
  font-size: 4rem;
  margin-bottom: 15px;
  font-weight: 700;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Description1 = styled.p`
  font-size: 1.1rem;
  color: #a20cdf;
  line-height: 1.6;
  margin-bottom: 25px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.9rem;
    display: none;
  }
`;

export const Description2 = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 25px;
  font-weight: 500;
  display: none;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.9rem;
    display: block;
  }
`;

export const PhotosSection = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CarouselTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${slideInfinite} 50s linear infinite;
  self-align: center;

  @media (max-width: 426px) {
    flex-wrap: wrap;
    gap: 15px;
  }
`;

export const NormalTrack = styled.div`
  display: flex;
  width: max-content;
  self-align: center;
  @media (max-width: 426px) {
    flex-wrap: wrap;
    gap: 15px;
  }
`;

export const NormalItem = styled.div`
  flex-shrink: 0;
  margin-right: 20px;

  img {
    width: 18vw;
    height: 38vh;
    object-fit: cover;
    border-radius: 12px;
  }

  @media (max-width: 426px) {
    margin-right: 15px;
    img {
      width: 20vw;
      height: 20vh;
    }
  }
`;

export const CarouselItem = styled.div`
  flex-shrink: 0;
  margin-right: 20px;

  img {
    width: 12vw;
    height: 30vh;
    object-fit: cover;
    border-radius: 12px;
  }

  @media (max-width: 426px) {
    margin-right: 15px;
    img {
      width: 20vw;
      height: 20vh;
    }
  }
`;
