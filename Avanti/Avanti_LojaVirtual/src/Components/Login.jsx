import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #005CFF;
  color: #fff;
  border: none;
  cursor: pointer;
`;

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://api-gestao-de-usuarios-com-flask.onrender.com/login', {
        email,
        senha,
      });
      
      // Supondo que a resposta retorne um objeto "user" com a propriedade "nome"
      if (response.data && response.data.user) {
        setUser(response.data.user);
      } else {
        setError('Login falhou. Confira seus dados.');
      }
    } catch (err) {
      setError('Erro durante o login. Tente novamente.');
    }
  };

  // Se o usuário estiver logado, exibe a mensagem de boas-vindas.
  if (user) {
    return (
      <LoginContainer>
        <h2>Olá, {user.nome}, seja bem-vindo!</h2>
      </LoginContainer>
    );
  }

  return (
    <LoginContainer>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <Input 
          type="password" 
          placeholder="Senha" 
          value={senha} 
          onChange={(e) => setSenha(e.target.value)} 
          required 
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit">Entrar</Button>
      </Form>
    </LoginContainer>
  );
}

export default Login;
