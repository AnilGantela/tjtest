import styled from "styled-components";
export const WipContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  text-align: center;
  background: transparent;
`;

export const WipTitle = styled.h1`
  font-size: clamp(1.5rem, 5vw, 3rem);
  color: white;
  margin-bottom: 1rem;
`;

export const WipText = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  color: #efbd04;
  margin-bottom: 2rem;
  max-width: 600px;
`;

export const WipImage = styled.img`
  width: 80%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
`;
