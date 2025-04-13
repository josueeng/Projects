import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
 
`;

export const BackLogin = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  object-fit: cover;
  opacity: 0.5; 
  z-index: 1;
`;

export const Form = styled.form`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const ContForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 40px 10px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

export const SuccessMessage = styled.p`
  color: green;
  font-size: 14px;
  margin-top: 10px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;
