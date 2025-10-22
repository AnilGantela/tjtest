import styled from "styled-components";

// ---- styled components ----
export const FooterContainer = styled.footer`
  background-color: rgba(20, 20, 40, 0.85);
  width: 100%;
  color: #fff;
`;

export const FooterLogoImg = styled.img`
  height: 25vh;
  width: auto;
  background: transparent;
  margin-left: 2vh;
  cursor: pointer;
  @media (max-width: 425px) {
    height: 10vh;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  margin: 1.5rem 0;
  border: 2px solid green;
  width: fit-content;
  padding: 2vh;
  @media (max-width: 426px) {
    gap: 1rem;
    width: 30%;
    flex-wrap: wrap;
    padding: 1vh;
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

  canvas,
  svg {
    width: 100% !important; /* keeps the animation size consistent */
    height: 100% !important;
  }
`;

export const QuickLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1.5rem 0;
`;
export const QuickLinkItem = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  &:hover {
    color: #ff007f;
  }
`;

export const ContactButton = styled.a`
  margin-top: 1rem;
  background: linear-gradient(90deg, #ff007f, #a20cdf);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background: linear-gradient(90deg, #a20cdf, #ff007f);
    transform: scale(1.05);
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
`;

export const ReachUsEmail = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    color: #ff007f;
  }
`;
