import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  padding: 4vh 2vh;
`;

export const Title = styled.h2`
  text-align: center;
  color: white;
  font-size: clamp(1.5rem, 2.5vw, 2.5rem);
  margin-bottom: 10px;
`;

export const FormInnerContainer = styled.div`
  width: 100%;
  border: 1px solid red;
  display: flex;
  padding: 20px;
  gap: 5vh;
  background-color: #fff;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormImage = styled.img`
  width: 30%;
  height: auto;
  @media (max-width: 426px) {
    width: 100%;
    margin-bottom: 20px;
    max-width: 200px;
  }
`;

export const FormCard = styled.form`
  background: #fff;
  width: 100%;
  flex: 1;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
  padding: 2vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 3vh;
  animation: fadeIn 0.6s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 426px) {
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
    padding: 0;
  }
`;

export const FromInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2vh;
  width: 100%;
  @media (max-width: 426px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormInputContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  width: 100%;
  padding: 2vh;
`;

export const FormInputContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  padding: 2vh;
  width: 100%;
`;

export const Input = styled.input`
  padding: 2vh;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  outline: none;
  transition: all 0.3s;
  width: 100%;

  &:focus {
    border-color: #2575fc;
    box-shadow: 0 0 5px rgba(37, 117, 252, 0.4);
  }
`;

export const Select = styled.select`
  padding: 2vh;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  outline: none;

  &:focus {
    border-color: #2575fc;
  }
`;

export const TextArea = styled.textarea`
  padding: 2vh;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  resize: none;
  min-height: 80px;
  outline: none;
  width: 100%;

  &:focus {
    border-color: #2575fc;
  }
`;

export const Button = styled.button`
  background: linear-gradient(135deg, #2575fc, #6a11cb);
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  padding: 12px;
  cursor: pointer;
  transition: 0.3s ease;
  width: 100%;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;
