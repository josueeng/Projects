import styled from 'styled-components';

export const CadastroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f9fc;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 400px;
  padding: 40px;
  margin: auto;
  margin-top: 10vh;
  font-family: 'Arial', sans-serif;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  background-color: #fff;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 14px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.p`
  color: #d9534f;
  font-size: 14px;
  margin-top: 10px;
`;

export const SuccessMessage = styled.p`
  color: #5cb85c;
  font-size: 14px;
  margin-top: 10px;
`;
