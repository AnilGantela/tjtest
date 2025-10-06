import styled from "styled-components";

export const PageWrapper = styled.div`
  background-color: #faf8f4;
  color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 15px;
  font-family: "Poppins", sans-serif;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 1.2rem;
`;

export const LogoImage = styled.img`
  width: 60px;
  height: auto;
`;

export const LogoText = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
`;

export const Tagline = styled.p`
  font-style: italic;
  color: #333;
  margin: 10px 0 30px;
  text-align: center;
`;

export const HeadingSmall = styled.h2`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.1rem;
  color: #111;
  text-align: center;
`;

export const HeadingLarge = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  color: #111;
  margin-bottom: 35px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const TopicsContainer = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 40px;
`;

export const TopicCard = styled.div`
  background-color: ${(props) => props.bgColor || "#f5e9da"};
  border-radius: 40px;
  padding: 20px 25px;
  font-weight: 500;
  color: #222;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const NumberCircle = styled.div`
  background-color: #faf8f4;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 600;
  color: #222;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  margin-right: 15px;

  @media (max-width: 480px) {
    margin-right: 0;
  }
`;

export const TopicText = styled.div`
  flex: 1;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
`;

export const FooterText = styled.p`
  text-align: center;
  margin-top: 15px;
  font-size: 0.95rem;
  color: #444;
`;
