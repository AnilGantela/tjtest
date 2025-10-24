import styled from "styled-components";

// ---- styled components ----
export const FooterContainer = styled.footer`
  background-color: rgba(20, 20, 40, 0.85);
  width: 100%;
  color: #fff;
  text-align: center;
  padding-bottom: 2vh;
`;

export const FooterInnerContainer = styled.div`
  background-color: rgba(20, 20, 40, 0.85);
  width: 100%;

  display: flex;
  gap: 2vh;
  flex-wrap: wrap;
  max-height: 350px;
  @media (max-width: 769px) {
    max-height: none;
  }

  @media (max-width: 426px) {
    max-height: none;
    flex-direction: column;
  }
`;

export const FooterLogoImg = styled.img`
  height: 25vh;
  width: auto;
  background: transparent;
  margin-left: -12vh;
  cursor: pointer;

  @media (max-width: 426px) {
    width: 30%;
    margin-left: 0;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  padding: 2vh;
  @media (max-width: 426px) {
    gap: 1rem;
    justify-content: center;
  }
`;

export const IconWrapper = styled.div`
  width: 5vh;
  height: 5vh;
  cursor: pointer;
  display: flex; /* ensures Lottie stays centered */
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
    background-color: ${(props) => props.hoverBackground || "transparent"};
  }
  @media (max-width: 426px) {
    width: 5vh;
    height: 5vh;
  }

  canvas,
  svg {
    width: 100% !important; /* keeps the animation size consistent */
    height: 100% !important;
  }
`;

export const QuickLinksContainer = styled.div`
  max-width: 500px;
  max-height: 300px;
  gap: 2rem;
  padding: 1vh;
  h3 {
    text-align: left;
    color: #ffffff6f;
    font-size: clamp(1.5rem, 1vw + 0.5rem, 1.2rem);
    margin-bottom: 2vh;
  }
  @media (max-width: 426px) {
    max-width: none;
    width: 100%;

    gap: 2vh;
    h3 {
      text-align: left;
      margin-left: 2vh;
    }
  }
`;

export const PolicyLinksContainer = styled.div`
  max-width: 500px;
  gap: 2rem;
  padding: 1vh;
  h3 {
    text-align: left;
    color: #ffffff6f;
    font-size: clamp(1.5rem, 1vw + 0.5rem, 1.2rem);
    margin-bottom: 2vh;
  }
  @media (max-width: 426px) {
    h3 {
      text-align: center;
    }
  }
`;

export const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 500px;
  max-height: 250px;
  padding: 1vh;
  gap: 2rem;

  @media (max-width: 426px) {
    max-height: 200px;
    align-self: flex-start;
    max-width: none;
    width: 100%;
    padding-left: 2vh;
    gap: 2vh;
  }
`;

export const PolicyLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  max-width: 500px;
  padding: 1vh;
  gap: 1rem;
  @media (max-width: 426px) {
    flex-direction: row;
    justify-content: center;
    max-width: none;
    width: 100%;
    gap: 2vh;
  }
`;
export const QuickLinkItem = styled.a`
  color: #d1d1e0;
  text-decoration: none;
  font-weight: 500;
  font-size: clamp(0.7rem, 1vw + 0.5rem, 0.9rem);
  transition: color 0.3s ease;
  &:hover {
    color: #efbd04;
  }
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  color: #aaa;
  margin-top: 1rem;
`;

export const ReachUs = styled.div`
  margin: 1rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: fit-content;
  gap: 2vh;
`;

export const ReachUsItem = styled.div`
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 2vh;
  font-size: clamp(0.7rem, 1vw + 0.5rem, 0.9rem);
  text-align: center;

  &:hover {
    color: #ff007f;
  }
  img {
    height: 5vh;
  }
  a {
    color: #d1d1e0;
    text-decoration: none;
  }
`;

export const FirstContainer = styled.div`
  padding-left: 2vh;
  max-height: 330px;

  @media (max-width: 426px) {
    display: flex;
    align-items: center;
  }
`;

export const SecondContainer = styled.div`
  max-width: 500px;
  max-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 426px) {
    max-height: none;
  }
`;

export const ThirdContainer = styled.div`
  max-width: 500px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 426px) {
    max-height: none;
  }
`;
