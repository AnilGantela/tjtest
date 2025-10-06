// src/pages/HiringForm/styledComponents.js
import styled, { keyframes } from "styled-components";

// Animations
const robotFloat = keyframes`
  0%,100% { transform: translateY(0); opacity: 0.6; }
  50% { transform: translateY(-30px); opacity: 0.8; }
`;

const sensorPulse = keyframes`
  0%,100% { transform: scale(1); opacity: 0.4; }
  50% { transform: scale(1.2); opacity: 0.7; }
`;

const circuitFlow = keyframes`
  0% { transform: translateX(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(100vw); opacity: 0; }
`;

// Styled Components
export const PageWrapper = styled.div`
  margin: 0;
  font-family: "Poppins", sans-serif;
  background: #0a0a0a;
  color: white;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

export const Header = styled.header`
  text-align: center;
  padding: 40px 20px 10px;
  position: relative;
  z-index: 5;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #ffc300;
  display: inline-flex;
  align-items: center;
  gap: 15px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`;

export const SubTitle = styled.p`
  color: #aaa;
  font-size: 1.1rem;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  max-width: 480px;
  margin: 60px auto;
  padding: 30px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(255, 195, 0, 0.4);
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 5;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  display: block;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  margin-bottom: 10px;
  background: white;
  color: black;
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #ffc300;
  border: none;
  border-radius: 8px;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #ffdb4d;
  }
`;

// File upload styling
export const FileUploadWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 15px;

  input[type="file"] {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

export const FileUploadButton = styled.div`
  border: 2px dashed #ffc300;
  color: white;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
`;

export const FileInfo = styled.div`
  color: #ffc300;
  font-size: 0.9rem;
  margin-top: 5px;
`;

// Background animations
export const RobotComponent = styled.div`
  position: fixed;
  z-index: 1;
  opacity: 0.6;
  pointer-events: none;
  animation: ${robotFloat} 12s ease-in-out infinite;
`;

export const SensorIcon = styled.div`
  position: fixed;
  z-index: 1;
  opacity: 0.6;
  pointer-events: none;
  animation: ${sensorPulse} 8s ease-in-out infinite;
`;

export const CircuitLine = styled.div`
  position: fixed;
  z-index: 1;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 195, 0, 0.6),
    transparent
  );
  pointer-events: none;
  animation: ${circuitFlow} 15s linear infinite;
`;
