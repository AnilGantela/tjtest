import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  font-family: "Poppins", sans-serif;
  background-color: #0a0a0a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

export const Title = styled.h1`
  color: #ffc300;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const Message = styled.p`
  font-size: 1.2rem;
  color: #ddd;
`;

export const BackLink = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ffc300;
  color: black;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffdb4d;
  }
`;
